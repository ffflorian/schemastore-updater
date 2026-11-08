/* eslint-disable */

export type DocstringStyle = 'rst';
export type RuleSelector =
  | 'ALL'
  | 'SMP'
  | 'SMP0'
  | 'SMP00'
  | 'SMP001'
  | 'SMP002'
  | 'SMP003'
  | 'SMP004'
  | 'SMP005'
  | 'SMP006'
  | 'SMP007'
  | 'SMP1'
  | 'SMP10'
  | 'SMP101'
  | 'SMP102'
  | 'SMP103'
  | 'SMP104'
  | 'SMP2'
  | 'SMP20'
  | 'SMP201'
  | 'SMP202'
  | 'SMP203'
  | 'SMP3'
  | 'SMP30'
  | 'SMP301'
  | 'SMP302'
  | 'SMP303'
  | 'SMP304'
  | 'SMP305'
  | 'SMP306'
  | 'SMP307'
  | 'SMP308'
  | 'SMP309'
  | 'SMP4'
  | 'SMP40'
  | 'SMP401'
  | 'SMP402'
  | 'SMP403'
  | 'SMP404'
  | 'SMP405'
  | 'SMP406'
  | 'SMP407'
  | 'SMP408'
  | 'SMP409'
  | 'SMP41'
  | 'SMP410'
  | 'SMP411'
  | 'SMP5'
  | 'SMP50'
  | 'SMP501'
  | 'SMP502'
  | 'SMP503'
  | 'SMP504'
  | 'SMP505'
  | 'SMP506'
  | 'SMP507'
  | 'SMP508'
  | 'SMP509'
  | 'SMP51'
  | 'SMP510'
  | 'SMP511'
  | 'SMP512'
  | 'SMP513'
  | 'SMP514'
  | 'SMP515'
  | 'SMP516'
  | 'SMP517'
  | 'SMP518'
  | 'SMP519'
  | 'SMP52'
  | 'SMP520'
  | 'SMP521'
  | 'SMP522'
  | 'SMP523'
  | 'SMP524'
  | 'SMP525'
  | 'SMP526'
  | 'SMP527'
  | 'SMP528'
  | 'SMP529'
  | 'SMP53'
  | 'SMP530'
  | 'SMP531'
  | 'SMP6'
  | 'SMP60'
  | 'SMP601'
  | 'SMP602'
  | 'SMP603'
  | 'SMP604'
  | 'SMP7'
  | 'SMP70'
  | 'SMP701'
  | 'SMP702'
  | 'SMP703'
  | 'SMP704'
  | 'SMP8'
  | 'SMP80'
  | 'SMP801'
  | 'SMP802'
  | 'SMP803'
  | 'SMP804'
  | 'SMP805'
  | 'SMP806'
  | 'SMP807'
  | 'SMP808'
  | 'SMP809'
  | 'SMP81'
  | 'SMP811'
  | 'SMP812'
  | 'SMP813'
  | 'SMP814'
  | 'SMP815'
  | 'SMP9'
  | 'SMP90'
  | 'SMP901'
  | 'SMP902'
  | 'SMP903'
  | 'SMP904'
  | 'SMP91'
  | 'SMP910'
  | 'SMP911'
  | 'SMP912'
  | 'SMP913'
  | 'SMP914'
  | 'SMP915'
  | 'SMP916'
  | 'SMP917'
  | 'SMP918'
  | 'SMP919'
  | 'SMP92'
  | 'SMP920'
  | 'SMP921'
  | 'SMP922'
  | 'SMP923'
  | 'SMP924'
  | 'absolute-sibling-import'
  | 'all-format'
  | 'all-not-last'
  | 'blanket-ignore'
  | 'callable-ellipsis'
  | 'catch-all-module'
  | 'class-member-order'
  | 'cognitive-complexity'
  | 'collection-built-by-statements'
  | 'conditional-in-test'
  | 'constant-assert'
  | 'dataclass-frozen'
  | 'dataclass-kw-only'
  | 'dataclass-slots'
  | 'definition-before-use'
  | 'dependency-import-guard'
  | 'duplicate-code'
  | 'early-assignment'
  | 'error-message-matching'
  | 'forwarding-function'
  | 'function-docstring'
  | 'future-annotations'
  | 'import-cycle'
  | 'imprecise-annotation'
  | 'indistinct-error-class'
  | 'init-module-content'
  | 'long-comment-line'
  | 'long-docstring-paragraph'
  | 'long-paragraph'
  | 'long-tuple-return'
  | 'loop-in-test'
  | 'meaningless-name'
  | 'missing-final'
  | 'missing-from-all'
  | 'mock-assertion-typo'
  | 'mock-attribute-assignment'
  | 'mock-without-spec'
  | 'module-attribute-import'
  | 'module-variable-case'
  | 'module-variable-prefix'
  | 'parametrize-without-id'
  | 'restating-comment'
  | 'rst-attribute-kind'
  | 'rst-duplicate-param'
  | 'rst-empty-field'
  | 'rst-field-syntax'
  | 'rst-inline-markup'
  | 'rst-missing-attribute'
  | 'rst-missing-param'
  | 'rst-missing-raises'
  | 'rst-param-order'
  | 'rst-private-field'
  | 'rst-restating-field'
  | 'rst-returns'
  | 'rst-type-field'
  | 'rst-unknown-attribute'
  | 'rst-unknown-param'
  | 'section-comment'
  | 'single-caller-helper'
  | 'single-letter-name'
  | 'single-use-variable'
  | 'single-user-constant'
  | 'sleep-in-test'
  | 'split-composite-assert'
  | 'star-import'
  | 'stdlib-mock'
  | 'string-concatenation'
  | 'string-statement-comment'
  | 'super-forwarding-method'
  | 'suppression-without-reason'
  | 'test-class'
  | 'test-module-docstring'
  | 'test-only-code'
  | 'test-only-parameter'
  | 'undocumented-public-api'
  | 'unexported-public-name'
  | 'unused-default'
  | 'unused-definition'
  | 'unused-export'
  | 'unused-fixture'
  | 'unused-return-value'
  | 'up-argparse-suggest-on-error'
  | 'up-asyncio-iscoroutinefunction'
  | 'up-backport-import'
  | 'up-chdir-restore'
  | 'up-codecs-open'
  | 'up-comprehension-unpacking'
  | 'up-compression-modules'
  | 'up-context-var-token-reset'
  | 'up-deprecated-stdlib-alias'
  | 'up-event-loop-in-coroutine'
  | 'up-exc-info-exception'
  | 'up-lazy-modules-list'
  | 'up-object-sentinel'
  | 'up-re-error-alias'
  | 'up-re-prefixmatch'
  | 'up-removed-ast-node'
  | 'up-strptime-date'
  | 'up-traceback-exception-arguments'
  | 'up-type-checking-lazy-import'
  | 'up-unittest-assert-helper'
  | 'up-unittest-enter-context'
  | 'up-utf8-encoding-default'
  | 'up-warnings-deprecated'
  | 'vars-call'
  | 'walrus-candidate';
