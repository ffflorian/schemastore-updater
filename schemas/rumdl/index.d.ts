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
 * Preference for resolving an external executable. Explicit paths bypass this.
 */
export type BinaryPreference = 'project' | 'system' | 'only-project' | 'only-system';
/**
 * Supported authoritative sources for external tool versions.
 */
export type ToolVersionDefinition =
  'auto' | 'uv.lock' | 'pyproject.toml' | '.pre-commit-config.yaml' | '.pre-commit-config.yml' | 'prek.toml';
/**
 * Behavior when a configured coverage or availability condition is unmet.
 */
export type OnMissing = 'ignore' | 'warn' | 'fail' | 'fail-fast';
/**
 * Error handling strategy for tool execution failures.
 */
export type OnError = 'fail' | 'skip' | 'warn';
/**
 * Severity of the findings a rule reports: `error`, `warning` or `info`.
 * Matched case-insensitively.
 */
export type Severity = string;

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
  /**
   * Enabled rules
   */
  enable?: string[];
  /**
   * Disabled rules
   */
  disable?: string[];
  /**
   * Files to include. Glob patterns, relative to the project root; a
   * leading `~/` expands to the home directory and absolute paths are
   * matched as written.
   */
  include?: string[];
  /**
   * Files to exclude. Glob patterns, relative to the project root; a
   * leading `~/` expands to the home directory and absolute paths are
   * matched as written.
   */
  exclude?: string[];
  /**
   * Additional rules to enable on top of the base set (additive)
   */
  'extend-enable'?: string[];
  /**
   * Additional rules to enable on top of the base set (additive)
   */
  extend_enable?: string[];
  /**
   * Additional rules to disable on top of the base set (additive)
   */
  'extend-disable'?: string[];
  /**
   * Additional rules to disable on top of the base set (additive)
   */
  extend_disable?: string[];
  /**
   * Respect .gitignore, .ignore and git exclude files when scanning
   * directories. .markdownlintignore applies regardless, and explicitly
   * named files bypass both.
   */
  'respect-gitignore'?: boolean;
  /**
   * Respect .gitignore, .ignore and git exclude files when scanning
   * directories. .markdownlintignore applies regardless, and explicitly
   * named files bypass both.
   */
  respect_gitignore?: boolean;
  /**
   * @deprecated
   * \[DEPRECATED\] Whether to enforce exclude patterns for explicitly passed paths.
   * This option is deprecated as of v0.0.156 and has no effect.
   * Exclude patterns are now always respected, even for explicitly provided files.
   * This prevents duplication between rumdl config and tool configs like pre-commit.
   */
  'force-exclude'?: boolean;
  /**
   * @deprecated
   * \[DEPRECATED\] Whether to enforce exclude patterns for explicitly passed paths.
   * This option is deprecated as of v0.0.156 and has no effect.
   * Exclude patterns are now always respected, even for explicitly provided files.
   * This prevents duplication between rumdl config and tool configs like pre-commit.
   */
  force_exclude?: boolean;
  'line-length'?: (number | null) | MD013;
  line_length?: (number | null) | MD013;
  /**
   * Output format for linting results (e.g., "text", "json", "pylint", etc.)
   */
  'output-format'?: string | null;
  /**
   * Output format for linting results (e.g., "text", "json", "pylint", etc.)
   */
  output_format?: string | null;
  /**
   * Directory to store cache files (default: .rumdl_cache).
   * A leading `~/` expands to the home directory; a relative path resolves
   * against the project root.
   * Can also be set via --cache-dir CLI flag or RUMDL_CACHE_DIR environment variable
   */
  'cache-dir'?: string | null;
  /**
   * Directory to store cache files (default: .rumdl_cache).
   * A leading `~/` expands to the home directory; a relative path resolves
   * against the project root.
   * Can also be set via --cache-dir CLI flag or RUMDL_CACHE_DIR environment variable
   */
  cache_dir?: string | null;
  /**
   * Whether caching is enabled (default: true)
   * Can also be disabled via --no-cache CLI flag
   */
  cache?: boolean;
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
   * Markdown flavor/dialect. Accepts: standard, gfm, mkdocs, mdx, pandoc, quarto, obsidian, kramdown, azure_devops, myst, hugo, mdg, gh-aw (preview). Aliases: commonmark/github map to standard, qmd/rmd/rmarkdown map to quarto, jekyll maps to kramdown, azure/ado map to azure_devops, mystmd maps to myst, goldmark maps to hugo, markdown_with_gherkin maps to mdg.
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
   * Whether to read settings from `.editorconfig` files (default: false).
   * When enabled, the `.editorconfig` properties that map onto rumdl
   * settings fill in anything no rumdl config sets, resolved per file so
   * section globs and nested `.editorconfig` files apply as written.
   */
  editorconfig?: boolean;
  MD001?: MD001;
  MD003?: MD003;
  MD004?: MD004;
  MD005?: MD005;
  MD007?: MD007;
  MD009?: MD009;
  MD010?: MD010;
  MD011?: MD011;
  MD012?: MD012;
  MD013?: MD013;
  MD014?: MD014;
  MD018?: MD018;
  MD019?: MD019;
  MD020?: MD020;
  MD021?: MD021;
  MD022?: MD022;
  MD023?: MD023;
  MD024?: MD024;
  MD025?: MD025;
  MD026?: MD026;
  MD027?: MD027;
  MD028?: MD028;
  MD029?: MD029;
  MD030?: MD030;
  MD031?: MD031;
  MD032?: MD032;
  MD033?: MD033;
  MD034?: MD034;
  MD035?: MD035;
  MD036?: MD036;
  MD037?: MD037;
  MD038?: MD038;
  MD039?: MD039;
  MD040?: MD040;
  MD041?: MD041;
  MD042?: MD042;
  MD043?: MD043;
  MD044?: MD044;
  MD045?: MD045;
  MD046?: MD046;
  MD047?: MD047;
  MD048?: MD048;
  MD049?: MD049;
  MD050?: MD050;
  MD051?: MD051;
  MD052?: MD052;
  MD053?: MD053;
  MD054?: MD054;
  MD055?: MD055;
  MD056?: MD056;
  MD057?: MD057;
  MD058?: MD058;
  MD059?: MD059;
  MD060?: MD060;
  MD061?: MD061;
  MD062?: MD062;
  MD063?: MD063;
  MD064?: MD064;
  MD065?: MD065;
  MD066?: MD066;
  MD067?: MD067;
  MD068?: MD068;
  MD069?: MD069;
  MD070?: MD070;
  MD071?: MD071;
  MD072?: MD072;
  MD073?: MD073;
  MD074?: MD074;
  MD075?: MD075;
  MD076?: MD076;
  MD077?: MD077;
  MD078?: MD078;
  MD079?: MD079;
  MD080?: MD080;
  MD081?: MD081;
  MD082?: MD082;
  MD083?: MD083;
  MD084?: MD084;
  MD085?: MD085;
  MD086?: MD086;
  MD087?: MD087;
  MD088?: MD088;
  MD089?: MD089;
  MD090?: MD090;
  MD091?: MD091;
  MD092?: MD092;
  MD093?: MD093;
  MD094?: MD094;
  MD095?: MD095;
  MD096?: MD096;
  'blank-line-after-frontmatter'?: MD071;
  'blanks-around-fences'?: MD031;
  'blanks-around-headings'?: MD022;
  'blanks-around-horizontal-rules'?: MD065;
  'blanks-around-lists'?: MD032;
  'blanks-around-tables'?: MD058;
  'chunk-label-spaces'?: MD079;
  'cjk-spacing'?: MD089;
  'code-block-style'?: MD046;
  'code-fence-style'?: MD048;
  'commands-show-output'?: MD014;
  'descriptive-link-text'?: MD059;
  'emphasis-style'?: MD049;
  'empty-footnote-definition'?: MD068;
  'existing-relative-links'?: MD057;
  'fenced-code-language'?: MD040;
  'first-line-h1'?: MD041;
  'first-line-heading'?: MD041;
  'footnote-definition-order'?: MD067;
  'footnote-validation'?: MD066;
  'forbidden-terms'?: MD061;
  'frontmatter-key-sort'?: MD072;
  'heading-anchor-collision'?: MD080;
  'heading-capitalization'?: MD063;
  'heading-increment'?: MD001;
  'heading-start-left'?: MD023;
  'heading-style'?: MD003;
  'hr-style'?: MD035;
  'invalid-encoding'?: MD094;
  'invisible-characters'?: MD084;
  'link-confusables'?: MD095;
  'link-destination-whitespace'?: MD062;
  'link-fragments'?: MD051;
  'link-image-reference-definitions'?: MD053;
  'link-image-style'?: MD054;
  'list-continuation-indent'?: MD077;
  'list-indent'?: MD005;
  'list-item-spacing'?: MD076;
  'list-marker-space'?: MD030;
  'merge-conflict'?: MD092;
  'missing-chunk-labels'?: MD078;
  'mkdocs-nav'?: MD074;
  mojibake?: MD083;
  'nested-code-fence'?: MD070;
  'no-alt-text'?: MD045;
  'no-bare-urls'?: MD034;
  'no-blanks-blockquote'?: MD028;
  'no-duplicate-heading'?: MD024;
  'no-duplicate-list-markers'?: MD069;
  'no-emphasis-as-heading'?: MD036;
  'no-empty-links'?: MD042;
  'no-empty-sections'?: MD082;
  'no-excessive-emphasis'?: MD081;
  'no-formatting-in-headings'?: MD093;
  'no-hard-tabs'?: MD010;
  'no-hr-before-heading'?: MD090;
  'no-inline-html'?: MD033;
  'no-markdown-in-html'?: MD091;
  'no-missing-space-atx'?: MD018;
  'no-missing-space-closed-atx'?: MD020;
  'no-multiple-blanks'?: MD012;
  'no-multiple-consecutive-spaces'?: MD064;
  'no-multiple-space-atx'?: MD019;
  'no-multiple-space-blockquote'?: MD027;
  'no-multiple-space-closed-atx'?: MD021;
  'no-reversed-links'?: MD011;
  'no-space-in-code'?: MD038;
  'no-space-in-emphasis'?: MD037;
  'no-space-in-link-destination'?: MD062;
  'no-space-in-links'?: MD039;
  'no-trailing-punctuation'?: MD026;
  'no-trailing-spaces'?: MD009;
  'no-unclosed-comments'?: MD086;
  'ol-prefix'?: MD029;
  'orphaned-table-rows'?: MD075;
  'paragraph-continuation-indent'?: MD085;
  'proper-names'?: MD044;
  'quotes-dashes'?: MD088;
  'reference-links-images'?: MD052;
  'required-headings'?: MD043;
  'single-h1'?: MD025;
  'single-title'?: MD025;
  'single-trailing-newline'?: MD047;
  'strong-style'?: MD050;
  'table-cell-alignment'?: MD060;
  'table-column-count'?: MD056;
  'table-column-style'?: MD060;
  'table-format'?: MD060;
  'table-pipe-style'?: MD055;
  'table-sort'?: MD096;
  'toc-validation'?: MD073;
  'ul-indent'?: MD007;
  'ul-style'?: MD004;
  'unused-disable-comment'?: MD087;
  /**
   * Rule sections under a `[rules]` heading: `[rules.MD013]` is the same as `[MD013]`.
   */
  rules?: {
    MD001?: MD001;
    MD003?: MD003;
    MD004?: MD004;
    MD005?: MD005;
    MD007?: MD007;
    MD009?: MD009;
    MD010?: MD010;
    MD011?: MD011;
    MD012?: MD012;
    MD013?: MD013;
    MD014?: MD014;
    MD018?: MD018;
    MD019?: MD019;
    MD020?: MD020;
    MD021?: MD021;
    MD022?: MD022;
    MD023?: MD023;
    MD024?: MD024;
    MD025?: MD025;
    MD026?: MD026;
    MD027?: MD027;
    MD028?: MD028;
    MD029?: MD029;
    MD030?: MD030;
    MD031?: MD031;
    MD032?: MD032;
    MD033?: MD033;
    MD034?: MD034;
    MD035?: MD035;
    MD036?: MD036;
    MD037?: MD037;
    MD038?: MD038;
    MD039?: MD039;
    MD040?: MD040;
    MD041?: MD041;
    MD042?: MD042;
    MD043?: MD043;
    MD044?: MD044;
    MD045?: MD045;
    MD046?: MD046;
    MD047?: MD047;
    MD048?: MD048;
    MD049?: MD049;
    MD050?: MD050;
    MD051?: MD051;
    MD052?: MD052;
    MD053?: MD053;
    MD054?: MD054;
    MD055?: MD055;
    MD056?: MD056;
    MD057?: MD057;
    MD058?: MD058;
    MD059?: MD059;
    MD060?: MD060;
    MD061?: MD061;
    MD062?: MD062;
    MD063?: MD063;
    MD064?: MD064;
    MD065?: MD065;
    MD066?: MD066;
    MD067?: MD067;
    MD068?: MD068;
    MD069?: MD069;
    MD070?: MD070;
    MD071?: MD071;
    MD072?: MD072;
    MD073?: MD073;
    MD074?: MD074;
    MD075?: MD075;
    MD076?: MD076;
    MD077?: MD077;
    MD078?: MD078;
    MD079?: MD079;
    MD080?: MD080;
    MD081?: MD081;
    MD082?: MD082;
    MD083?: MD083;
    MD084?: MD084;
    MD085?: MD085;
    MD086?: MD086;
    MD087?: MD087;
    MD088?: MD088;
    MD089?: MD089;
    MD090?: MD090;
    MD091?: MD091;
    MD092?: MD092;
    MD093?: MD093;
    MD094?: MD094;
    MD095?: MD095;
    MD096?: MD096;
    'blank-line-after-frontmatter'?: MD071;
    'blanks-around-fences'?: MD031;
    'blanks-around-headings'?: MD022;
    'blanks-around-horizontal-rules'?: MD065;
    'blanks-around-lists'?: MD032;
    'blanks-around-tables'?: MD058;
    'chunk-label-spaces'?: MD079;
    'cjk-spacing'?: MD089;
    'code-block-style'?: MD046;
    'code-fence-style'?: MD048;
    'commands-show-output'?: MD014;
    'descriptive-link-text'?: MD059;
    'emphasis-style'?: MD049;
    'empty-footnote-definition'?: MD068;
    'existing-relative-links'?: MD057;
    'fenced-code-language'?: MD040;
    'first-line-h1'?: MD041;
    'first-line-heading'?: MD041;
    'footnote-definition-order'?: MD067;
    'footnote-validation'?: MD066;
    'forbidden-terms'?: MD061;
    'frontmatter-key-sort'?: MD072;
    'heading-anchor-collision'?: MD080;
    'heading-capitalization'?: MD063;
    'heading-increment'?: MD001;
    'heading-start-left'?: MD023;
    'heading-style'?: MD003;
    'hr-style'?: MD035;
    'invalid-encoding'?: MD094;
    'invisible-characters'?: MD084;
    'line-length'?: MD013;
    'link-confusables'?: MD095;
    'link-destination-whitespace'?: MD062;
    'link-fragments'?: MD051;
    'link-image-reference-definitions'?: MD053;
    'link-image-style'?: MD054;
    'list-continuation-indent'?: MD077;
    'list-indent'?: MD005;
    'list-item-spacing'?: MD076;
    'list-marker-space'?: MD030;
    'merge-conflict'?: MD092;
    'missing-chunk-labels'?: MD078;
    'mkdocs-nav'?: MD074;
    mojibake?: MD083;
    'nested-code-fence'?: MD070;
    'no-alt-text'?: MD045;
    'no-bare-urls'?: MD034;
    'no-blanks-blockquote'?: MD028;
    'no-duplicate-heading'?: MD024;
    'no-duplicate-list-markers'?: MD069;
    'no-emphasis-as-heading'?: MD036;
    'no-empty-links'?: MD042;
    'no-empty-sections'?: MD082;
    'no-excessive-emphasis'?: MD081;
    'no-formatting-in-headings'?: MD093;
    'no-hard-tabs'?: MD010;
    'no-hr-before-heading'?: MD090;
    'no-inline-html'?: MD033;
    'no-markdown-in-html'?: MD091;
    'no-missing-space-atx'?: MD018;
    'no-missing-space-closed-atx'?: MD020;
    'no-multiple-blanks'?: MD012;
    'no-multiple-consecutive-spaces'?: MD064;
    'no-multiple-space-atx'?: MD019;
    'no-multiple-space-blockquote'?: MD027;
    'no-multiple-space-closed-atx'?: MD021;
    'no-reversed-links'?: MD011;
    'no-space-in-code'?: MD038;
    'no-space-in-emphasis'?: MD037;
    'no-space-in-link-destination'?: MD062;
    'no-space-in-links'?: MD039;
    'no-trailing-punctuation'?: MD026;
    'no-trailing-spaces'?: MD009;
    'no-unclosed-comments'?: MD086;
    'ol-prefix'?: MD029;
    'orphaned-table-rows'?: MD075;
    'paragraph-continuation-indent'?: MD085;
    'proper-names'?: MD044;
    'quotes-dashes'?: MD088;
    'reference-links-images'?: MD052;
    'required-headings'?: MD043;
    'single-h1'?: MD025;
    'single-title'?: MD025;
    'single-trailing-newline'?: MD047;
    'strong-style'?: MD050;
    'table-cell-alignment'?: MD060;
    'table-column-count'?: MD056;
    'table-column-style'?: MD060;
    'table-format'?: MD060;
    'table-pipe-style'?: MD055;
    'table-sort'?: MD096;
    'toc-validation'?: MD073;
    'ul-indent'?: MD007;
    'ul-style'?: MD004;
    'unused-disable-comment'?: MD087;
    [k: string]:
      | RuleConfig
      | MD001
      | MD003
      | MD004
      | MD005
      | MD007
      | MD009
      | MD010
      | MD011
      | MD012
      | MD013
      | MD014
      | MD018
      | MD019
      | MD020
      | MD021
      | MD022
      | MD023
      | MD024
      | MD025
      | MD026
      | MD027
      | MD028
      | MD029
      | MD030
      | MD031
      | MD032
      | MD033
      | MD034
      | MD035
      | MD036
      | MD037
      | MD038
      | MD039
      | MD040
      | MD041
      | MD042
      | MD043
      | MD044
      | MD045
      | MD046
      | MD047
      | MD048
      | MD049
      | MD050
      | MD051
      | MD052
      | MD053
      | MD054
      | MD055
      | MD056
      | MD057
      | MD058
      | MD059
      | MD060
      | MD061
      | MD062
      | MD063
      | MD064
      | MD065
      | MD066
      | MD067
      | MD068
      | MD069
      | MD070
      | MD071
      | MD072
      | MD073
      | MD074
      | MD075
      | MD076
      | MD077
      | MD078
      | MD079
      | MD080
      | MD081
      | MD082
      | MD083
      | MD084
      | MD085
      | MD086
      | MD087
      | MD088
      | MD089
      | MD090
      | MD091
      | MD092
      | MD093
      | MD094
      | MD095
      | MD096
      | undefined;
  };
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
    | string[]
    | boolean
    | number
    | MD013
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
    | 'gh-aw'
    | MD001
    | MD003
    | MD004
    | MD005
    | MD007
    | MD009
    | MD010
    | MD011
    | MD012
    | MD014
    | MD018
    | MD019
    | MD020
    | MD021
    | MD022
    | MD023
    | MD024
    | MD025
    | MD026
    | MD027
    | MD028
    | MD029
    | MD030
    | MD031
    | MD032
    | MD033
    | MD034
    | MD035
    | MD036
    | MD037
    | MD038
    | MD039
    | MD040
    | MD041
    | MD042
    | MD043
    | MD044
    | MD045
    | MD046
    | MD047
    | MD048
    | MD049
    | MD050
    | MD051
    | MD052
    | MD053
    | MD054
    | MD055
    | MD056
    | MD057
    | MD058
    | MD059
    | MD060
    | MD061
    | MD062
    | MD063
    | MD064
    | MD065
    | MD066
    | MD067
    | MD068
    | MD069
    | MD070
    | MD071
    | MD072
    | MD073
    | MD074
    | MD075
    | MD076
    | MD077
    | MD078
    | MD079
    | MD080
    | MD081
    | MD082
    | MD083
    | MD084
    | MD085
    | MD086
    | MD087
    | MD088
    | MD089
    | MD090
    | MD091
    | MD092
    | MD093
    | MD094
    | MD095
    | MD096
    | {
        MD001?: MD001;
        MD003?: MD003;
        MD004?: MD004;
        MD005?: MD005;
        MD007?: MD007;
        MD009?: MD009;
        MD010?: MD010;
        MD011?: MD011;
        MD012?: MD012;
        MD013?: MD013;
        MD014?: MD014;
        MD018?: MD018;
        MD019?: MD019;
        MD020?: MD020;
        MD021?: MD021;
        MD022?: MD022;
        MD023?: MD023;
        MD024?: MD024;
        MD025?: MD025;
        MD026?: MD026;
        MD027?: MD027;
        MD028?: MD028;
        MD029?: MD029;
        MD030?: MD030;
        MD031?: MD031;
        MD032?: MD032;
        MD033?: MD033;
        MD034?: MD034;
        MD035?: MD035;
        MD036?: MD036;
        MD037?: MD037;
        MD038?: MD038;
        MD039?: MD039;
        MD040?: MD040;
        MD041?: MD041;
        MD042?: MD042;
        MD043?: MD043;
        MD044?: MD044;
        MD045?: MD045;
        MD046?: MD046;
        MD047?: MD047;
        MD048?: MD048;
        MD049?: MD049;
        MD050?: MD050;
        MD051?: MD051;
        MD052?: MD052;
        MD053?: MD053;
        MD054?: MD054;
        MD055?: MD055;
        MD056?: MD056;
        MD057?: MD057;
        MD058?: MD058;
        MD059?: MD059;
        MD060?: MD060;
        MD061?: MD061;
        MD062?: MD062;
        MD063?: MD063;
        MD064?: MD064;
        MD065?: MD065;
        MD066?: MD066;
        MD067?: MD067;
        MD068?: MD068;
        MD069?: MD069;
        MD070?: MD070;
        MD071?: MD071;
        MD072?: MD072;
        MD073?: MD073;
        MD074?: MD074;
        MD075?: MD075;
        MD076?: MD076;
        MD077?: MD077;
        MD078?: MD078;
        MD079?: MD079;
        MD080?: MD080;
        MD081?: MD081;
        MD082?: MD082;
        MD083?: MD083;
        MD084?: MD084;
        MD085?: MD085;
        MD086?: MD086;
        MD087?: MD087;
        MD088?: MD088;
        MD089?: MD089;
        MD090?: MD090;
        MD091?: MD091;
        MD092?: MD092;
        MD093?: MD093;
        MD094?: MD094;
        MD095?: MD095;
        MD096?: MD096;
        'blank-line-after-frontmatter'?: MD071;
        'blanks-around-fences'?: MD031;
        'blanks-around-headings'?: MD022;
        'blanks-around-horizontal-rules'?: MD065;
        'blanks-around-lists'?: MD032;
        'blanks-around-tables'?: MD058;
        'chunk-label-spaces'?: MD079;
        'cjk-spacing'?: MD089;
        'code-block-style'?: MD046;
        'code-fence-style'?: MD048;
        'commands-show-output'?: MD014;
        'descriptive-link-text'?: MD059;
        'emphasis-style'?: MD049;
        'empty-footnote-definition'?: MD068;
        'existing-relative-links'?: MD057;
        'fenced-code-language'?: MD040;
        'first-line-h1'?: MD041;
        'first-line-heading'?: MD041;
        'footnote-definition-order'?: MD067;
        'footnote-validation'?: MD066;
        'forbidden-terms'?: MD061;
        'frontmatter-key-sort'?: MD072;
        'heading-anchor-collision'?: MD080;
        'heading-capitalization'?: MD063;
        'heading-increment'?: MD001;
        'heading-start-left'?: MD023;
        'heading-style'?: MD003;
        'hr-style'?: MD035;
        'invalid-encoding'?: MD094;
        'invisible-characters'?: MD084;
        'line-length'?: MD013;
        'link-confusables'?: MD095;
        'link-destination-whitespace'?: MD062;
        'link-fragments'?: MD051;
        'link-image-reference-definitions'?: MD053;
        'link-image-style'?: MD054;
        'list-continuation-indent'?: MD077;
        'list-indent'?: MD005;
        'list-item-spacing'?: MD076;
        'list-marker-space'?: MD030;
        'merge-conflict'?: MD092;
        'missing-chunk-labels'?: MD078;
        'mkdocs-nav'?: MD074;
        mojibake?: MD083;
        'nested-code-fence'?: MD070;
        'no-alt-text'?: MD045;
        'no-bare-urls'?: MD034;
        'no-blanks-blockquote'?: MD028;
        'no-duplicate-heading'?: MD024;
        'no-duplicate-list-markers'?: MD069;
        'no-emphasis-as-heading'?: MD036;
        'no-empty-links'?: MD042;
        'no-empty-sections'?: MD082;
        'no-excessive-emphasis'?: MD081;
        'no-formatting-in-headings'?: MD093;
        'no-hard-tabs'?: MD010;
        'no-hr-before-heading'?: MD090;
        'no-inline-html'?: MD033;
        'no-markdown-in-html'?: MD091;
        'no-missing-space-atx'?: MD018;
        'no-missing-space-closed-atx'?: MD020;
        'no-multiple-blanks'?: MD012;
        'no-multiple-consecutive-spaces'?: MD064;
        'no-multiple-space-atx'?: MD019;
        'no-multiple-space-blockquote'?: MD027;
        'no-multiple-space-closed-atx'?: MD021;
        'no-reversed-links'?: MD011;
        'no-space-in-code'?: MD038;
        'no-space-in-emphasis'?: MD037;
        'no-space-in-link-destination'?: MD062;
        'no-space-in-links'?: MD039;
        'no-trailing-punctuation'?: MD026;
        'no-trailing-spaces'?: MD009;
        'no-unclosed-comments'?: MD086;
        'ol-prefix'?: MD029;
        'orphaned-table-rows'?: MD075;
        'paragraph-continuation-indent'?: MD085;
        'proper-names'?: MD044;
        'quotes-dashes'?: MD088;
        'reference-links-images'?: MD052;
        'required-headings'?: MD043;
        'single-h1'?: MD025;
        'single-title'?: MD025;
        'single-trailing-newline'?: MD047;
        'strong-style'?: MD050;
        'table-cell-alignment'?: MD060;
        'table-column-count'?: MD056;
        'table-column-style'?: MD060;
        'table-format'?: MD060;
        'table-pipe-style'?: MD055;
        'table-sort'?: MD096;
        'toc-validation'?: MD073;
        'ul-indent'?: MD007;
        'ul-style'?: MD004;
        'unused-disable-comment'?: MD087;
        [k: string]:
          | RuleConfig
          | MD001
          | MD003
          | MD004
          | MD005
          | MD007
          | MD009
          | MD010
          | MD011
          | MD012
          | MD013
          | MD014
          | MD018
          | MD019
          | MD020
          | MD021
          | MD022
          | MD023
          | MD024
          | MD025
          | MD026
          | MD027
          | MD028
          | MD029
          | MD030
          | MD031
          | MD032
          | MD033
          | MD034
          | MD035
          | MD036
          | MD037
          | MD038
          | MD039
          | MD040
          | MD041
          | MD042
          | MD043
          | MD044
          | MD045
          | MD046
          | MD047
          | MD048
          | MD049
          | MD050
          | MD051
          | MD052
          | MD053
          | MD054
          | MD055
          | MD056
          | MD057
          | MD058
          | MD059
          | MD060
          | MD061
          | MD062
          | MD063
          | MD064
          | MD065
          | MD066
          | MD067
          | MD068
          | MD069
          | MD070
          | MD071
          | MD072
          | MD073
          | MD074
          | MD075
          | MD076
          | MD077
          | MD078
          | MD079
          | MD080
          | MD081
          | MD082
          | MD083
          | MD084
          | MD085
          | MD086
          | MD087
          | MD088
          | MD089
          | MD090
          | MD091
          | MD092
          | MD093
          | MD094
          | MD095
          | MD096
          | undefined;
      }
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
   * Respect .gitignore, .ignore and git exclude files when scanning
   * directories. .markdownlintignore applies regardless, and explicitly
   * named files bypass both.
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
   * Behavior when a recognized language has no tools configured in either mode.
   */
  'on-missing-language-definition'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
  /**
   * Behavior when a configured tool's binary is absent from the allowed lookup locations.
   * Defaults to `warn`: the tools rumdl drives are installed separately from
   * rumdl, so an absent one is common enough that silence about it is a trap.
   */
  'on-missing-tool-binary'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
  /**
   * Select already-installed project/PATH executables per underlying binary.
   */
  'binary-preferences'?: {
    [k: string]: BinaryPreference | undefined;
  };
  /**
   * Optional project metadata source for external tool version verification.
   */
  'tool-version-definition'?: ToolVersionDefinition | null;
  /**
   * Policy for mismatched or unresolved external tool versions.
   * Defaults to `warn` and runs the tool; `fail` skips only that tool.
   * Inactive unless a tool-version-definition is configured.
   */
  'on-tool-version-mismatch'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
  /**
   * Policy for unlabeled fenced code blocks.
   */
  'on-missing-language-tag'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
  /**
   * Policy for unknown tags. When omitted, inherits on-missing-language-definition.
   */
  'on-unknown-language-tag'?: OnMissing | null;
  /**
   * Behavior when a configured coverage or availability condition is unmet.
   */
  'on-missing-mode-definition'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
  /**
   * Behavior when a configured coverage or availability condition is unmet.
   */
  'on-no-tools-run'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
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
   * How the `format` list is applied: as fallbacks (default) or as a pipeline
   */
  'format-mode'?: 'fallback' | 'pipeline';
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
 * Line length should not be excessive
 */
