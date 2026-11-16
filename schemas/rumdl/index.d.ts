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
  abbreviations?: unknown[];
  'atomic-spans'?: boolean;
  atomic_spans?: boolean;
  blockquotes?: boolean;
  'bracket-display-math'?: boolean;
  bracket_display_math?: boolean;
  'break-words'?: unknown[];
  break_words?: unknown[];
  'cjk-soft-break'?: string;
  cjk_soft_break?: string;
  'code-block-line-length'?: unknown;
  code_block_line_length?: unknown;
  'code-blocks'?: boolean;
  code_blocks?: boolean;
  'code-spans'?: boolean;
  code_spans?: boolean;
  'front-matter'?: boolean;
  front_matter?: boolean;
  'heading-line-length'?: unknown;
  heading_line_length?: unknown;
  headings?: boolean;
  'ignore-link-urls'?: boolean;
  ignore_link_urls?: boolean;
  'length-mode'?: string;
  length_mode?: string;
  'line-length'?: number;
  line_length?: number;
  'link-text-punctuation'?: string;
  link_text_punctuation?: string;
  'math-blocks'?: boolean;
  math_blocks?: boolean;
  paragraphs?: boolean;
  reflow?: boolean;
  'reflow-break-code-spans'?: boolean;
  reflow_break_code_spans?: boolean;
  'reflow-break-link-text'?: boolean;
  reflow_break_link_text?: boolean;
  'reflow-length-exemptions'?: boolean;
  reflow_length_exemptions?: boolean;
  'reflow-mode'?: string;
  reflow_mode?: string;
  'reflow-sentence-double-space'?: boolean;
  reflow_sentence_double_space?: boolean;
  'require-sentence-capital'?: boolean;
  require_sentence_capital?: boolean;
  stern?: boolean;
  strict?: boolean;
  tables?: boolean;
  enable_reflow?: boolean;
  'semantic-link-understanding'?: boolean;
  semantic_link_understanding?: boolean;
  'strict-sentences'?: boolean;
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
  'front-matter-title'?: boolean;
  front_matter_title?: boolean;
  'front-matter-title-pattern'?: unknown;
  front_matter_title_pattern?: unknown;
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
  indent?: number;
  'start-indent'?: number;
  start_indent?: number;
  'start-indented'?: boolean;
  start_indented?: boolean;
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
  'br-spaces'?: number;
  br_spaces?: number;
  'list-item-empty-lines'?: boolean;
  list_item_empty_lines?: boolean;
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
  'code-blocks'?: boolean;
  code_blocks?: boolean;
  'ignore-code-languages'?: unknown[];
  ignore_code_languages?: unknown[];
  'spaces-per-tab'?: number;
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
  'show-output'?: boolean;
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
  magiclink?: boolean;
  tags?: unknown;
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
  'allowed-at-start'?: boolean;
  allowed_at_start?: boolean;
  'lines-above'?: unknown;
  lines_above?: unknown;
  'lines-above-mode'?: string;
  lines_above_mode?: string;
  'lines-below'?: unknown;
  lines_below?: unknown;
  'nested-heading-lines-above'?: unknown;
  nested_heading_lines_above?: unknown;
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
  'allow-different-link-anchors'?: boolean;
  allow_different_link_anchors?: boolean;
  'allow-different-nesting'?: boolean;
  allow_different_nesting?: boolean;
  'siblings-only'?: boolean;
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
  'allow-document-sections'?: boolean;
  allow_document_sections?: boolean;
  'allow-with-separators'?: boolean;
  allow_with_separators?: boolean;
  'front-matter-title'?: string;
  front_matter_title?: string;
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
  'list-items'?: boolean;
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
  'ol-align-column'?: number;
  ol_align_column?: number;
  'ol-multi'?: number;
  ol_multi?: number;
  'ol-single'?: number;
  ol_single?: number;
  'ul-multi'?: number;
  ul_multi?: number;
  'ul-single'?: number;
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
  'list-items'?: boolean;
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
  'allow-lazy-continuation'?: boolean;
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
  'allowed-elements'?: unknown[];
  allowed_elements?: unknown[];
  'allowed-inside'?: unknown[];
  allowed_inside?: unknown[];
  'br-style'?: string;
  br_style?: string;
  'disallowed-elements'?: unknown[];
  disallowed_elements?: unknown[];
  'drop-attributes'?: string[];
  drop_attributes?: string[];
  fix?: boolean;
  'fix-mode'?: string;
  fix_mode?: string;
  'strip-wrapper-elements'?: string[];
  strip_wrapper_elements?: string[];
  'table-allowed-elements'?: unknown;
  table_allowed_elements?: unknown;
  allowed?: unknown[];
  disallowed?: unknown[];
  'table-allowed'?: unknown;
  table_allowed?: unknown;
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
  fix?: boolean;
  'heading-level'?: number;
  heading_level?: number;
  'heading-style'?: string;
  heading_style?: string;
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
  'allowed-languages'?: unknown[];
  allowed_languages?: unknown[];
  'custom-languages'?: unknown[];
  custom_languages?: unknown[];
  'disallowed-languages'?: unknown[];
  disallowed_languages?: unknown[];
  'preferred-aliases'?: {
    [k: string]: unknown | undefined;
  };
  preferred_aliases?: {
    [k: string]: unknown | undefined;
  };
  style?: string;
  'unknown-language-action'?: string;
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
  'allow-preamble'?: boolean;
  allow_preamble?: boolean;
  fix?: boolean;
  'front-matter-title'?: string;
  front_matter_title?: string;
  'front-matter-title-pattern'?: unknown;
  front_matter_title_pattern?: unknown;
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
  headings?: unknown[];
  'match-case'?: boolean;
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
  'code-blocks'?: boolean;
  code_blocks?: boolean;
  'html-comments'?: boolean;
  html_comments?: boolean;
  'html-elements'?: boolean;
  html_elements?: boolean;
  'ignore-frontmatter-fields'?: unknown;
  ignore_frontmatter_fields?: unknown;
  names?: unknown[];
  'whole-words'?: boolean;
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
  'anchor-style'?: string;
  anchor_style?: string;
  'check-frontmatter'?: boolean;
  check_frontmatter?: boolean;
  'ignore-case'?: boolean;
  ignore_case?: boolean;
  'ignore-frontmatter-fields'?: unknown[];
  ignore_frontmatter_fields?: unknown[];
  'ignored-pattern'?: unknown;
  ignored_pattern?: unknown;
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
  ignore?: unknown[];
  'shortcut-syntax'?: boolean;
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
  'ignored-definitions'?: unknown[];
  ignored_definitions?: unknown[];
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
  autolink?: boolean;
  collapsed?: boolean;
  full?: boolean;
  inline?: boolean;
  'preferred-style'?: unknown;
  preferred_style?: unknown;
  shortcut?: boolean;
  'url-inline'?: boolean;
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
  'absolute-links'?: string;
  absolute_links?: string;
  'check-frontmatter'?: boolean;
  check_frontmatter?: boolean;
  'compact-paths'?: boolean;
  compact_paths?: boolean;
  'ignore-frontmatter-fields'?: unknown[];
  ignore_frontmatter_fields?: unknown[];
  roots?: unknown[];
  'search-paths'?: unknown[];
  search_paths?: unknown[];
  'self-referential-links'?: boolean;
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
  'minimum-after'?: number;
  minimum_after?: number;
  'minimum-before'?: number;
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
  'prohibited-texts'?: string[];
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
  'aligned-delimiter'?: boolean;
  aligned_delimiter?: boolean;
  'column-align'?: string;
  column_align?: string;
  'column-align-body'?: unknown;
  column_align_body?: unknown;
  'column-align-header'?: unknown;
  column_align_header?: unknown;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
  'loose-last-column'?: boolean;
  loose_last_column?: boolean;
  'max-width'?: number;
  max_width?: number;
  'pad-width'?: unknown;
  pad_width?: unknown;
  style?: string;
  severity?: Severity;
  [k: string]: unknown | undefined;
}
/**
 * Forbidden terms
 */