export type OutputFormat =
  | 'concise'
  | 'full'
  | 'json'
  | 'json-lines'
  | 'junit'
  | 'grouped'
  | 'github'
  | 'gitlab'
  | 'pylint'
  | 'rdjson'
  | 'azure'
  | 'sarif';
export type ProjectKindOption = 'auto' | 'library' | 'application';

/**
 * simplint configuration ([tool.simplint] in pyproject.toml)
 */
export interface SimplintConfiguration {
  /**
   * Modules of a library, besides its top-level packages, that users import from directly. Their `__all__` is the
   * interface you declare, so `unused-export` (`SMP402`) keeps names no module of the project imports.
   */
  'api-modules'?: string[];
  /**
   * The top-level packages and modules a library ships, whose modules make up its public API. By default they come
   * from the build backend's settings, then from the packages holding a `py.typed` marker, then from the package
   * named after the project; when none is found, every module outside `docs` and the tests counts.
   */
  'api-packages'?: string[];
  /**
   * The markup of docstrings, which the reStructuredText rules, `SMP910` to `SMP925`, check: `"rst"` for
   * reStructuredText field lists, such as `:param name:`, `:returns:` and `:raises Error:`. Unset, those rules do not
   * report.
   */
  'docstring-style'?: DocstringStyle;
  /**
   * A list of rule codes, prefixes or names to consider fixable, in addition to those specified by
   * [`fixable`](#fixable).
   */
  'extend-fixable'?: RuleSelector[];
  /**
   * A list of mappings from file pattern to rule codes, prefixes or names to exclude, in addition to any rules
   * excluded by [`per-file-ignores`](#per-file-ignores).
   */
  'extend-per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  };
  /**
   * A list of rule codes, prefixes or names for which unsafe fixes should be considered safe.
   */
  'extend-safe-fixes'?: RuleSelector[];
  /**
   * A list of rule codes, prefixes or names to enable, in addition to those specified by [`select`](#select).
   */
  'extend-select'?: RuleSelector[];
  /**
   * A list of rule codes, prefixes or names to consider non-fixable, in addition to those specified by
   * [`unfixable`](#unfixable).
   */
  'extend-unfixable'?: RuleSelector[];
  /**
   * A list of rule codes, prefixes or names for which safe fixes should be considered unsafe.
   */
  'extend-unsafe-fixes'?: RuleSelector[];
  /**
   * Enable fix behavior by-default when running `simplint` (overridden by the `--fix` and `--no-fix` command-line
   * flags). Only includes automatic fixes unless `--unsafe-fixes` is provided.
   */
  fix?: boolean;
  /**
   * Like [`fix`](#fix), but disables reporting on leftover violation. Implies [`fix`](#fix).
   */
  'fix-only'?: boolean;
  /**
   * A list of rule codes, prefixes or names to consider fixable. By default, all rules are considered fixable.
   */
  fixable?: RuleSelector[];
  /**
   * A list of rule codes, prefixes or names to ignore. Prefixes can specify exact rules (like `SMP601`), entire
   * groups (like `SMP1`), or anything in between.
   */
  ignore?: RuleSelector[];
  /**
   * Options for the import rules.
   */
  imports?: ImportsOptions;
  /**
   * Options for the logic rules.
   */
  logic?: LogicOptions;
  /**
   * The most words a paragraph may hold: a comment paragraph for `long-paragraph` (`SMP002`), and a docstring
   * paragraph for `long-docstring-paragraph` (`SMP904`).
   */
  'max-paragraph-words'?: number;
  /**
   * Options for the naming rules.
   */
  naming?: NamingOptions;
  /**
   * The style in which violation messages should be formatted: `"full"` (default) (shows source), `"concise"`,
   * `"grouped"` (group messages by file), `"json"` (machine-readable), `"json-lines"`, `"junit"` (machine-readable
   * XML), `"github"` (GitHub Actions annotations), `"gitlab"` (GitLab CI code quality report), `"pylint"` (Pylint
   * text format), `"rdjson"`, `"azure"` (Azure Pipeline logging commands) or `"sarif"`.
   */
  'output-format'?: OutputFormat;
  /**
   * A list of mappings from file pattern to rule codes, prefixes or names to exclude, when considering any matching
   * files. A pattern matches the file's name, or its path relative to the project root. An initial '!' negates the
   * file pattern.
   *
   * For more information on the glob syntax, refer to the [`globset`
   * documentation](https://docs.rs/globset/latest/globset/#syntax).
   */
  'per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  };
  /**
   * Whether the project is a `"library"`, whose public API other code imports, or an `"application"`, which has no
   * Python API, so all of its code is internal. `"auto"` picks `"library"` when something installs the project: a
   * `[build-system]` table, or a `setup.py` or `setup.cfg`, unless `[tool.uv]` sets `package = false` or maturin
   * builds only a binary.
   */
  'project-kind'?: ProjectKindOption;
  /**
   * A list of rule codes, prefixes or names to enable. Prefixes can specify exact rules (like `SMP601`), entire
   * groups (like `SMP1`), or anything in between.
   *
   * When breaking ties between enabled and disabled rules (via `select` and `ignore`, respectively), more specific
   * prefixes override less specific prefixes. `ignore` takes precedence over `select` if the same prefix appears in
   * both.
   */
  select?: RuleSelector[];
  /**
   * Whether to show an enumeration of all fixed lint violations (overridden by the `--show-fixes` command-line
   * flag).
   */
  'show-fixes'?: boolean;
  /**
   * A list of rule codes, prefixes or names to consider non-fixable.
   */
  unfixable?: RuleSelector[];
  /**
   * Enable application of unsafe fixes. If excluded, a hint will be displayed when unsafe fixes are available. If
   * set to false, the hint will be hidden.
   */
  'unsafe-fixes'?: boolean;
}
/**
 * The `[tool.simplint.imports]` table.
 */