export interface MD013 {
  /**
   * Custom abbreviations for sentence-per-line mode
   * Periods are optional - both "Dr" and "Dr." work the same
   * Inherited from global config, can be overridden per-rule
   * Custom abbreviations are always added to the built-in defaults
   */
  abbreviations?: string[];
  /**
   * Whether to hold emphasis/strong/strikethrough and code spans atomic during reflow.
   * When true (default), these spans are treated as atomic units.
   * When false, they can be wrapped word-by-word like normal text.
   */
  'atomic-spans'?: boolean;
  /**
   * Whether to hold emphasis/strong/strikethrough and code spans atomic during reflow.
   * When true (default), these spans are treated as atomic units.
   * When false, they can be wrapped word-by-word like normal text.
   */
  atomic_spans?: boolean;
  /**
   * Check blockquote content for line length (default: true)
   * When false, blockquote lines are not checked for line length.
   * When paragraphs = false, blockquote content is also skipped
   * since blockquote content is paragraph text.
   */
  blockquotes?: boolean;
  /**
   * Treat standalone TeX `\[ ... \]` blocks as display math. Off by default
   * because escaped brackets are ordinary Markdown in CommonMark.
   */
  'bracket-display-math'?: boolean;
  /**
   * Treat standalone TeX `\[ ... \]` blocks as display math. Off by default
   * because escaped brackets are ordinary Markdown in CommonMark.
   */
  bracket_display_math?: boolean;
  /**
   * Additional semantic break words, matched case-insensitively as whole words.
   * These extend the built-in English list in semantic-line-breaks mode.
   */
  'break-words'?: string[];
  /**
   * Additional semantic break words, matched case-insensitively as whole words.
   * These extend the built-in English list in semantic-line-breaks mode.
   */
  break_words?: string[];
  /**
   * How reflow joins a soft line break between CJK characters (default:
   * "space").
   *
   * "space" joins every soft break with a space. "join" leaves the space
   * out when the characters on both sides of the break are Han, kana or CJK
   * punctuation, for renderers that show nothing at such a break. Korean,
   * mixed-script breaks and breaks next to markup keep the space, and spaces
   * the author wrote are never removed. One of `space`, `join`.
   */
  'cjk-soft-break'?: string;
  /**
   * How reflow joins a soft line break between CJK characters (default:
   * "space").
   *
   * "space" joins every soft break with a space. "join" leaves the space
   * out when the characters on both sides of the break are Han, kana or CJK
   * punctuation, for renderers that show nothing at such a break. Korean,
   * mixed-script breaks and breaks next to markup keep the space, and spaces
   * the author wrote are never removed. One of `space`, `join`.
   */
  cjk_soft_break?: string;
  /**
   * Per-context maximum line length for code blocks (fenced or indented).
   *
   * `None` (unset) falls back to `line_length`. `Some(0)` means "no limit
   * for code blocks". Mirrors markdownlint's `code_block_line_length`.
   */
  'code-block-line-length'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Per-context maximum line length for code blocks (fenced or indented).
   *
   * `None` (unset) falls back to `line_length`. `Some(0)` means "no limit
   * for code blocks". Mirrors markdownlint's `code_block_line_length`.
   */
  code_block_line_length?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Check code blocks for line length (default: true)
   */
  'code-blocks'?: boolean;
  /**
   * Check code blocks for line length (default: true)
   */
  code_blocks?: boolean;
  /**
   * Check lines whose length comes from an inline code span (default: true).
   *
   * Inline code spans (`` `like this` ``) cannot be wrapped, so reflow cannot
   * shorten a line whose excess length is one of them. When `false`, a line is
   * not reported if it would fit within the limit once its inline code spans are
   * excluded - useful with `reflow` so an otherwise-clean file is not failed by
   * an unbreakable code incantation.
   */
  'code-spans'?: boolean;
  /**
   * Check lines whose length comes from an inline code span (default: true).
   *
   * Inline code spans (`` `like this` ``) cannot be wrapped, so reflow cannot
   * shorten a line whose excess length is one of them. When `false`, a line is
   * not reported if it would fit within the limit once its inline code spans are
   * excluded - useful with `reflow` so an otherwise-clean file is not failed by
   * an unbreakable code incantation.
   */
  code_spans?: boolean;
  /**
   * Check YAML and TOML front matter for line length (default: false).
   *
   * Front matter is not Markdown, so it is skipped unless this is set. When
   * `true`, lines in a `---` delimited YAML or `+++` delimited TOML block are
   * measured against `line-length`. With `reflow`, long single-line YAML
   * scalars, TOML basic strings and TOML arrays are also wrapped where that
   * leaves the data unchanged; anything else is only reported. JSON front
   * matter is not checked. `reflow-mode` does not apply to front matter:
   * values are always wrapped greedily to `line-length`.
   */
  frontmatter?: boolean;
  /**
   * Per-context maximum line length for headings.
   *
   * `None` (unset) falls back to `line_length`. `Some(0)` means "no limit
   * for headings". Mirrors markdownlint's `heading_line_length`.
   */
  'heading-line-length'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Per-context maximum line length for headings.
   *
   * `None` (unset) falls back to `line_length`. `Some(0)` means "no limit
   * for headings". Mirrors markdownlint's `heading_line_length`.
   */
  heading_line_length?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Check headings for line length (default: true)
   */
  headings?: boolean;
  /**
   * Whether to ignore inline link/image URLs when measuring line length
   * (default: true).
   *
   * In non-strict mode, a line that exceeds the limit only because of the URL
   * portion of an inline `[text](url)` / `![alt](url)` is forgiven (the URL
   * cannot be shortened). Set to `false` to count those URLs toward the line
   * length so the line is flagged. Combine with `stern` to flag a link line
   * that has wrappable text around it while still exempting a line that is a
   * single unbreakable token (a bare URL or a standalone link). Has no effect
   * in `strict` mode, which already disables all forgiveness.
   *
   * Accepts the former `semantic-link-understanding` key as an alias.
   */
  'ignore-link-urls'?: boolean;
  /**
   * Whether to ignore inline link/image URLs when measuring line length
   * (default: true).
   *
   * In non-strict mode, a line that exceeds the limit only because of the URL
   * portion of an inline `[text](url)` / `![alt](url)` is forgiven (the URL
   * cannot be shortened). Set to `false` to count those URLs toward the line
   * length so the line is flagged. Combine with `stern` to flag a link line
   * that has wrappable text around it while still exempting a line that is a
   * single unbreakable token (a bare URL or a standalone link). Has no effect
   * in `strict` mode, which already disables all forgiveness.
   *
   * Accepts the former `semantic-link-understanding` key as an alias.
   */
  ignore_link_urls?: boolean;
  /**
   * Length calculation mode (default: "chars")
   * - "chars": Count Unicode characters (emoji = 1, CJK = 1)
   * - "visual": Count visual display width (emoji = 2, CJK = 2)
   * - "bytes": Count raw bytes (not recommended for Unicode) One of `chars`, `visual`, `bytes`.
   */
  'length-mode'?: string;
  /**
   * Length calculation mode (default: "chars")
   * - "chars": Count Unicode characters (emoji = 1, CJK = 1)
   * - "visual": Count visual display width (emoji = 2, CJK = 2)
   * - "bytes": Count raw bytes (not recommended for Unicode) One of `chars`, `visual`, `bytes`.
   */
  length_mode?: string;
  /**
   * Maximum line length (default: 80, 0 means no limit)
   */
  'line-length'?: number | null;
  /**
   * Maximum line length (default: 80, 0 means no limit)
   */
  line_length?: number | null;
  /**
   * Consider terminal link-label/image-alt punctuation as a sentence end. One of `ignore`, `trailing`.
   */
  'link-text-punctuation'?: string;
  /**
   * Consider terminal link-label/image-alt punctuation as a sentence end. One of `ignore`, `trailing`.
   */
  link_text_punctuation?: string;
  /**
   * Check display-math blocks for line length (default: true)
   *
   * A `$$ ... $$` block is unbreakable in the same way a code block or a table
   * row is: LaTeX cannot be wrapped without changing the equation. When
   * `false`, lines that hold nothing but display math are not reported. This
   * covers both a multi-line block and a whole line that is one complete
   * `$$...$$` span, delimiter lines included, matching how `code-blocks =
   * false` also exempts the surrounding fences.
   *
   * Inline `$...$` math is not covered, for the same reason `code-spans` is a
   * separate key from `code-blocks`.
   */
  'math-blocks'?: boolean;
  /**
   * Check display-math blocks for line length (default: true)
   *
   * A `$$ ... $$` block is unbreakable in the same way a code block or a table
   * row is: LaTeX cannot be wrapped without changing the equation. When
   * `false`, lines that hold nothing but display math are not reported. This
   * covers both a multi-line block and a whole line that is one complete
   * `$$...$$` span, delimiter lines included, matching how `code-blocks =
   * false` also exempts the surrounding fences.
   *
   * Inline `$...$` math is not covered, for the same reason `code-spans` is a
   * separate key from `code-blocks`.
   */
  math_blocks?: boolean;
  /**
   * Check paragraph/text line length (default: true)
   * When false, line length violations in regular text are not reported,
   * but reflow can still be used to format paragraphs.
   */
  paragraphs?: boolean;
  /**
   * Enable text reflow to wrap long lines (default: false)
   */
  reflow?: boolean;
  /**
   * Whether reflow may wrap inside inline code spans when `atomic-spans` is
   * `false` (default: true).
   *
   * Set to `false` to keep code spans whole while emphasis, strong and
   * strikethrough still wrap word by word. It has no effect while
   * `atomic-spans` is `true`, which holds code whole already. Code spans
   * whose whitespace cannot be rewrapped losslessly, and code spans in
   * containers or indented paragraphs, stay whole whatever this says.
   */
  'reflow-break-code-spans'?: boolean;
  /**
   * Whether reflow may wrap inside inline code spans when `atomic-spans` is
   * `false` (default: true).
   *
   * Set to `false` to keep code spans whole while emphasis, strong and
   * strikethrough still wrap word by word. It has no effect while
   * `atomic-spans` is `true`, which holds code whole already. Code spans
   * whose whitespace cannot be rewrapped losslessly, and code spans in
   * containers or indented paragraphs, stay whole whatever this says.
   */
  reflow_break_code_spans?: boolean;
  /**
   * Whether reflow may wrap long lines within the text of a link or image
   * (default: false).
   *
   * Off, every link and image is one atomic token: reflow moves it whole or
   * leaves the line long (a standalone link line is exempt from the check).
   * On, the bracketed text of `[text](url)` and its reference, shortcut and
   * image forms wraps at whitespace under the same rules `atomic-spans`
   * applies to emphasis spans: only when the construct alone can never fit
   * a line (or freely, when `atomic-spans` is off). The `](...)` tail is
   * never split, and a link stays whole when splitting it would leave a
   * line the check reports but reflow cannot fix (an oversized destination
   * or a title pushed past the limit).
   */
  'reflow-break-link-text'?: boolean;
  /**
   * Whether reflow may wrap long lines within the text of a link or image
   * (default: false).
   *
   * Off, every link and image is one atomic token: reflow moves it whole or
   * leaves the line long (a standalone link line is exempt from the check).
   * On, the bracketed text of `[text](url)` and its reference, shortcut and
   * image forms wraps at whitespace under the same rules `atomic-spans`
   * applies to emphasis spans: only when the construct alone can never fit
   * a line (or freely, when `atomic-spans` is off). The `](...)` tail is
   * never split, and a link stays whole when splitting it would leave a
   * line the check reports but reflow cannot fix (an oversized destination
   * or a title pushed past the limit).
   */
  reflow_break_link_text?: boolean;
  /**
   * Whether reflow measures a line with the same length exemptions the check
   * applies (default: false).
   *
   * Off, reflow measures the markdown as written, so a paragraph whose only
   * excess is an inline link destination is wrapped even though the check
   * forgives it. On, reflow consults `ignore_link_urls` (an inline
   * `[text](url)` costs `[text]`, `![alt](url)` costs `![alt]`) and
   * `code_spans` (a code span costs nothing), and leaves such a paragraph
   * alone. Reading the same options both sides read is what keeps the
   * formatter from producing a line the check then reports.
   */
  'reflow-length-exemptions'?: boolean;
  /**
   * Whether reflow measures a line with the same length exemptions the check
   * applies (default: false).
   *
   * Off, reflow measures the markdown as written, so a paragraph whose only
   * excess is an inline link destination is wrapped even though the check
   * forgives it. On, reflow consults `ignore_link_urls` (an inline
   * `[text](url)` costs `[text]`, `![alt](url)` costs `![alt]`) and
   * `code_spans` (a code span costs nothing), and leaves such a paragraph
   * alone. Reading the same options both sides read is what keeps the
   * formatter from producing a line the check then reports.
   */
  reflow_length_exemptions?: boolean;
  /**
   * Reflow mode - how to handle reflowing (default: "long-lines") One of `default`, `normalize`, `sentence-per-line`, `sentence-pack`, `semantic-line-breaks`.
   */
  'reflow-mode'?: string;
  /**
   * Reflow mode - how to handle reflowing (default: "long-lines") One of `default`, `normalize`, `sentence-per-line`, `sentence-pack`, `semantic-line-breaks`.
   */
  reflow_mode?: string;
  /**
   * Whether reflow keeps two spaces after the end of a sentence
   * (default: false).
   *
   * On, two or more spaces after sentence-ending punctuation, as MD064's
   * `allow-sentence-double-space` recognizes it, stay two spaces where the
   * words share a line after reflow, and a line break that ends a sentence
   * with `.`, `!` or `?` becomes two spaces where reflow joins the lines.
   * Any other run of spaces still becomes one. Off, every gap becomes one
   * space.
   */
  'reflow-sentence-double-space'?: boolean;
  /**
   * Whether reflow keeps two spaces after the end of a sentence
   * (default: false).
   *
   * On, two or more spaces after sentence-ending punctuation, as MD064's
   * `allow-sentence-double-space` recognizes it, stay two spaces where the
   * words share a line after reflow, and a line break that ends a sentence
   * with `.`, `!` or `?` becomes two spaces where reflow joins the lines.
   * Any other run of spaces still becomes one. Off, every gap becomes one
   * space.
   */
  reflow_sentence_double_space?: boolean;
  /**
   * Whether to require uppercase after periods for sentence detection (default: true).
   * When true, "word. Capital" and "word. 2nd" are sentence boundaries and
   * "word. lowercase" is not: a digit opens a sentence, a lowercase letter continues one.
   * When false, "word. lowercase" is also treated as a sentence boundary.
   * A bare ! or ? always ends a sentence; inside a quotation ("Is this a test?" guide)
   * it follows the same rule as a period.
   */
  'require-sentence-capital'?: boolean;
  /**
   * Whether to require uppercase after periods for sentence detection (default: true).
   * When true, "word. Capital" and "word. 2nd" are sentence boundaries and
   * "word. lowercase" is not: a digit opens a sentence, a lowercase letter continues one.
   * When false, "word. lowercase" is also treated as a sentence boundary.
   * A bare ! or ? always ends a sentence; inside a quotation ("Is this a test?" guide)
   * it follows the same rule as a period.
   */
  require_sentence_capital?: boolean;
  /**
   * Stern mode - like strict, but lines that consist of a single
   * non-whitespace token (optionally prefixed by heading/blockquote
   * markers) are still permitted. Mirrors markdownlint's `stern` option.
   * Default: false.
   */
  stern?: boolean;
  /**
   * Strict mode - disables exceptions for URLs, etc. (default: false)
   */
  strict?: boolean;
  /**
   * Check tables for line length (default: false)
   *
   * Note: markdownlint defaults to true, but rumdl defaults to false to avoid
   * conflicts with MD060 (table formatting). Tables often require specific widths
   * for alignment, which can conflict with line length limits.
   */
  tables?: boolean;
  /**
   * Enable text reflow to wrap long lines (default: false)
   */
  enable_reflow?: boolean;
  /**
   * Check YAML and TOML front matter for line length (default: false).
   *
   * Front matter is not Markdown, so it is skipped unless this is set. When
   * `true`, lines in a `---` delimited YAML or `+++` delimited TOML block are
   * measured against `line-length`. With `reflow`, long single-line YAML
   * scalars, TOML basic strings and TOML arrays are also wrapped where that
   * leaves the data unchanged; anything else is only reported. JSON front
   * matter is not checked. `reflow-mode` does not apply to front matter:
   * values are always wrapped greedily to `line-length`.
   */
  'front-matter'?: boolean;
  /**
   * Check YAML and TOML front matter for line length (default: false).
   *
   * Front matter is not Markdown, so it is skipped unless this is set. When
   * `true`, lines in a `---` delimited YAML or `+++` delimited TOML block are
   * measured against `line-length`. With `reflow`, long single-line YAML
   * scalars, TOML basic strings and TOML arrays are also wrapped where that
   * leaves the data unchanged; anything else is only reported. JSON front
   * matter is not checked. `reflow-mode` does not apply to front matter:
   * values are always wrapped greedily to `line-length`.
   */
  front_matter?: boolean;
  /**
   * Whether to ignore inline link/image URLs when measuring line length
   * (default: true).
   *
   * In non-strict mode, a line that exceeds the limit only because of the URL
   * portion of an inline `[text](url)` / `![alt](url)` is forgiven (the URL
   * cannot be shortened). Set to `false` to count those URLs toward the line
   * length so the line is flagged. Combine with `stern` to flag a link line
   * that has wrappable text around it while still exempting a line that is a
   * single unbreakable token (a bare URL or a standalone link). Has no effect
   * in `strict` mode, which already disables all forgiveness.
   *
   * Accepts the former `semantic-link-understanding` key as an alias.
   */
  'semantic-link-understanding'?: boolean;
  /**
   * Whether to ignore inline link/image URLs when measuring line length
   * (default: true).
   *
   * In non-strict mode, a line that exceeds the limit only because of the URL
   * portion of an inline `[text](url)` / `![alt](url)` is forgiven (the URL
   * cannot be shortened). Set to `false` to count those URLs toward the line
   * length so the line is flagged. Combine with `stern` to flag a link line
   * that has wrappable text around it while still exempting a line that is a
   * single unbreakable token (a bare URL or a standalone link). Has no effect
   * in `strict` mode, which already disables all forgiveness.
   *
   * Accepts the former `semantic-link-understanding` key as an alias.
   */
  semantic_link_understanding?: boolean;
  /**
   * Whether to require uppercase after periods for sentence detection (default: true).
   * When true, "word. Capital" and "word. 2nd" are sentence boundaries and
   * "word. lowercase" is not: a digit opens a sentence, a lowercase letter continues one.
   * When false, "word. lowercase" is also treated as a sentence boundary.
   * A bare ! or ? always ends a sentence; inside a quotation ("Is this a test?" guide)
   * it follows the same rule as a period.
   */
  'strict-sentences'?: boolean;
  /**
   * Whether to require uppercase after periods for sentence detection (default: true).
   * When true, "word. Capital" and "word. 2nd" are sentence boundaries and
   * "word. lowercase" is not: a digit opens a sentence, a lowercase letter continues one.
   * When false, "word. lowercase" is also treated as a sentence boundary.
   * A bare ! or ? always ends a sentence; inside a quotation ("Is this a test?" guide)
   * it follows the same rule as a period.
   */
  strict_sentences?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Heading levels should only increment by one level at a time
 */
export interface MD001 {
  /**
   * Whether a title field in front matter counts as an implicit level-1 heading
   */
  'front-matter-title'?: boolean;
  /**
   * Whether a title field in front matter counts as an implicit level-1 heading
   */
  front_matter_title?: boolean;
  /**
   * Regex matching the front matter line that holds the title. When set, it replaces
   * the default `title:` lookup, so a document keying its title differently still
   * gets the implicit level-1 heading.
   */
  'front-matter-title-pattern'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Regex matching the front matter line that holds the title. When set, it replaces
   * the default `title:` lookup, so a document keying its title differently still
   * gets the implicit level-1 heading.
   */
  front_matter_title_pattern?: {
    [k: string]: unknown | undefined;
  };
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Heading style
 */
export interface MD003 {
  /**
   * The heading style to enforce (default: "consistent") One of `atx`, `atx-closed`, `setext1`, `setext2`, `consistent`, `setext-with-atx`, `setext-with-atx-closed`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Use consistent style for unordered list markers
 */
export interface MD004 {
  /**
   * The style for unordered list markers One of `asterisk`, `plus`, `dash`, `consistent`, `sublist`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * List indentation should be consistent
 */
export interface MD005 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Unordered list indentation
 */
export interface MD007 {
  /**
   * Spaces of indentation per nesting level for nested unordered lists (default: 2).
   */
  indent?: number;
  /**
   * Number of spaces for first level indent when start_indented is true (default: 2)
   */
  'start-indent'?: number;
  /**
   * Number of spaces for first level indent when start_indented is true (default: 2)
   */
  start_indent?: number;
  /**
   * Allow first level lists to start indented (default: false)
   */
  'start-indented'?: boolean;
  /**
   * Allow first level lists to start indented (default: false)
   */
  start_indented?: boolean;
  /**
   * Indentation style: text-aligned (default) or fixed (markdownlint compatible) One of `text-aligned`, `fixed`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Trailing spaces should be removed
 */
export interface MD009 {
  /**
   * Number of trailing spaces kept as a hard line break (default: 2).
   * A value below 2 turns the exception off and flags every trailing space.
   */
  'br-spaces'?: number;
  /**
   * Number of trailing spaces kept as a hard line break (default: 2).
   * A value below 2 turns the exception off and flags every trailing space.
   */
  br_spaces?: number;
  /**
   * Allow trailing spaces in empty list item lines (default: false)
   */
  'list-item-empty-lines'?: boolean;
  /**
   * Allow trailing spaces in empty list item lines (default: false)
   */
  list_item_empty_lines?: boolean;
  /**
   * Strict mode - also flag a line-break run where it renders no `<br>` (default: false)
   */
  strict?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * No tabs
 */
export interface MD010 {
  /**
   * Check for hard tabs inside code blocks (default: false).
   * When false, tabs inside fenced and indented code blocks are skipped.
   */
  'code-blocks'?: boolean;
  /**
   * Check for hard tabs inside code blocks (default: false).
   * When false, tabs inside fenced and indented code blocks are skipped.
   */
  code_blocks?: boolean;
  /**
   * Fence languages whose tabs are never reported (default: empty).
   * Matched case-insensitively against the first word of the info string.
   * Only has an effect when `code-blocks` is true, and an indented code block
   * has no info string, so it can never match.
   */
  'ignore-code-languages'?: string[];
  /**
   * Fence languages whose tabs are never reported (default: empty).
   * Matched case-insensitively against the first word of the info string.
   * Only has an effect when `code-blocks` is true, and an indented code block
   * has no info string, so it can never match.
   */
  ignore_code_languages?: string[];
  /**
   * Number of spaces per tab (default: 4)
   */
  'spaces-per-tab'?: number;
  /**
   * Number of spaces per tab (default: 4)
   */
  spaces_per_tab?: number;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Reversed link syntax
 */
export interface MD011 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Multiple consecutive blank lines
 */
export interface MD012 {
  /**
   * Maximum number of consecutive blank lines allowed within the document (default: 1)
   *
   * This setting controls blank lines within the document content.
   * Blank lines at EOF are always enforced to be 0 (following POSIX/Prettier standards).
   */
  maximum?: number;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Commands in code blocks should show output
 */
export interface MD014 {
  /**
   * Whether commands should show output (default: true)
   */
  'show-output'?: boolean;
  /**
   * Whether commands should show output (default: true)
   */
  show_output?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * No space after hash in heading
 */
export interface MD018 {
  /**
   * Enable MagicLink support for issue/PR references like #123, #10
   * When true, numeric patterns like `#10` at the start of a line are
   * not flagged as malformed headings, allowing PyMdown MagicLink syntax.
   * Default: false (all patterns are flagged)
   */
  magiclink?: boolean;
  /**
   * Recognize `#word` patterns as tags instead of malformed headings.
   * When true, single-hash patterns like `#tag`, `#project/active` and
   * `#3d_printing` are skipped. Following Obsidian, a tag must contain at
   * least one non-numerical character, so `#1984` is still flagged.
   * When null/unset, defaults to true for Obsidian flavor and false
   * otherwise.
   */
  tags?: {
    [k: string]: unknown | undefined;
  };
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Multiple spaces after hash in heading
 */
export interface MD019 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * No space inside hashes on closed heading
 */
export interface MD020 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Multiple spaces inside hashes on closed heading
 */
export interface MD021 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Headings should be surrounded by blank lines
 */
export interface MD022 {
  /**
   * Whether the first heading can be at the start of the document (default: true)
   */
  'allowed-at-start'?: boolean;
  /**
   * Whether the first heading can be at the start of the document (default: true)
   */
  allowed_at_start?: boolean;
  /**
   * Number of blank lines required above headings (default: 1 for all levels)
   * Can be a single integer (applies to all levels) or an array of 6 integers (one per level 1-6)
   */
  'lines-above'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Number of blank lines required above headings (default: 1 for all levels)
   * Can be a single integer (applies to all levels) or an array of 6 integers (one per level 1-6)
   */
  lines_above?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Keep at least the configured spacing, or remove surplus blank lines above headings. One of `minimum`, `exact`.
   */
  'lines-above-mode'?: string;
  /**
   * Keep at least the configured spacing, or remove surplus blank lines above headings. One of `minimum`, `exact`.
   */
  lines_above_mode?: string;
  /**
   * Number of blank lines required below headings (default: 1 for all levels)
   * Can be a single integer (applies to all levels) or an array of 6 integers (one per level 1-6)
   */
  'lines-below'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Number of blank lines required below headings (default: 1 for all levels)
   * Can be a single integer (applies to all levels) or an array of 6 integers (one per level 1-6)
   */
  lines_below?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Blank lines between a heading and a deeper heading that directly follows it
   * with no body in between (default: unset, which uses `lines_above` and
   * `lines_below`). Replaces both for that gap. A single integer or an array of 6
   * integers indexed by the deeper heading's level.
   */
  'nested-heading-lines-above'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Blank lines between a heading and a deeper heading that directly follows it
   * with no body in between (default: unset, which uses `lines_above` and
   * `lines_below`). Replaces both for that gap. A single integer or an array of 6
   * integers indexed by the deeper heading's level.
   */
  nested_heading_lines_above?: {
    [k: string]: unknown | undefined;
  };
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Headings must start at the beginning of the line
 */
export interface MD023 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Multiple headings with the same content
 */
export interface MD024 {
  /**
   * Treat headings with different custom link anchors (e.g. `{#custom-id}`) as distinct (default: true)
   *
   * When true, headings that share the same visible text but carry different `{#id}` suffixes
   * produce distinct deduplication keys and are not flagged as duplicates. This matches the
   * effective behavior of markdownlint, which compares raw heading text (retaining the suffix).
   *
   * Set to false to restore the previous behavior where `{#id}` suffixes are ignored during
   * deduplication.
   */
  'allow-different-link-anchors'?: boolean;
  /**
   * Treat headings with different custom link anchors (e.g. `{#custom-id}`) as distinct (default: true)
   *
   * When true, headings that share the same visible text but carry different `{#id}` suffixes
   * produce distinct deduplication keys and are not flagged as duplicates. This matches the
   * effective behavior of markdownlint, which compares raw heading text (retaining the suffix).
   *
   * Set to false to restore the previous behavior where `{#id}` suffixes are ignored during
   * deduplication.
   */
  allow_different_link_anchors?: boolean;
  /**
   * Allow duplicate headings if they're nested at different levels (default: false)
   */
  'allow-different-nesting'?: boolean;
  /**
   * Allow duplicate headings if they're nested at different levels (default: false)
   */
  allow_different_nesting?: boolean;
  /**
   * Only check siblings (same parent) for duplicates (default: true)
   *
   * Unlike markdownlint, rumdl defaults this to true to reduce false positives
   * in common documentation patterns like CHANGELOGs.
   *
   * Note: This may cause duplicate anchor IDs when linking. Most renderers
   * (GitHub, GitLab, etc.) handle this by adding numeric suffixes.
   */
  'siblings-only'?: boolean;
  /**
   * Only check siblings (same parent) for duplicates (default: true)
   *
   * Unlike markdownlint, rumdl defaults this to true to reduce false positives
   * in common documentation patterns like CHANGELOGs.
   *
   * Note: This may cause duplicate anchor IDs when linking. Most renderers
   * (GitHub, GitLab, etc.) handle this by adding numeric suffixes.
   */
  siblings_only?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Multiple top-level headings in the same document
 */
export interface MD025 {
  /**
   * Allows several sections of the document to each start a new level-1 heading.
   */
  'allow-document-sections'?: boolean;
  /**
   * Allows several sections of the document to each start a new level-1 heading.
   */
  allow_document_sections?: boolean;
  /**
   * Allows a second level-1 heading when the first is followed by a separator.
   */
  'allow-with-separators'?: boolean;
  /**
   * Allows a second level-1 heading when the first is followed by a separator.
   */
  allow_with_separators?: boolean;
  /**
   * Regex matching front matter title lines, or an exact field-name shorthand
   * such as `title`. An empty string disables front matter title detection.
   */
  'front-matter-title'?: string;
  /**
   * Regex matching front matter title lines, or an exact field-name shorthand
   * such as `title`. An empty string disables front matter title detection.
   */
  front_matter_title?: string;
  /**
   * Heading level that counts as the document title: `1` (default) through `6`.
   */
  level?: number;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Trailing punctuation in heading
 */
export interface MD026 {
  /**
   * Characters a heading may not end with, one string of punctuation.
   */
  punctuation?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Multiple spaces after quote marker (>)
 */
export interface MD027 {
  /**
   * When `true`, also flag blockquoted lines that introduce or continue a
   * list item. When `false` (default), such lines are skipped.
   */
  'list-items'?: boolean;
  /**
   * When `true`, also flag blockquoted lines that introduce or continue a
   * list item. When `false` (default), such lines are skipped.
   */
  list_items?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Blank line inside blockquote
 */
export interface MD028 {
  /**
   * Enable auto-fix to merge blockquotes separated by a blank line.
   * Defaults to false: filling the blank line with `>` merges two
   * blockquotes into one, and the detection cannot verify whether the author
   * meant a single quote with an accidental gap or two distinct quotes.
   * `check()` still warns either way; users opt into the merge with
   * `fix = true`.
   */
  fix?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Ordered list marker value
 */
export interface MD029 {
  /**
   * Style for ordered list numbering (default: "one-or-ordered" - matches markdownlint) One of `one`, `one-one`, `ordered`, `ordered0`, `zero`, `one-or-ordered`, `consistent`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Spaces after list markers should be consistent
 */
export interface MD030 {
  /**
   * Align ordered list text to this column, measured from the start of the
   * marker (default: 0 = off; valid values are 3-6, with 4 the usual choice).
   * Narrower markers are padded up to the column; markers too wide for it
   * overflow with one space rather than pushing the rest of the list over.
   * See docs/md030.md.
   */
  'ol-align-column'?: number;
  /**
   * Align ordered list text to this column, measured from the start of the
   * marker (default: 0 = off; valid values are 3-6, with 4 the usual choice).
   * Narrower markers are padded up to the column; markers too wide for it
   * overflow with one space rather than pushing the rest of the list over.
   * See docs/md030.md.
   */
  ol_align_column?: number;
  /**
   * Spaces for multi-line ordered list items (default: 1)
   */
  'ol-multi'?: number;
  /**
   * Spaces for multi-line ordered list items (default: 1)
   */
  ol_multi?: number;
  /**
   * Spaces for single-line ordered list items (default: 1)
   */
  'ol-single'?: number;
  /**
   * Spaces for single-line ordered list items (default: 1)
   */
  ol_single?: number;
  /**
   * Spaces for multi-line unordered list items (default: 1)
   */
  'ul-multi'?: number;
  /**
   * Spaces for multi-line unordered list items (default: 1)
   */
  ul_multi?: number;
  /**
   * Spaces for single-line unordered list items (default: 1)
   */
  'ul-single'?: number;
  /**
   * Spaces for single-line unordered list items (default: 1)
   */
  ul_single?: number;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Fenced code blocks should be surrounded by blank lines
 */
export interface MD031 {
  /**
   * Whether to require blank lines around code blocks in lists
   */
  'list-items'?: boolean;
  /**
   * Whether to require blank lines around code blocks in lists
   */
  list_items?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Lists should be surrounded by blank lines
 */
export interface MD032 {
  /**
   * Allow lazy continuation of list items (default: true)
   *
   * When true (default), text following a list item without indentation is treated
   * as lazy continuation per CommonMark spec and no warning is generated.
   *
   * When false, warns when unindented text follows a list item without a blank line.
   * This helps catch cases where text was intended to be a separate paragraph.
   *
   * Example with `allow_lazy_continuation = false`:
   * ```markdown
   * 1. List item
   * Some text.    <- Warning: should have blank line or indentation
   * ```
   */
  'allow-lazy-continuation'?: boolean;
  /**
   * Allow lazy continuation of list items (default: true)
   *
   * When true (default), text following a list item without indentation is treated
   * as lazy continuation per CommonMark spec and no warning is generated.
   *
   * When false, warns when unindented text follows a list item without a blank line.
   * This helps catch cases where text was intended to be a separate paragraph.
   *
   * Example with `allow_lazy_continuation = false`:
   * ```markdown
   * 1. List item
   * Some text.    <- Warning: should have blank line or indentation
   * ```
   */
  allow_lazy_continuation?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Inline HTML is not allowed
 */
export interface MD033 {
  /**
   * HTML elements allowed to stay in the document, e.g. `["details", "summary"]`.
   *
   * Anything not listed here is reported, unless it is named in `allowed-inside`
   * or filtered out by `disallowed`. Use `"no-markdown-equivalent"` to allow every
   * element Markdown has no syntax for. Also accepted as `allowed-elements`.
   */
  'allowed-elements'?: string[];
  /**
   * HTML elements allowed to stay in the document, e.g. `["details", "summary"]`.
   *
   * Anything not listed here is reported, unless it is named in `allowed-inside`
   * or filtered out by `disallowed`. Use `"no-markdown-equivalent"` to allow every
   * element Markdown has no syntax for. Also accepted as `allowed-elements`.
   */
  allowed_elements?: string[];
  /**
   * Elements whose contents are permitted whatever tags appear inside them.
   *
   * Everything from an element's opening tag through its matching closing tag is
   * left alone, the tags of the element itself included. An element that cannot
   * hold content (`<br>`, `<img>`, and the other void elements) holds nothing, so
   * naming one here permits nothing; name it in `allowed` instead.
   */
  'allowed-inside'?: string[];
  /**
   * Elements whose contents are permitted whatever tags appear inside them.
   *
   * Everything from an element's opening tag through its matching closing tag is
   * left alone, the tags of the element itself included. An element that cannot
   * hold content (`<br>`, `<img>`, and the other void elements) holds nothing, so
   * naming one here permits nothing; name it in `allowed` instead.
   */
  allowed_inside?: string[];
  /**
   * Style for converting `<br>` tags to Markdown line breaks.
   * - "trailing-spaces": Two spaces + newline (CommonMark standard, default)
   * - "backslash": Backslash + newline (Pandoc/extended markdown) One of `trailing-spaces`, `backslash`.
   */
  'br-style'?: string;
  /**
   * Style for converting `<br>` tags to Markdown line breaks.
   * - "trailing-spaces": Two spaces + newline (CommonMark standard, default)
   * - "backslash": Backslash + newline (Pandoc/extended markdown) One of `trailing-spaces`, `backslash`.
   */
  br_style?: string;
  /**
   * List of HTML tags that are explicitly disallowed.
   * When set, only these tags will trigger warnings (allowlist mode is disabled).
   * Use `"gfm"` as a special value to use GFM's security-filtered tags.
   */
  'disallowed-elements'?: string[];
  /**
   * List of HTML tags that are explicitly disallowed.
   * When set, only these tags will trigger warnings (allowlist mode is disabled).
   * Use `"gfm"` as a special value to use GFM's security-filtered tags.
   */
  disallowed_elements?: string[];
  /**
   * Extra attributes that may be dropped when `fix-mode = "relaxed"`.
   * These attributes are not representable in Markdown link/image syntax.
   */
  'drop-attributes'?: string[];
  /**
   * Extra attributes that may be dropped when `fix-mode = "relaxed"`.
   * These attributes are not representable in Markdown link/image syntax.
   */
  drop_attributes?: string[];
  /**
   * Enable auto-fix to convert simple HTML tags to Markdown equivalents.
   * When enabled, tags like `<em>`, `<strong>`, `<code>`, `<br>`, `<hr>` are converted.
   * Tags with attributes or complex nesting are not auto-fixed.
   * Default: false (opt-in like MD036)
   */
  fix?: boolean;
  /**
   * Attribute handling mode for auto-fix.
   * - conservative: current safe behavior (default)
   * - relaxed: allow dropping configured attributes during conversion One of `conservative`, `relaxed`.
   */
  'fix-mode'?: string;
  /**
   * Attribute handling mode for auto-fix.
   * - conservative: current safe behavior (default)
   * - relaxed: allow dropping configured attributes during conversion One of `conservative`, `relaxed`.
   */
  fix_mode?: string;
  /**
   * Wrapper elements that may be stripped when `fix-mode = "relaxed"`.
   * Wrapper stripping is applied only when the wrapper's inner content no
   * longer contains HTML tags.
   */
  'strip-wrapper-elements'?: string[];
  /**
   * Wrapper elements that may be stripped when `fix-mode = "relaxed"`.
   * Wrapper stripping is applied only when the wrapper's inner content no
   * longer contains HTML tags.
   */
  strip_wrapper_elements?: string[];
  /**
   * HTML elements explicitly permitted inside GFM table cells.
   *
   * Mirrors markdownlint's `table_allowed_elements`. The semantics
   * distinguish three states:
   * - `None` (unset): in-table tags fall back to the `allowed` list.
   * - `Some(vec![])`: no tags are permitted inside table cells, even
   *   ones present in `allowed`.
   * - `Some([...])`: only the listed tags are permitted inside table
   *   cells; `allowed` is ignored for in-table contexts.
   *
   * Tags outside GFM tables are never affected by this option.
   */
  'table-allowed-elements'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * HTML elements explicitly permitted inside GFM table cells.
   *
   * Mirrors markdownlint's `table_allowed_elements`. The semantics
   * distinguish three states:
   * - `None` (unset): in-table tags fall back to the `allowed` list.
   * - `Some(vec![])`: no tags are permitted inside table cells, even
   *   ones present in `allowed`.
   * - `Some([...])`: only the listed tags are permitted inside table
   *   cells; `allowed` is ignored for in-table contexts.
   *
   * Tags outside GFM tables are never affected by this option.
   */
  table_allowed_elements?: {
    [k: string]: unknown | undefined;
  };
  /**
   * HTML elements allowed to stay in the document, e.g. `["details", "summary"]`.
   *
   * Anything not listed here is reported, unless it is named in `allowed-inside`
   * or filtered out by `disallowed`. Use `"no-markdown-equivalent"` to allow every
   * element Markdown has no syntax for. Also accepted as `allowed-elements`.
   */
  allowed?: string[];
  /**
   * List of HTML tags that are explicitly disallowed.
   * When set, only these tags will trigger warnings (allowlist mode is disabled).
   * Use `"gfm"` as a special value to use GFM's security-filtered tags.
   */
  disallowed?: string[];
  /**
   * HTML elements explicitly permitted inside GFM table cells.
   *
   * Mirrors markdownlint's `table_allowed_elements`. The semantics
   * distinguish three states:
   * - `None` (unset): in-table tags fall back to the `allowed` list.
   * - `Some(vec![])`: no tags are permitted inside table cells, even
   *   ones present in `allowed`.
   * - `Some([...])`: only the listed tags are permitted inside table
   *   cells; `allowed` is ignored for in-table contexts.
   *
   * Tags outside GFM tables are never affected by this option.
   */
  'table-allowed'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * HTML elements explicitly permitted inside GFM table cells.
   *
   * Mirrors markdownlint's `table_allowed_elements`. The semantics
   * distinguish three states:
   * - `None` (unset): in-table tags fall back to the `allowed` list.
   * - `Some(vec![])`: no tags are permitted inside table cells, even
   *   ones present in `allowed`.
   * - `Some([...])`: only the listed tags are permitted inside table
   *   cells; `allowed` is ignored for in-table contexts.
   *
   * Tags outside GFM tables are never affected by this option.
   */
  table_allowed?: {
    [k: string]: unknown | undefined;
  };
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * No bare URLs - wrap URLs in angle brackets
 */
export interface MD034 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Horizontal rule style
 */
export interface MD035 {
  /**
   * The style for horizontal rules (default: "consistent")
   * Can be "---", "***", "___", "- - -", "* * *", "_ _ _", or "consistent"
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Emphasis should not be used instead of a heading
 */
export interface MD036 {
  /**
   * Enable auto-fix to convert emphasis-as-heading to real headings.
   * Defaults to false: converting emphasis to a heading is a meaning change
   * the linter cannot verify (a standalone emphasized line may be a bold
   * name, filename, or label rather than a heading), so `rumdl fmt` only
   * rewrites when this is set to true. `check()` still warns either way.
   */
  fix?: boolean;
  /**
   * Heading level (1-6) to use when auto-fixing.
   * Default: 2 (## Heading)
   * Invalid values (0 or >6) produce a config validation error.
   */
  'heading-level'?: number;
  /**
   * Heading level (1-6) to use when auto-fixing.
   * Default: 2 (## Heading)
   * Invalid values (0 or >6) produce a config validation error.
   */
  heading_level?: number;
  /**
   * Heading style to use when auto-fixing.
   * Default: "atx" (## Heading) One of `atx`.
   */
  'heading-style'?: string;
  /**
   * Heading style to use when auto-fixing.
   * Default: "atx" (## Heading) One of `atx`.
   */
  heading_style?: string;
  /**
   * Punctuation characters that indicate emphasis is not being used as a heading.
   * If the emphasized text ends with one of these characters, it won't be flagged.
   * Default: ".,;:!?" - common trailing punctuation indicates a phrase, not a heading
   * Set to empty string to flag all emphasis-only lines
   */
  punctuation?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Spaces inside emphasis markers
 */
export interface MD037 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Spaces inside code span elements
 */
export interface MD038 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Spaces inside link text
 */
export interface MD039 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Code blocks should have a language specified
 */
export interface MD040 {
  /**
   * Only allow these languages (empty = allow all)
   * Uses Linguist canonical language names (case-insensitive)
   */
  'allowed-languages'?: string[];
  /**
   * Only allow these languages (empty = allow all)
   * Uses Linguist canonical language names (case-insensitive)
   */
  allowed_languages?: string[];
  /**
   * Languages Linguist does not know that this project uses anyway
   * Matched against fence labels case-insensitively
   */
  'custom-languages'?: string[];
  /**
   * Languages Linguist does not know that this project uses anyway
   * Matched against fence labels case-insensitively
   */
  custom_languages?: string[];
  /**
   * Block these languages (ignored if allowed_languages is non-empty)
   * Uses Linguist canonical language names (case-insensitive)
   */
  'disallowed-languages'?: string[];
  /**
   * Block these languages (ignored if allowed_languages is non-empty)
   * Uses Linguist canonical language names (case-insensitive)
   */
  disallowed_languages?: string[];
  /**
   * Override preferred label for specific languages
   * Keys: Linguist canonical names (case-insensitive), Values: preferred alias
   */
  'preferred-aliases'?: {
    [k: string]: string | undefined;
  };
  /**
   * Override preferred label for specific languages
   * Keys: Linguist canonical names (case-insensitive), Values: preferred alias
   */
  preferred_aliases?: {
    [k: string]: string | undefined;
  };
  /**
   * Language normalization style One of `disabled`, `consistent`.
   */
  style?: string;
  /**
   * Action for unknown language labels not in Linguist One of `ignore`, `warn`, `error`.
   */
  'unknown-language-action'?: string;
  /**
   * Action for unknown language labels not in Linguist One of `ignore`, `warn`, `error`.
   */
  unknown_language_action?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * First line in file should be a top level heading
 */
export interface MD041 {
  /**
   * Allow content before the first heading (default: false)
   * When enabled, the rule checks the level of the document's first top-level
   * heading instead of requiring the document to open with one. A document with
   * no top-level heading is not flagged.
   */
  'allow-preamble'?: boolean;
  /**
   * Allow content before the first heading (default: false)
   * When enabled, the rule checks the level of the document's first top-level
   * heading instead of requiring the document to open with one. A document with
   * no top-level heading is not flagged.
   */
  allow_preamble?: boolean;
  /**
   * Enable auto-fix for MD041 (default: false)
   * When enabled, `rumdl check --fix` will:
   * - Rewrite headings to the correct level if the first content is a heading with wrong level
   * - Move the first heading above preamble (blank lines, HTML comments) if safe
   */
  fix?: boolean;
  /**
   * Front matter title field to check (default: "title")
   * Set to empty string to disable front matter title checking
   */
  'front-matter-title'?: string;
  /**
   * Front matter title field to check (default: "title")
   * Set to empty string to disable front matter title checking
   */
  front_matter_title?: string;
  /**
   * Optional regex pattern for front matter title field (default: None)
   * If provided, checks for this pattern in front matter instead of "title:"
   */
  'front-matter-title-pattern'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Optional regex pattern for front matter title field (default: None)
   * If provided, checks for this pattern in front matter instead of "title:"
   */
  front_matter_title_pattern?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The required heading level (default: 1)
   */
  level?: number;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * No empty links
 */
export interface MD042 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Required heading structure
 */
export interface MD043 {
  /**
   * Required heading patterns
   */
  headings?: string[];
  /**
   * Case-sensitive matching (default: false)
   */
  'match-case'?: boolean;
  /**
   * Case-sensitive matching (default: false)
   */
  match_case?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Proper names should have the correct capitalization
 */
export interface MD044 {
  /**
   * Check fenced and indented code blocks too. Off by default, because code
   * often contains identifiers that intentionally differ from the prose spelling.
   */
  'code-blocks'?: boolean;
  /**
   * Check fenced and indented code blocks too. Off by default, because code
   * often contains identifiers that intentionally differ from the prose spelling.
   */
  code_blocks?: boolean;
  /**
   * Check the text inside HTML comments.
   */
  'html-comments'?: boolean;
  /**
   * Check the text inside HTML comments.
   */
  html_comments?: boolean;
  /**
   * Check the text inside HTML elements.
   */
  'html-elements'?: boolean;
  /**
   * Check the text inside HTML elements.
   */
  html_elements?: boolean;
  /**
   * Top-level frontmatter keys whose values are not checked. Matched
   * case-insensitively. `None` checks every field. A parent key excludes
   * its whole subtree.
   */
  'ignore-frontmatter-fields'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Top-level frontmatter keys whose values are not checked. Matched
   * case-insensitively. `None` checks every field. A parent key excludes
   * its whole subtree.
   */
  ignore_frontmatter_fields?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Names with the capitalization they should always have, e.g.
   * `["JavaScript", "GitHub", "Node.js"]`. Every other spelling of the same name
   * in the document is reported.
   */
  names?: string[];
  /**
   * Require configured names to occupy a whole prose token. In addition to
   * Unicode letters and numbers, internal runs of `-` and `_` join the
   * surrounding identifier components unless parsed as Markdown emphasis.
   */
  'whole-words'?: boolean;
  /**
   * Require configured names to occupy a whole prose token. In addition to
   * Unicode letters and numbers, internal runs of `-` and `_` join the
   * surrounding identifier components unless parsed as Markdown emphasis.
   */
  whole_words?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Images should have alternate text (alt text)
 */
export interface MD045 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Code blocks should use a consistent style
 */
export interface MD046 {
  /**
   * The style for code blocks (MD046) One of `consistent`, `indented`, `fenced`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Files should end with a single newline character
 */
export interface MD047 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Code fence style should be consistent
 */
export interface MD048 {
  /**
   * The style for code fence markers (MD048) One of `consistent`, `backtick`, `tilde`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Emphasis style should be consistent
 */
export interface MD049 {
  /**
   * The style for emphasis (MD049) One of `consistent`, `asterisk`, `underscore`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Strong emphasis style should be consistent
 */
export interface MD050 {
  /**
   * The style for strong emphasis (MD050) One of `consistent`, `asterisk`, `underscore`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Link fragments should reference valid headings
 */
export interface MD051 {
  /**
   * Anchor generation style to match the target platform One of `github`, `kramdown-gfm`, `kramdown`, `python-markdown`.
   */
  'anchor-style'?: string;
  /**
   * Anchor generation style to match the target platform One of `github`, `kramdown-gfm`, `kramdown`, `python-markdown`.
   */
  anchor_style?: string;
  /**
   * Also check fragments in path-shaped frontmatter values.
   *
   * Off by default, because frontmatter has no syntax marking a value as a
   * link: a path-shaped value is only a guess at one. Static-site generators
   * also resolve frontmatter paths from the site root rather than the
   * document's own directory, so checking them like body links reports
   * working paths as broken.
   *
   * Enable it for projects whose frontmatter links really are relative to
   * the document, and use `ignore-frontmatter-fields` for the keys that are
   * not.
   *
   * Example:
   * ```toml
   * [MD051]
   * check-frontmatter = true
   * ignore-frontmatter-fields = ["image", "cover"]
   * ```
   */
  'check-frontmatter'?: boolean;
  /**
   * Also check fragments in path-shaped frontmatter values.
   *
   * Off by default, because frontmatter has no syntax marking a value as a
   * link: a path-shaped value is only a guess at one. Static-site generators
   * also resolve frontmatter paths from the site root rather than the
   * document's own directory, so checking them like body links reports
   * working paths as broken.
   *
   * Enable it for projects whose frontmatter links really are relative to
   * the document, and use `ignore-frontmatter-fields` for the keys that are
   * not.
   *
   * Example:
   * ```toml
   * [MD051]
   * check-frontmatter = true
   * ignore-frontmatter-fields = ["image", "cover"]
   * ```
   */
  check_frontmatter?: boolean;
  /**
   * Match link fragments against headings case-insensitively.
   *
   * rumdl defaults to `true` (permissive matching), which deviates from
   * markdownlint's default of `false`. Set this to `false` for strict
   * markdownlint parity.
   */
  'ignore-case'?: boolean;
  /**
   * Match link fragments against headings case-insensitively.
   *
   * rumdl defaults to `true` (permissive matching), which deviates from
   * markdownlint's default of `false`. Set this to `false` for strict
   * markdownlint parity.
   */
  ignore_case?: boolean;
  /**
   * Top-level frontmatter keys whose values are not checked. Matched
   * case-insensitively. A parent key excludes its whole subtree. Applies
   * only when `check-frontmatter` is enabled.
   */
  'ignore-frontmatter-fields'?: string[];
  /**
   * Top-level frontmatter keys whose values are not checked. Matched
   * case-insensitively. A parent key excludes its whole subtree. Applies
   * only when `check-frontmatter` is enabled.
   */
  ignore_frontmatter_fields?: string[];
  /**
   * Optional regex applied to the fragment text (without the leading `#`).
   * Fragments that match are skipped — useful for runtime-generated anchors
   * (e.g., footnote IDs) that aren't visible to the linter.
   */
  'ignored-pattern'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Optional regex applied to the fragment text (without the leading `#`).
   * Fragments that match are skipped — useful for runtime-generated anchors
   * (e.g., footnote IDs) that aren't visible to the linter.
   */
  ignored_pattern?: {
    [k: string]: unknown | undefined;
  };
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Reference links and images should use a reference that exists
 */
export interface MD052 {
  /**
   * Additional reference names to ignore when checking for undefined references.
   *
   * Default: [] (empty)
   *
   * Use this to specify project-specific type names, identifiers, or other
   * bracketed text that should not be flagged as undefined references.
   *
   * Example:
   * ```toml
   * [MD052]
   * ignore = ["Vec", "HashMap", "Option", "Result"]
   * ```
   *
   * This performs case-insensitive matching (e.g., "Vec" matches `[vec]`, `[Vec]`, `[VEC]`).
   */
  ignore?: string[];
  /**
   * Whether to check shortcut reference syntax `[text]`.
   *
   * Default: false (matches markdownlint behavior)
   *
   * When false (default), only full (`[text][ref]`) and collapsed (`[text][]`)
   * reference syntax is checked. Shortcut syntax `[text]` is ambiguous because
   * it could be a shortcut reference link OR just text in brackets.
   *
   * When true, shortcut syntax is also checked, which may produce false positives
   * for bracketed text that is not intended to be a reference link.
   */
  'shortcut-syntax'?: boolean;
  /**
   * Whether to check shortcut reference syntax `[text]`.
   *
   * Default: false (matches markdownlint behavior)
   *
   * When false (default), only full (`[text][ref]`) and collapsed (`[text][]`)
   * reference syntax is checked. Shortcut syntax `[text]` is ambiguous because
   * it could be a shortcut reference link OR just text in brackets.
   *
   * When true, shortcut syntax is also checked, which may produce false positives
   * for bracketed text that is not intended to be a reference link.
   */
  shortcut_syntax?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Link and image reference definitions should be needed
 */
export interface MD053 {
  /**
   * List of reference names to keep even if unused
   */
  'ignored-definitions'?: string[];
  /**
   * List of reference names to keep even if unused
   */
  ignored_definitions?: string[];
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Link and image style should be consistent
 */
export interface MD054 {
  /**
   * Allows bare URLs in angle brackets: `<https://example.com>`.
   */
  autolink?: boolean;
  /**
   * Allows collapsed references whose label matches the link text: `[text][]`.
   */
  collapsed?: boolean;
  /**
   * Allows full references with a separate definition: `[text][label]`.
   */
  full?: boolean;
  /**
   * Allows direct links and images: `[text](url)` and `![alt](url)`.
   */
  inline?: boolean;
  /**
   * Ordered preference for the auto-fix target style. Accepts a scalar (one
   * style) or a list (priority order). The default `auto` selects the
   * best-fitting style for the source. See `PreferredStyles` docs for the
   * list semantics, including `auto` as a wildcard fallback entry.
   */
  'preferred-style'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Ordered preference for the auto-fix target style. Accepts a scalar (one
   * style) or a list (priority order). The default `auto` selects the
   * best-fitting style for the source. See `PreferredStyles` docs for the
   * list semantics, including `auto` as a wildcard fallback entry.
   */
  preferred_style?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Allows shortcut references, where the text is the label: `[text]`.
   */
  shortcut?: boolean;
  /**
   * Allows the URL as both text and destination: `[https://example.com](https://example.com)`.
   */
  'url-inline'?: boolean;
  /**
   * Allows the URL as both text and destination: `[https://example.com](https://example.com)`.
   */
  url_inline?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Table pipe style should be consistent
 */
export interface MD055 {
  /**
   * Pipe style every row must use: `consistent` (the most common style in each
   * table), `leading-and-trailing`, `no-leading-or-trailing`, `trailing-only` or
   * `leading-only`. Kebab-case and snake_case are both read.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Table column count should be consistent
 */
export interface MD056 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Relative links should point to existing files
 */
export interface MD057 {
  /**
   * How to handle absolute links (paths starting with /)
   * - "ignore" (default): Skip validation for absolute links
   * - "warn": Report a warning for absolute links
   * - "relative_to_docs": Resolve relative to MkDocs docs_dir and validate
   * - "relative_to_roots": Resolve relative to one or more configured root directories One of `ignore`, `warn`, `relative_to_docs`, `relative_to_roots`.
   */
  'absolute-links'?: string;
  /**
   * How to handle absolute links (paths starting with /)
   * - "ignore" (default): Skip validation for absolute links
   * - "warn": Report a warning for absolute links
   * - "relative_to_docs": Resolve relative to MkDocs docs_dir and validate
   * - "relative_to_roots": Resolve relative to one or more configured root directories One of `ignore`, `warn`, `relative_to_docs`, `relative_to_roots`.
   */
  absolute_links?: string;
  /**
   * Also check path-shaped values in the document's frontmatter.
   *
   * Off by default, because frontmatter has no syntax marking a value as a
   * link: a path-shaped value is only a guess at one. Static-site generators
   * also resolve frontmatter paths from the site root rather than the
   * document's own directory, so checking them like body links reports
   * working paths as broken.
   *
   * Enable it for projects whose frontmatter paths really are relative to
   * the document, and use `ignore-frontmatter-fields` for the keys that are
   * not.
   *
   * Example:
   * ```toml
   * [MD057]
   * check-frontmatter = true
   * ignore-frontmatter-fields = ["image", "cover"]
   * ```
   */
  'check-frontmatter'?: boolean;
  /**
   * Also check path-shaped values in the document's frontmatter.
   *
   * Off by default, because frontmatter has no syntax marking a value as a
   * link: a path-shaped value is only a guess at one. Static-site generators
   * also resolve frontmatter paths from the site root rather than the
   * document's own directory, so checking them like body links reports
   * working paths as broken.
   *
   * Enable it for projects whose frontmatter paths really are relative to
   * the document, and use `ignore-frontmatter-fields` for the keys that are
   * not.
   *
   * Example:
   * ```toml
   * [MD057]
   * check-frontmatter = true
   * ignore-frontmatter-fields = ["image", "cover"]
   * ```
   */
  check_frontmatter?: boolean;
  /**
   * Warn when relative links contain unnecessary path traversal.
   * When enabled, `../sub_dir/file.md` from within `sub_dir/` warns
   * and suggests the shorter equivalent `file.md`.
   */
  'compact-paths'?: boolean;
  /**
   * Warn when relative links contain unnecessary path traversal.
   * When enabled, `../sub_dir/file.md` from within `sub_dir/` warns
   * and suggests the shorter equivalent `file.md`.
   */
  compact_paths?: boolean;
  /**
   * Top-level frontmatter keys whose values are not checked. Matched
   * case-insensitively. A parent key excludes its whole subtree. Applies
   * only when `check-frontmatter` is enabled.
   */
  'ignore-frontmatter-fields'?: string[];
  /**
   * Top-level frontmatter keys whose values are not checked. Matched
   * case-insensitively. A parent key excludes its whole subtree. Applies
   * only when `check-frontmatter` is enabled.
   */
  ignore_frontmatter_fields?: string[];
  /**
   * Root directories used when `absolute-links = "relative_to_roots"`.
   *
   * Absolute links are resolved against each configured root in order, then
   * against the project root as an implicit fallback. The first root under
   * which the target file exists passes the check. A warning is emitted only
   * when no resolution finds the file.
   *
   * The implicit project-root fallback supports both link styles in the same
   * project without extra configuration: `/foo.md` (relative to a configured
   * root) and `/content/en/foo.md` (literal path from the project root).
   *
   * Paths are resolved relative to the project root when not absolute.
   * Trailing slashes are normalized automatically.
   *
   * When `roots` is empty, absolute links are validated against the project
   * root only — useful for single-root projects where every absolute link
   * resolves directly from the project root.
   *
   * Example:
   * ```toml
   * [MD057]
   * absolute-links = "relative_to_roots"
   * roots = ["content/en", "content/zh-cn"]
   * ```
   */
  roots?: string[];
  /**
   * Additional directories to search when a relative link is not found
   * relative to the file's directory.
   *
   * Paths are resolved relative to the project root (where `.rumdl.toml` or
   * `pyproject.toml` is found), or relative to the current working directory.
   *
   * For Obsidian users: the attachment folder is auto-detected from
   * `.obsidian/app.json` when `flavor = "obsidian"` is set, so this option
   * is typically not needed. Use it for custom setups or non-Obsidian tools.
   *
   * Example:
   * ```toml
   * [MD057]
   * search-paths = ["assets", "images", "attachments"]
   * ```
   */
  'search-paths'?: string[];
  /**
   * Additional directories to search when a relative link is not found
   * relative to the file's directory.
   *
   * Paths are resolved relative to the project root (where `.rumdl.toml` or
   * `pyproject.toml` is found), or relative to the current working directory.
   *
   * For Obsidian users: the attachment folder is auto-detected from
   * `.obsidian/app.json` when `flavor = "obsidian"` is set, so this option
   * is typically not needed. Use it for custom setups or non-Obsidian tools.
   *
   * Example:
   * ```toml
   * [MD057]
   * search-paths = ["assets", "images", "attachments"]
   * ```
   */
  search_paths?: string[];
  /**
   * Warn when a relative link points at the file it is written in.
   *
   * Following such a link reloads the page the reader is already on. When
   * the link carries a fragment, `file.md#section` from within `file.md`
   * warns and suggests `#section`, which reaches the same heading without
   * the reload. A link to the whole file has no equivalent shorter form, so
   * it is reported without a fix.
   */
  'self-referential-links'?: boolean;
  /**
   * Warn when a relative link points at the file it is written in.
   *
   * Following such a link reloads the page the reader is already on. When
   * the link carries a fragment, `file.md#section` from within `file.md`
   * warns and suggests `#section`, which reaches the same heading without
   * the reload. A link to the whole file has no equivalent shorter form, so
   * it is reported without a fix.
   */
  self_referential_links?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Tables should be surrounded by blank lines
 */
export interface MD058 {
  /**
   * Minimum number of blank lines after tables
   */
  'minimum-after'?: number;
  /**
   * Minimum number of blank lines after tables
   */
  minimum_after?: number;
  /**
   * Minimum number of blank lines before tables
   */
  'minimum-before'?: number;
  /**
   * Minimum number of blank lines before tables
   */
  minimum_before?: number;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Link text should be descriptive
 */
export interface MD059 {
  /**
   * List of prohibited link text phrases (case-insensitive)
   */
  'prohibited-texts'?: string[];
  /**
   * List of prohibited link text phrases (case-insensitive)
   */
  prohibited_texts?: string[];
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Table columns should be consistently aligned
 */
export interface MD060 {
  /**
   * Pads the delimiter row's dashes to match header column widths under
   * `compact` and `tight` styles.
   *
   * - `false` (default): delimiter cells use the minimum dash count.
   * - `true`: delimiter pipe positions align with header pipe positions;
   *   body rows remain compact/tight and are not padded.
   *
   * No effect under `aligned` / `aligned-no-space` (those styles already
   * align the delimiter row by construction), except when a table exceeds
   * `max-width` and auto-compacts: the effective output style is then
   * `compact`, so the delimiter row is aligned to the header column widths.
   *
   * Mirrors markdownlint MD060's `aligned_delimiter` option; the snake_case
   * alias is accepted for cross-tool compatibility.
   */
  'aligned-delimiter'?: boolean;
  /**
   * Pads the delimiter row's dashes to match header column widths under
   * `compact` and `tight` styles.
   *
   * - `false` (default): delimiter cells use the minimum dash count.
   * - `true`: delimiter pipe positions align with header pipe positions;
   *   body rows remain compact/tight and are not padded.
   *
   * No effect under `aligned` / `aligned-no-space` (those styles already
   * align the delimiter row by construction), except when a table exceeds
   * `max-width` and auto-compacts: the effective output style is then
   * `compact`, so the delimiter row is aligned to the header column widths.
   *
   * Mirrors markdownlint MD060's `aligned_delimiter` option; the snake_case
   * alias is accepted for cross-tool compatibility.
   */
  aligned_delimiter?: boolean;
  /**
   * Controls how cell text is aligned within the padded column width.
   *
   * - `auto` (default): Use alignment indicators from delimiter row (`:---`, `:---:`, `---:`)
   * - `left`: Force all columns to left-align text
   * - `center`: Force all columns to center text
   * - `right`: Force all columns to right-align text
   *
   * Only applies when `style = "aligned"` or `style = "aligned-no-space"`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * column-align = "center"  # Center all cell text
   * ``` One of `auto`, `left`, `center`, `right`.
   */
  'column-align'?: string;
  /**
   * Controls how cell text is aligned within the padded column width.
   *
   * - `auto` (default): Use alignment indicators from delimiter row (`:---`, `:---:`, `---:`)
   * - `left`: Force all columns to left-align text
   * - `center`: Force all columns to center text
   * - `right`: Force all columns to right-align text
   *
   * Only applies when `style = "aligned"` or `style = "aligned-no-space"`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * column-align = "center"  # Center all cell text
   * ``` One of `auto`, `left`, `center`, `right`.
   */
  column_align?: string;
  /**
   * Controls alignment specifically for body rows (non-header, non-delimiter).
   *
   * When set, overrides `column-align` for body rows only.
   * If not set, falls back to `column-align`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * column-align-header = "center"  # Center header text
   * column-align-body = "left"      # Left-align body text
   * ```
   */
  'column-align-body'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Controls alignment specifically for body rows (non-header, non-delimiter).
   *
   * When set, overrides `column-align` for body rows only.
   * If not set, falls back to `column-align`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * column-align-header = "center"  # Center header text
   * column-align-body = "left"      # Left-align body text
   * ```
   */
  column_align_body?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Controls alignment specifically for the header row.
   *
   * When set, overrides `column-align` for the header row only.
   * If not set, falls back to `column-align`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * column-align-header = "center"  # Center header text
   * column-align-body = "left"      # Left-align body text
   * ```
   */
  'column-align-header'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Controls alignment specifically for the header row.
   *
   * When set, overrides `column-align` for the header row only.
   * If not set, falls back to `column-align`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * column-align-header = "center"  # Center header text
   * column-align-body = "left"      # Left-align body text
   * ```
   */
  column_align_header?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  /**
   * Controls whether the last column in body rows is loosely formatted.
   *
   * - `false` (default): All columns padded to equal width across all rows.
   * - `true`: The last column width is capped at the header text width.
   *   Body cells shorter than the header are padded to the header width.
   *   Body cells longer than the header extend beyond without padding.
   *
   * Only applies when `style = "aligned"` or `style = "aligned-no-space"`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * loose-last-column = true
   * ```
   */
  'loose-last-column'?: boolean;
  /**
   * Controls whether the last column in body rows is loosely formatted.
   *
   * - `false` (default): All columns padded to equal width across all rows.
   * - `true`: The last column width is capped at the header text width.
   *   Body cells shorter than the header are padded to the header width.
   *   Body cells longer than the header extend beyond without padding.
   *
   * Only applies when `style = "aligned"` or `style = "aligned-no-space"`.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * loose-last-column = true
   * ```
   */
  loose_last_column?: boolean;
  /**
   * Maximum table width before switching to compact mode.
   *
   * `0` (default) inherits MD013's `line-length`; any other value is an explicit
   * threshold. Tables wider than this are formatted with minimal padding, which
   * matches Prettier's table formatting.
   */
  'max-width'?: number | null;
  /**
   * Maximum table width before switching to compact mode.
   *
   * `0` (default) inherits MD013's `line-length`; any other value is an explicit
   * threshold. Tables wider than this are formatted with minimal padding, which
   * matches Prettier's table formatting.
   */
  max_width?: number | null;
  /**
   * Spaces placed on each side of a cell's content, between the cell and the
   * dividing pipe. Configured values must be between 0 and 255.
   *
   * - Unset (default): each style keeps its own padding — one space for
   *   `aligned`, `aligned-no-space` and `compact`, none for `tight`.
   * - Set: the value applies to every style, so `pad-width = 0` gives aligned
   *   columns with pipes flush against the content, and `pad-width = 2`
   *   gives every style two spaces of padding.
   *
   * `aligned-no-space` keeps its defining trait regardless: its delimiter row
   * is never surrounded by padding, and instead carries the padding width in
   * extra dashes so the column stays the same width as the content rows.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * pad-width = 0  # |Name |Age|
   * ```
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * pad-width = 2  # |  Name  |  Age  |
   * ```
   */
  'pad-width'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Spaces placed on each side of a cell's content, between the cell and the
   * dividing pipe. Configured values must be between 0 and 255.
   *
   * - Unset (default): each style keeps its own padding — one space for
   *   `aligned`, `aligned-no-space` and `compact`, none for `tight`.
   * - Set: the value applies to every style, so `pad-width = 0` gives aligned
   *   columns with pipes flush against the content, and `pad-width = 2`
   *   gives every style two spaces of padding.
   *
   * `aligned-no-space` keeps its defining trait regardless: its delimiter row
   * is never surrounded by padding, and instead carries the padding width in
   * extra dashes so the column stays the same width as the content rows.
   *
   * # Examples
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * pad-width = 0  # |Name |Age|
   * ```
   *
   * ```toml
   * [MD060]
   * style = "aligned"
   * pad-width = 2  # |  Name  |  Age  |
   * ```
   */
  pad_width?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Table formatting style to enforce: `aligned` (padded for visual alignment),
   * `aligned-no-space` (aligned, delimiter row without spaces around the dashes),
   * `compact`, `tight`, or `any` (keep whatever style the table already has).
   */
  style?: string;
  severity?: Severity;
  [k: string]: unknown | undefined;
}
/**
 * Forbidden terms
 */
export interface MD061 {
  /**
   * Matches terms case-sensitively. Off means `Whitelist` also flags `whitelist`.
   */
  'case-sensitive'?: boolean;
  /**
   * Matches terms case-sensitively. Off means `Whitelist` also flags `whitelist`.
   */
  case_sensitive?: boolean;
  /**
   * Comma-separated terms or phrases that must not appear in the document.
   */
  terms?: string[];
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Link destination should not have leading or trailing whitespace
 */
export interface MD062 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Heading capitalization
 */
export interface MD063 {
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  /**
   * Words to preserve exactly as specified (brand names like iPhone, macOS)
   */
  'ignore-words'?: string[];
  /**
   * Words to preserve exactly as specified (brand names like iPhone, macOS)
   */
  ignore_words?: string[];
  /**
   * Words that should always be lowercase in title case
   * (articles, prepositions, conjunctions)
   */
  'lowercase-words'?: string[];
  /**
   * Words that should always be lowercase in title case
   * (articles, prepositions, conjunctions)
   */
  lowercase_words?: string[];
  /**
   * Maximum heading level to check (1-6)
   */
  'max-level'?: number;
  /**
   * Maximum heading level to check (1-6)
   */
  max_level?: number;
  /**
   * Minimum heading level to check (1-6)
   */
  'min-level'?: number;
  /**
   * Minimum heading level to check (1-6)
   */
  min_level?: number;
  /**
   * Preserve existing mixed-case words even if not in ignore_words
   */
  'preserve-cased-words'?: boolean;
  /**
   * Preserve existing mixed-case words even if not in ignore_words
   */
  preserve_cased_words?: boolean;
  /**
   * Punctuation that starts a new sentence in sentence case, so the word after it
   * is capitalized like the first word of the heading. Matched against the end of a
   * word, so the boundary is only recognized where whitespace follows it.
   * Empty by default, which capitalizes only the heading's first word.
   */
  'sentence-case-restart-after'?: string[];
  /**
   * Punctuation that starts a new sentence in sentence case, so the word after it
   * is capitalized like the first word of the heading. Matched against the end of a
   * word, so the boundary is only recognized where whitespace follows it.
   * Empty by default, which capitalizes only the heading's first word.
   */
  sentence_case_restart_after?: string[];
  /**
   * Capitalization style to enforce One of `title-case`, `sentence-case`, `all-caps`, `consistent`.
   */
  style?: string;
  severity?: Severity;
  [k: string]: unknown | undefined;
}
/**
 * Multiple consecutive spaces
 */
export interface MD064 {
  /**
   * Allow exactly two spaces after sentence-ending punctuation (default: false)
   *
   * When enabled, allows exactly 2 spaces after sentence-ending punctuation
   * (`.`, `!`, `?`) while still flagging multiple spaces elsewhere. This
   * supports the traditional typewriter convention of two spaces after sentences.
   *
   * Sentence-ending punctuation includes:
   * - Period: `.`
   * - Exclamation mark: `!`
   * - Question mark: `?`
   *
   * Also recognizes closing punctuation after sentence endings:
   * - Quotes: `."`, `!"`, `?"`, `.'`, `!'`, `?'`
   * - Parentheses: `.)`, `!)`, `?)`
   * - Brackets: `.]`, `!]`, `?]`
   * - Ellipsis: `...`
   *
   * Example with `allow-sentence-double-space = true`:
   * ```markdown
   * First sentence.  Second sentence.    <- OK (2 spaces after period)
   * Multiple   spaces here.              <- Flagged (3 spaces, not after sentence)
   * Word  word in middle.                <- Flagged (2 spaces, not after sentence)
   * ```
   */
  'allow-sentence-double-space'?: boolean;
  /**
   * Allow exactly two spaces after sentence-ending punctuation (default: false)
   *
   * When enabled, allows exactly 2 spaces after sentence-ending punctuation
   * (`.`, `!`, `?`) while still flagging multiple spaces elsewhere. This
   * supports the traditional typewriter convention of two spaces after sentences.
   *
   * Sentence-ending punctuation includes:
   * - Period: `.`
   * - Exclamation mark: `!`
   * - Question mark: `?`
   *
   * Also recognizes closing punctuation after sentence endings:
   * - Quotes: `."`, `!"`, `?"`, `.'`, `!'`, `?'`
   * - Parentheses: `.)`, `!)`, `?)`
   * - Brackets: `.]`, `!]`, `?]`
   * - Ellipsis: `...`
   *
   * Example with `allow-sentence-double-space = true`:
   * ```markdown
   * First sentence.  Second sentence.    <- OK (2 spaces after period)
   * Multiple   spaces here.              <- Flagged (3 spaces, not after sentence)
   * Word  word in middle.                <- Flagged (2 spaces, not after sentence)
   * ```
   */
  allow_sentence_double_space?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Horizontal rules should be surrounded by blank lines
 */
export interface MD065 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Footnote validation
 */
export interface MD066 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Footnote definitions should appear in order of first reference
 */
export interface MD067 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Footnote definitions should not be empty
 */
export interface MD068 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Duplicate list markers
 */
export interface MD069 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Nested code fence collision - use longer fence to avoid premature closure
 */
export interface MD070 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Blank line after frontmatter
 */
export interface MD071 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Frontmatter keys should be sorted alphabetically
 */
export interface MD072 {
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  /**
   * Custom key order. Keys listed here will be sorted in this order.
   * Keys not in this list will be sorted alphabetically after the specified keys.
   * If not set, all keys are sorted alphabetically (case-insensitive).
   *
   * Example: `key_order = ["title", "date", "author", "tags"]`
   */
  key_order?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Keys that must be present in the frontmatter. Each missing key is
   * reported, matched case-insensitively against top-level keys (like
   * `key_order`). Independent of `key_order`: you can order many keys while
   * requiring only a few. These warnings carry no fix because rumdl cannot
   * invent meaningful values for missing keys.
   *
   * Only applies to files that have frontmatter; requiring frontmatter to
   * exist at all is out of scope for this rule.
   *
   * Example: `required_keys = ["title", "date"]`
   */
  required_keys?: string[];
  severity?: Severity;
  [k: string]: unknown | undefined;
}
/**
 * Table of Contents should match document headings
 */
export interface MD073 {
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  'enforce-order'?: boolean;
  enforce_order?: boolean;
  indent?: number;
  'max-level'?: number;
  max_level?: number;
  'min-level'?: number;
  min_level?: number;
  severity?: Severity;
  [k: string]: unknown | undefined;
}
/**
 * MkDocs nav entries should point to existing files
 */
export interface MD074 {
  /**
   * How to handle absolute links in nav entries
   * - "warn": Report a warning
   * - "ignore" (default): Skip validation One of `warn`, `ignore`.
   */
  'absolute-links'?: string;
  /**
   * How to handle absolute links in nav entries
   * - "warn": Report a warning
   * - "ignore" (default): Skip validation One of `warn`, `ignore`.
   */
  absolute_links?: string;
  /**
   * How to handle nav entries pointing to non-existent files
   * - "warn" (default): Report a warning
   * - "ignore": Skip validation One of `warn`, `ignore`.
   */
  'not-found'?: string;
  /**
   * How to handle nav entries pointing to non-existent files
   * - "warn" (default): Report a warning
   * - "ignore": Skip validation One of `warn`, `ignore`.
   */
  not_found?: string;
  /**
   * How to handle files in docs_dir that aren't referenced in nav
   * - "warn": Report a warning
   * - "ignore" (default): Skip validation One of `warn`, `ignore`.
   */
  'omitted-files'?: string;
  /**
   * How to handle files in docs_dir that aren't referenced in nav
   * - "warn": Report a warning
   * - "ignore" (default): Skip validation One of `warn`, `ignore`.
   */
  omitted_files?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Orphaned table rows or headerless pipe content
 */
export interface MD075 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * List item spacing should be consistent
 */
export interface MD076 {
  /**
   * When true, blank lines around continuation paragraphs within a list item
   * are permitted even in tight mode. This allows tight inter-item spacing
   * while using blank lines to visually separate continuation content.
   */
  'allow-loose-continuation'?: boolean;
  /**
   * When true, blank lines around continuation paragraphs within a list item
   * are permitted even in tight mode. This allows tight inter-item spacing
   * while using blank lines to visually separate continuation content.
   */
  allow_loose_continuation?: boolean;
  /**
   * Style the gaps between consecutive list items must follow: `consistent` keeps
   * each list on whichever style it already uses, `loose` requires a blank line
   * between items and `tight` forbids one. One of `consistent`, `loose`, `tight`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * List continuation content indentation
 */
export interface MD077 {
  /**
   * Fixed continuation indent relative to the list marker, e.g. `4` for
   * MkDocs-style documents. When set, it replaces the content-column-derived
   * requirement, except that under a flavor requiring strict list indentation
   * it may only raise the 4-space minimum, never lower it. `None` keeps the
   * default content-column behavior.
   */
  indent?: {
    [k: string]: unknown | undefined;
  };
  /**
   * How strictly continuation-line indentation is enforced. One of `any`, `aligned`.
   */
  style?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Executable Quarto chunks should have a label
 */
export interface MD078 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Quarto chunk labels must not contain whitespace
 */
export interface MD079 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Heading anchors must be unique
 */
export interface MD080 {
  /**
   * Anchor generation style to match the target platform. One of `github`, `kramdown-gfm`, `kramdown`, `python-markdown`.
   */
  'anchor-style'?: string;
  /**
   * Anchor generation style to match the target platform. One of `github`, `kramdown-gfm`, `kramdown`, `python-markdown`.
   */
  anchor_style?: string;
  /**
   * Heading levels whose anchors must be unique. Defaults to all levels
   * (any heading can be a fragment target). Set to `[1, 2]` to check only
   * the MDXG virtual-page identifiers derived from H1/H2 titles.
   */
  levels?: number[];
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Inline emphasis should not be excessive
 */
export interface MD081 {
  /**
   * Maximum length of a run of adjacent emphasis spans separated only by
   * whitespace and punctuation. A longer run is flagged. Unset disables the
   * check; `Some(0)` forbids any emphasis (every span is at least a run of one).
   */
  'max-consecutive'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Maximum length of a run of adjacent emphasis spans separated only by
   * whitespace and punctuation. A longer run is flagged. Unset disables the
   * check; `Some(0)` forbids any emphasis (every span is at least a run of one).
   */
  max_consecutive?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Maximum emphasis spans allowed in a single paragraph. A paragraph with
   * more than this many spans is flagged. Unset disables the check; `Some(0)`
   * forbids all emphasis in a paragraph.
   */
  'max-per-paragraph'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Maximum emphasis spans allowed in a single paragraph. A paragraph with
   * more than this many spans is flagged. Unset disables the check; `Some(0)`
   * forbids all emphasis in a paragraph.
   */
  max_per_paragraph?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Which emphasis spans to count. Defaults to `strong` (bold only), the
   * pattern reported as the primary readability problem. One of `strong`, `emphasis`, `all`.
   */
  targets?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Headings should have content before the next heading
 */
export interface MD082 {
  /**
   * Accept a heading whose next heading is deeper, taking the subsections as
   * the parent's content. Sibling or shallower headings with nothing between
   * them are still flagged. Default false checks every heading against the
   * `level` floor regardless of what follows it.
   */
  'allow-parent-headings'?: boolean;
  /**
   * Accept a heading whose next heading is deeper, taking the subsections as
   * the parent's content. Sibling or shallower headings with nothing between
   * them are still flagged. Default false checks every heading against the
   * `level` floor regardless of what follows it.
   */
  allow_parent_headings?: boolean;
  /**
   * Minimum heading level (1-6) that must be followed by content. A heading
   * whose level is at least this value is flagged when it is immediately
   * followed by another heading with no body in between. Default 1 checks
   * every heading; set to 2 to exempt H1 (so `# Title` straight into
   * `## Section` is allowed) while still requiring content under H2 and below.
   */
  level?: number;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Detect mojibake due to encoding issues
 */
export interface MD083 {
  /**
   * Mojibake sequences that should not trigger MD083 findings.
   */
  ignore?: string[];
  /**
   * Whether to ignore mojibake findings inside fenced and indented code blocks.
   */
  'ignore-code-blocks'?: boolean;
  /**
   * Whether to ignore mojibake findings inside fenced and indented code blocks.
   */
  ignore_code_blocks?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Invisible or discouraged Unicode characters should be intentional
 */
export interface MD084 {
  /**
   * Codepoint allow-list in `U+XXXX` / `U+XXXXX` / `U+XXXXXX` format.
   *
   * Any matched invisible character with a codepoint present in this list
   * is ignored.
   */
  allow?: string[];
  /**
   * When enabled, report any invisible character anywhere in the document.
   */
  strict?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Paragraph continuation lines should not be indented
 */
export interface MD085 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Comments should be closed
 */
export interface MD086 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Inline disable comments should suppress something
 */
export interface MD087 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Quotes and dashes should be replaced with ASCII equivalents
 */
export interface MD088 {
  /**
   * Unicode characters to allow as-is.
   *
   * Any look-alike character with a codepoint present in this list
   * is ignored by MD088 and not auto-replaced.
   */
  allow?: string[];
  /**
   * Enables linting and autofix for look-alike dashes.
   */
  'normalize-dashes'?: boolean;
  /**
   * Enables linting and autofix for look-alike dashes.
   */
  normalize_dashes?: boolean;
  /**
   * Enables linting and autofix for look-alike quotes.
   */
  'normalize-quotes'?: boolean;
  /**
   * Enables linting and autofix for look-alike quotes.
   */
  normalize_quotes?: boolean;
  /**
   * Enables linting and autofix for non-ASCII space characters
   * (no-break space, narrow no-break space, en/em spaces, ideographic space, ...).
   */
  'normalize-spaces'?: boolean;
  /**
   * Enables linting and autofix for non-ASCII space characters
   * (no-break space, narrow no-break space, en/em spaces, ideographic space, ...).
   */
  normalize_spaces?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * CJK letters and Latin letters or digits should be separated by a space
 */
export interface MD089 {
  /**
   * Symbols that lead a Latin run and take a space after a CJK letter.
   */
  'symbols-after-cjk'?: string;
  /**
   * Symbols that lead a Latin run and take a space after a CJK letter.
   */
  symbols_after_cjk?: string;
  /**
   * Symbols that trail a Latin run and take a space before a CJK letter.
   */
  'symbols-before-cjk'?: string;
  /**
   * Symbols that trail a Latin run and take a space before a CJK letter.
   */
  symbols_before_cjk?: string;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Horizontal rules should not precede headings
 */
export interface MD090 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Markdown inside an HTML block renders as literal text
 */
export interface MD091 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Unresolved merge conflict markers
 */
export interface MD092 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Headings should not contain inline formatting
 */
export interface MD093 {
  /**
   * Report inline code spans in headings.
   */
  code?: boolean;
  /**
   * Report ordinary emphasis (`*`/`_`) in headings.
   */
  emphasis?: boolean;
  /**
   * Report strong emphasis (`**`/`__`) in headings.
   */
  strong?: boolean;
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * File is not valid UTF-8
 */
export interface MD094 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Link destinations should not contain confusable non-ASCII characters
 */
export interface MD095 {
  severity?: Severity;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Table rows should be sorted by a named column
 */
export interface MD096 {
  /**
   * No implicit first column: enabling the rule alone must not reorder tables.
   */
  column?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  /**
   * One of `asc`, `desc`.
   */
  order?: string;
  severity?: Severity;
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
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