export interface MD061 {
  'case-sensitive'?: boolean;
  case_sensitive?: boolean;
  terms?: unknown[];
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
  'ignore-words'?: unknown[];
  ignore_words?: unknown[];
  'lowercase-words'?: string[];
  lowercase_words?: string[];
  'max-level'?: number;
  max_level?: number;
  'min-level'?: number;
  min_level?: number;
  'preserve-cased-words'?: boolean;
  preserve_cased_words?: boolean;
  'sentence-case-restart-after'?: unknown[];
  sentence_case_restart_after?: unknown[];
  style?: string;
  severity?: Severity;
  [k: string]: unknown | undefined;
}
/**
 * Multiple consecutive spaces
 */
export interface MD064 {
  'allow-sentence-double-space'?: boolean;
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
  key_order?: unknown;
  required_keys?: unknown[];
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
  'absolute-links'?: string;
  absolute_links?: string;
  'not-found'?: string;
  not_found?: string;
  'omitted-files'?: string;
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
  'allow-loose-continuation'?: boolean;
  allow_loose_continuation?: boolean;
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
  indent?: unknown;
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
  'anchor-style'?: string;
  anchor_style?: string;
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
  'max-consecutive'?: unknown;
  max_consecutive?: unknown;
  'max-per-paragraph'?: unknown;
  max_per_paragraph?: unknown;
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
  'allow-parent-headings'?: boolean;
  allow_parent_headings?: boolean;
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
  ignore?: unknown[];
  'ignore-code-blocks'?: boolean;
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
  allow?: unknown[];
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
  allow?: unknown[];
  'normalize-dashes'?: boolean;
  normalize_dashes?: boolean;
  'normalize-quotes'?: boolean;
  normalize_quotes?: boolean;
  'normalize-spaces'?: boolean;
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
  'symbols-after-cjk'?: string;
  symbols_after_cjk?: string;
  'symbols-before-cjk'?: string;
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
  code?: boolean;
  emphasis?: boolean;
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
  column?: unknown;
  /**
   * Enables or disables this rule.
   */
  enabled?: boolean;
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