export interface ImportsOptions {
  /**
   * Absolute names of modules whose attributes the code may reach as `module.Name`, such as a module that tests patch
   * attribute by attribute. `module-attribute-import` (`SMP304`) leaves them alone.
   */
  'module-attributes'?: string[];
}
/**
 * The `[tool.simplint.logic]` table.
 */
export interface LogicOptions {
  /**
   * The most statements the caller of such a helper may have once the helper's statements are added to its own.
   */
  'max-caller-statements'?: number;
  /**
   * The highest cognitive complexity a function may have before `cognitive-complexity` (`SMP529`) reports it. The
   * score counts each branch, loop and handler more the deeper it is nested, as `SonarSource` defines it.
   */
  'max-cognitive-complexity'?: number;
  /**
   * The most statements a private helper may have for `single-caller-helper` (`SMP505`) to suggest inlining it into
   * its one caller. A docstring does not count.
   */
  'max-helper-statements'?: number;
  /**
   * The most elements a tuple returned from a function may hold before `long-tuple-return` (`SMP528`) reports it. A
   * longer tuple is a record whose fields are known only by position; a dataclass or a named tuple names them.
   */
  'max-tuple-elements'?: number;
  /**
   * The fewest statements in a row another module must repeat for `duplicate-code` (`SMP530`) to report them.
   * Statements count as those of one body, each nested block counting as one.
   */
  'min-duplicate-statements'?: number;
}
/**
 * The `[tool.simplint.naming]` table.
 */
export interface NamingOptions {
  /**
   * Names of modules and packages that `catch-all-module` (`SMP104`) reports, since they hold whatever does not fit
   * elsewhere. A package is reported through its `__init__.py`.
   */
  'catch-all-modules'?: string[];
  /**
   * A list of module-scope names that `module-variable-case` (`SMP102`) and `module-variable-prefix` (`SMP404`) leave
   * as they are, such as the variables a framework reads from a module by their exact lowercase names.
   */
  'keep-names'?: string[];
  /**
   * Words that name a variable, parameter or attribute without saying what it holds, which `meaningless-name`
   * (`SMP103`) reports. A word matches in lower or upper case, with or without leading or trailing underscores.
   */
  'meaningless-names'?: string[];
}
