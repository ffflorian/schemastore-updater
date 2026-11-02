/* eslint-disable */

export type LayerEntry = {
  [k: string]: unknown | undefined;
};
export type LayerEntry1 = string;
/**
 * A dotted Python name such as shop.orders, with no wildcards.
 */
export type DottedName = string;
export type LibraryList = DottedName[];
/**
 * Two or more independent sibling layers: they share a place in the order and may not import each other.
 *
 * @minItems 2
 */
export type SiblingLayers = [
  Layer & {
    template?: never;
    [k: string]: unknown | undefined;
  },
  Layer & {
    template?: never;
    [k: string]: unknown | undefined;
  },
  ...(Layer & {
    template?: never;
    [k: string]: unknown | undefined;
  })[]
];
/**
 * A package selector: a.b (exact), a.* (one level) or a.** (any depth).
 */
export type Selector = string;
/**
 * A member pattern: a name or fnmatch glob (*, ?, [seq], [!seq]), optionally ending in .py or /. Inwards also rejects a reversed range such as [z-a].
 */
export type MemberPattern = string;
/**
 * Project advice added to the fix steps of an INW007 finding for this shape.
 */
export type Hints = string[];
/**
 * A rule code this Inwards knows.
 */
export type RuleCode =
  | 'INW000'
  | 'INW001'
  | 'INW002'
  | 'INW003'
  | 'INW004'
  | 'INW005'
  | 'INW006'
  | 'INW007'
  | 'INW008'
  | 'INW009'
  | 'INW010'
  | 'INW011'
  | 'INW012'
  | 'INW013'
  | 'INW014'
  | 'INW015'
  | 'INW016'
  | 'INW017'
  | 'INW018'
  | 'INW019'
  | 'FAPI001'
  | 'FAPI002'
  | 'FAPI003'
  | 'FAPI005'
  | 'FAPI006'
  | 'FAPI007'
  | 'FAPI008'
  | 'FAPI009';
/**
 * Module prefixes or selectors, as in layers[].modules: the rule reports only in the modules they match.
 *
 * @minItems 1
 *
 * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
 */
export type Modules = [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
/**
 * The composition root: the modules, as prefixes or selectors, that may import the role and build its classes, such as app.di and app.main. Unset means only the role itself may.
 *
 * @minItems 1
 *
 * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
 */
export type AllowedIn = [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
/**
 * A public entry: a dotted module prefix such as shop.billing.api, or, with a leading =, that module alone without what lies under it, such as =shop.billing.
 */
export type PublicEntry = string;

/**
 * Configuration of Inwards, the architecture linter for Python, in pyproject.toml. The schema checks structure, types, enums and syntax; the parser also checks relations between entries (unique names, context ownership) and required-version.
 */
export interface HttpsJsonSchemastoreOrgPartialInwardsJson {
  /**
   * Directory, relative to pyproject.toml, that module names are computed from.
   */
  root?: string;
  /**
   * The layers, innermost first. A module may import its own layer and any layer listed before it. A nested array holds independent siblings, which may not import each other.
   *
   * @minItems 1
   */
  layers: [Layer | SiblingLayers, ...(Layer | SiblingLayers)[]];
  /**
   * The oldest Inwards allowed to check this project, as "MAJOR.MINOR.PATCH". An older binary fails with a config error.
   */
  'required-version'?: string;
  /**
   * Module names left out of the INW006 unassigned-package warning, matched as whole segments anywhere in a module name, or at its start when the entry begins with /.
   */
  ignore?: string[];
  /**
   * Modules a build step writes, which INW010 treats as existing: dotted names whose segments may use * and ?. A list, even an empty one, replaces the default.
   */
  generated?: string[];
  /**
   * Implicit namespace packages that installed distributions add to, such as acme.platform. INW010 doesn't report a missing module directly inside one; a missing module inside a subpackage that is in the project is still reported.
   */
  'namespace-packages'?: DottedName[];
  /**
   * How many attempts at the same violation before the hooks stop blocking and tell the agent to ask the user.
   */
  'escalate-after'?: number;
  /**
   * Write the opt-in run log .inwards/runs.jsonl.
   */
  'run-log'?: boolean;
  /**
   * What the Claude Code Stop gate checks: "changed" (the files the session changed) or "project" (the whole project against its baseline).
   */
  'stop-gate'?: 'changed' | 'project';
  /**
   * Which import cycles INW004 reports: between modules, between bounded contexts, both, or none ([]).
   */
  cycles?: ('modules' | 'contexts')[];
  /**
   * Markdown, Mermaid and PlantUML files whose marked diagrams (%% inwards: layers or contexts in Mermaid, ' inwards: layers or contexts in PlantUML) INW017, INW018 and INW019 check against the config and the code: paths relative to the config file, with * and ? in a segment and ** for any number of directories.
   */
  diagrams?: string[];
  /**
   * Package shapes: which members a package may, must and must not hold (INW007, INW008). The first matching entry wins.
   */
  shape?: Shape[];
  /**
   * Where a member name may appear (INW007).
   */
  names?: Name[];
  rules?: Rules;
  /**
   * Whether the Claude Code hooks honour an inline suppression the agent added: "deny" treats it as absent, "allow" honours it.
   */
  'agent-suppressions'?: 'deny' | 'allow';
  /**
   * Bounded contexts or slices: what each owns, which of its modules others may import, and which contexts it may depend on (INW002, INW003).
   */
  contexts?: Context[];
  /**
   * Named templates: roles that expand into layers, shape keys and a context's public modules, used with template = "<name>" on layer, shape and context entries.
   */
  templates?: {
    [k: string]: Template | undefined;
  };
}
export interface Layer {
  /**
   * The layer's name, unique among layers.
   */
  name: string;
  /**
   * Module prefixes and selectors that belong to the layer: shop.domain owns shop.domain.order, shop.*.domain owns shop.orders.domain.order.
   *
   * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
   */
  modules: (LayerEntry & LayerEntry1)[];
  /**
   * Libraries the layer may import; when set, any other third-party library is denied (INW005).
   */
  'allow-libraries'?: LibraryList;
  /**
   * Libraries the layer may not import, stdlib included (INW005).
   */
  'deny-libraries'?: LibraryList;
  /**
   * Libraries added to the layer's deny list or to the innermost layer's default list (INW005).
   */
  'extend-deny-libraries'?: LibraryList;
  /**
   * A template whose roles expand into one layer each, inside this entry's modules. The entry itself is no layer.
   */
  template?: string;
}
export interface Shape {
  /**
   * Package selectors this shape applies to.
   *
   * @minItems 1
   */
  packages: [Selector, ...Selector[]];
  /**
   * Members the package may hold; anything else is extra.
   */
  allow?: MemberPattern[];
  /**
   * Members the package must hold (INW008).
   */
  require?: MemberPattern[];
  /**
   * Members the package must not hold.
   */
  forbid?: MemberPattern[];
  /**
   * How an extra member is reported: "error" or "warning".
   */
  extra?: 'error' | 'warning';
  hints?: Hints;
  /**
   * A template that supplies allow, require, forbid, extra and hints; keys this entry sets win.
   */
  template?: string;
}
export interface Name {
  /**
   * One member pattern, such as test_*.
   */
  pattern: MemberPattern;
  /**
   * Package selectors where members matching the pattern may appear.
   *
   * @minItems 1
   */
  'only-in': [Selector, ...Selector[]];
}
/**
 * Which rules report and how loudly. ignore wins over select and extend-select; INW000 can't be ignored or re-levelled. A key named after a rule holds that rule's options.
 */
export interface Rules {
  /**
   * Only these rules report, opt-in rules included. Must list at least one code.
   *
   * @minItems 1
   */
  select?: [RuleCode, ...RuleCode[]];
  /**
   * These rules report too, on top of select or the rules that are on by default. Turns opt-in rules on. INW000 can't be listed.
   */
  'extend-select'?: RuleCode[];
  /**
   * These rules don't report. INW000 can't be listed.
   */
  ignore?: RuleCode[];
  /**
   * Per-rule severity, such as { INW006 = "warning" }. INW000 can't be listed.
   */
  severity?: {
    [k: string]: 'error' | 'warning' | undefined;
  };
  'layer-dependency'?: RuleOptions;
  'context-independence'?: RuleOptions;
  'public-api-only'?: RuleOptions;
  'import-cycles'?: RuleOptions;
  'pure-domain'?: PureDomainOptions;
  'unassigned-module'?: RuleOptions;
  'package-shape'?: RuleOptions;
  'missing-member'?: RuleOptions;
  'suppression-comment'?: RuleOptions;
  'unknown-first-party'?: RuleOptions;
  'dynamic-import'?: RuleOptions;
  'thin-endpoint'?: ThinEndpointOptions;
  'async-blocking'?: AsyncBlockingOptions;
  'ports-abstract'?: PortsAbstractOptions;
  'construct-only-in'?: ConstructOnlyInOptions;
  'orm-naming'?: OrmNamingOptions;
  'diagram-unknown-name'?: RuleOptions;
  'diagram-forbidden-edge'?: RuleOptions;
  'diagram-missing-dependency'?: RuleOptions;
  'endpoint-metadata'?: EndpointMetadataOptions;
  'undocumented-error-response'?: UndocumentedErrorResponseOptions;
  'router-wiring'?: RouterWiringOptions;
  'route-shadowing'?: ContentRuleOptions;
  'lifespan-events'?: ContentRuleOptions;
  'yield-dependency-swallows'?: ContentRuleOptions;
  'duplicate-operation-id'?: ContentRuleOptions;
  'depends-called'?: ContentRuleOptions;
}
/**
 * A rule's options, [tool.inwards.rules.<rule-name>]. They don't turn the rule on: extend-select or select does.
 */
export interface RuleOptions {
  modules?: Modules;
}
/**
 * INW005's options, [tool.inwards.rules.pure-domain]: modules, as for every rule, and deny.
 */
export interface PureDomainOptions {
  modules?: Modules;
  /**
   * Libraries denied to module prefixes that aren't whole layers, whether or not a layer owns them. The layer's allow-libraries doesn't undo them (INW005).
   */
  deny?: {
    /**
     * Module prefixes or selectors, as in layers[].modules, that may not import this entry's libraries.
     *
     * @minItems 1
     *
     * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
     */
    modules: [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
    /**
     * Import names such as django or http.client; each covers its submodules, stdlib included.
     *
     * @minItems 1
     */
    libraries: [DottedName, ...DottedName[]];
  }[];
}
/**
 * INW012 thin-endpoint's options, [tool.inwards.rules.thin-endpoint]. They don't turn the rule on: extend-select or select does.
 */
export interface ThinEndpointOptions {
  modules?: Modules;
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * The most statements an endpoint's body may hold, nested ones included; guards that raise an HTTP error and the docstring don't count. false turns the check off.
   */
  'max-statements'?: number | false;
  /**
   * The most if/elif, case and except branches an endpoint may hold, guards left out. false turns the check off.
   */
  'max-branches'?: number | false;
  /**
   * How deep compound statements may nest in an endpoint. false turns the check off.
   */
  'max-nesting'?: number | false;
  /**
   * Whether an endpoint may hold for and while loops.
   */
  'allow-loops'?: boolean;
  /**
   * Whether comprehensions and generator expressions are allowed; false counts them as loops.
   */
  'allow-comprehensions'?: boolean;
  /**
   * Calls an endpoint may not make, by qualified name with * and ? wildcards. Replaces the default list (requests.*, httpx.*, sqlalchemy.* and others); [] turns the check off.
   */
  'deny-calls'?: string[];
  /**
   * Calls added to deny-calls (or to its default list), by qualified name with * and ? wildcards.
   */
  'extend-deny-calls'?: string[];
  /**
   * Parameter types whose method calls are database work (db.execute, session.add), by qualified name. Default: the SQLAlchemy and SQLModel sessions.
   */
  'deny-receiver-types'?: string[];
  /**
   * Parameter names whose method calls count as database work whatever their type, for untyped code, such as db or session.
   */
  'deny-receiver-params'?: string[];
  /**
   * Layer names, module prefixes or selectors the endpoint must call into at least once, such as application or shop.*.service.
   *
   * @minItems 1
   */
  'delegate-to'?: [string, ...string[]];
  /**
   * Decorators that mark an endpoint besides the frameworks' own, by qualified name with * and ? wildcards, such as app.http.endpoint.
   */
  decorators?: string[];
  /**
   * The frameworks whose endpoints INW012 recognises: fastapi (with Starlette), flask, litestar and django (with Django REST framework). Default: every framework the file mentions.
   */
  frameworks?: ('fastapi' | 'flask' | 'litestar' | 'django')[];
  /**
   * In-house view base classes, by qualified name with * and ? wildcards: methods named after HTTP verbs or ViewSet actions on their subclasses are endpoints.
   */
  'base-classes'?: string[];
}
/**
 * INW013 async-blocking's options, [tool.inwards.rules.async-blocking]. They don't turn the rule on: extend-select or select does.
 */
export interface AsyncBlockingOptions {
  modules?: Modules;
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * Calls that block when called inside async def, added to INW013's built-in list (sqlite3.connect, psycopg2.connect and the other DB-API drivers), by qualified name with * and ? wildcards.
   */
  'extend-blocking-calls'?: string[];
  /**
   * Types or factories whose every method blocks, added to INW013's built-in list (the sync SQLAlchemy Session and Engine, redis.Redis, boto3 clients, DB-API connections), by qualified name with * and ? wildcards. A parameter annotated with one, or a name bound from a call to one, is a blocking receiver.
   */
  'extend-blocking-types'?: string[];
  /**
   * Module prefixes or selectors, as in layers[].modules, of the first-party modules INW013 follows one hop into from an async def to find a sync helper that blocks; packages above them are read too, for re-exports. Unset follows every first-party module; [] keeps the check to the checked module.
   *
   * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
   */
  'follow-modules'?: (LayerEntry & LayerEntry1)[];
}
/**
 * INW014 ports-abstract's options, [tool.inwards.rules.ports-abstract]. They don't turn the rule on: extend-select or select does. Without modules, the rule checks the modules with a ports segment.
 */
export interface PortsAbstractOptions {
  modules?: Modules;
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * Bases that keep a class in a port module out of the check, by qualified name with * and ? wildcards; builtins are spelled bare (Exception). Replaces the default list of exceptions, pydantic.BaseModel, NamedTuple, TypedDict and enums.
   */
  'allow-bases'?: string[];
  /**
   * Bases added to allow-bases (or to its default), by qualified name with * and ? wildcards.
   */
  'extend-allow-bases'?: string[];
  /**
   * Class decorators that keep a class in a port module out of the check, by qualified name with * and ? wildcards. Replaces the default list of dataclass, pydantic and attrs decorators.
   */
  'allow-decorators'?: string[];
}
/**
 * INW015 construct-only-in's options, [tool.inwards.rules.construct-only-in]. They don't turn the rule on: extend-select or select does.
 */
export interface ConstructOnlyInOptions {
  modules?: Modules;
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * The guarded modules, such as the outbound adapters, as module prefixes or selectors as in layers[].modules. Only the role itself and allowed-in may import them at runtime or build their classes.
   *
   * @minItems 1
   *
   * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
   */
  role: [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
  'allowed-in'?: AllowedIn;
}
/**
 * INW016 orm-naming's options, [tool.inwards.rules.orm-naming]. They don't turn the rule on: extend-select or select does.
 */
export interface OrmNamingOptions {
  modules?: Modules;
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * How table names are checked: lower_case_snake and singular ("snake_singular"), lower_case_snake only ("snake"), or not at all (false).
   */
  'table-name'?: 'snake' | 'snake_singular' | false;
  /**
   * The suffix every datetime column name ends with, or false to turn the check off.
   */
  'datetime-suffix'?: string | false;
  /**
   * The suffix every date column name ends with, or false to turn the check off.
   */
  'date-suffix'?: string | false;
  /**
   * Table names INW016 accepts as written, such as a mass noun the singular heuristic reads as a plural ("news" is built in).
   */
  'allow-tables'?: string[];
  /**
   * In a whole-project run, report a project with SQLAlchemy or SQLModel tables and no MetaData(naming_convention=...).
   */
  'require-naming-convention'?: boolean;
}
/**
 * FAPI001 endpoint-metadata's options, [tool.inwards.rules.endpoint-metadata]. They don't turn the rule on: extend-select or select does.
 */
export interface EndpointMetadataOptions {
  /**
   * Module prefixes or selectors, as in layers[].modules: the rule reports only in the modules they match.
   *
   * @minItems 1
   *
   * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
   */
  modules?: [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * Require summary= or a docstring ("summary-or-docstring"), summary= itself ("summary"), or nothing (false).
   */
  'require-summary'?: 'summary-or-docstring' | 'summary' | false;
  /**
   * Require response_model= or a return annotation FastAPI can use; a status_code=204 route is exempt.
   */
  'require-response-model'?: boolean;
  /**
   * HTTP methods whose path operations must set status_code= explicitly.
   */
  'require-status-code'?: ('get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head' | 'trace')[];
  /**
   * Keys every entry in responses= must have.
   */
  'require-response-fields'?: ('description' | 'model' | 'content')[];
  /**
   * Require tags= on the path operation, or on a router or include_router above it.
   */
  'require-tags'?: boolean;
  /**
   * Require an explicit operation_id=.
   */
  'require-operation-id'?: boolean;
}
/**
 * FAPI002 undocumented-error-response's options, [tool.inwards.rules.undocumented-error-response]. They don't turn the rule on: extend-select or select does.
 */
export interface UndocumentedErrorResponseOptions {
  /**
   * Module prefixes or selectors, as in layers[].modules: the rule reports only in the modules they match.
   *
   * @minItems 1
   *
   * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
   */
  modules?: [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * Which error codes must be declared: 4xx only, or 4xx and 5xx.
   */
  codes?: '4xx' | '4xx-5xx';
  /**
   * How many calls deep FAPI002 follows helpers and dependencies; 0 reads the endpoint's own body only.
   */
  'max-depth'?: number;
  /**
   * Report codes raised with HTTPException in the endpoint's own body; false leaves them to Ruff FAST004.
   */
  'report-direct-raises'?: boolean;
  /**
   * Count a code that only comes from a custom exception with a registered handler as documented.
   */
  'handled-counts-as-documented'?: boolean;
  /**
   * "ignore": a 422 counts as documented when the operation takes parameters, since FastAPI documents it; "report": it must be declared.
   */
  'explicit-422'?: 'ignore' | 'report';
}
/**
 * FAPI003 router-wiring's options, [tool.inwards.rules.router-wiring]. They don't turn the rule on: extend-select or select does.
 */
export interface RouterWiringOptions {
  modules?: Modules;
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  /**
   * The apps unmounted routers are measured from, as module:name, where name is the app's variable or the top-level function that builds it. Default: every FastAPI() in the project.
   *
   * @minItems 1
   */
  entrypoints?: [string, ...string[]];
  /**
   * Routers that may stay unmounted, as module prefixes or selectors of their qualified name, such as app.experimental.*.
   *
   * @minItems 1
   *
   * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
   */
  'allow-unmounted'?: [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
  /**
   * What an include_router call Inwards can't resolve does to unmounted routers: warn turns them into warnings, silent drops them.
   */
  'unresolved-includes'?: 'warn' | 'silent';
  /**
   * Whether to report an include_router call that runs above the included router's own routes in the same file.
   */
  'check-order'?: boolean;
}
/**
 * A content rule's options, [tool.inwards.rules.<rule-name>]. They don't turn the rule on: extend-select or select does.
 */
export interface ContentRuleOptions {
  /**
   * Module prefixes or selectors, as in layers[].modules: the rule reports only in the modules they match.
   *
   * @minItems 1
   *
   * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
   */
  modules?: [LayerEntry & LayerEntry1, ...(LayerEntry & LayerEntry1)[]];
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
}
export interface Context {
  /**
   * The context's name: non-blank, case-sensitive, unique among contexts.
   */
  name: string;
  /**
   * Literal module prefixes the context owns, with their descendants. The longest matching prefix decides a module's one owning context.
   *
   * @minItems 1
   */
  modules: [DottedName, ...DottedName[]];
  /**
   * Prefixes of this context's own modules that contexts depending on it may import. Absolute names, not relative to the context. Write =name to open that module alone, not what lies under it (a package facade).
   */
  public?: PublicEntry[];
  /**
   * Contexts this one may import from directly: not transitive, not reverse.
   */
  'depends-on'?: string[];
  /**
   * A template whose public modules, under each of this context's prefixes, join its public list.
   */
  template?: string;
}
export interface Template {
  /**
   * Role modules, innermost first, relative to the layer entry's modules; "a | b" makes independent siblings.
   *
   * @minItems 1
   */
  roles?: [string, ...string[]];
  /**
   * Modules, relative to a context's prefixes, that other contexts may import (INW003).
   */
  public?: DottedName[];
  /**
   * Members a shaped package may hold besides require and __init__; the roles are added.
   */
  allow?: MemberPattern[];
  /**
   * Members a shaped package must hold (INW008).
   */
  require?: MemberPattern[];
  /**
   * Members a shaped package must not hold.
   */
  forbid?: MemberPattern[];
  /**
   * How an extra member is reported: "error" or "warning".
   */
  extra?: 'error' | 'warning';
  hints?: Hints;
  rules?: TemplateRules;
}
/**
 * Opt-in rules each role turns on in its modules, such as { router = { async-blocking = true } }. Expands into [tool.inwards.rules].
 */
export interface TemplateRules {
  /**
   * Opt-in rules this role turns on, by rule name: true, a severity, or the rule's options without modules (the role's modules fill it; INW015's role too).
   */
  [k: string]:
    | {
        'thin-endpoint'?:
          | true
          | ('error' | 'warning')
          | (ThinEndpointOptions & {
              [k: string]: unknown | undefined;
            });
        'async-blocking'?:
          | true
          | ('error' | 'warning')
          | (AsyncBlockingOptions & {
              [k: string]: unknown | undefined;
            });
        'ports-abstract'?:
          | true
          | ('error' | 'warning')
          | (PortsAbstractOptions & {
              [k: string]: unknown | undefined;
            });
        'construct-only-in'?: true | ('error' | 'warning') | TemplateConstructOnlyIn;
        'orm-naming'?:
          | true
          | ('error' | 'warning')
          | (OrmNamingOptions & {
              [k: string]: unknown | undefined;
            });
        'endpoint-metadata'?:
          | true
          | ('error' | 'warning')
          | (EndpointMetadataOptions & {
              [k: string]: unknown | undefined;
            });
        'undocumented-error-response'?:
          | true
          | ('error' | 'warning')
          | (UndocumentedErrorResponseOptions & {
              [k: string]: unknown | undefined;
            });
        'router-wiring'?:
          | true
          | ('error' | 'warning')
          | (RouterWiringOptions & {
              [k: string]: unknown | undefined;
            });
        'route-shadowing'?:
          | true
          | ('error' | 'warning')
          | (ContentRuleOptions & {
              [k: string]: unknown | undefined;
            });
        'lifespan-events'?:
          | true
          | ('error' | 'warning')
          | (ContentRuleOptions & {
              [k: string]: unknown | undefined;
            });
        'yield-dependency-swallows'?:
          | true
          | ('error' | 'warning')
          | (ContentRuleOptions & {
              [k: string]: unknown | undefined;
            });
        'duplicate-operation-id'?:
          | true
          | ('error' | 'warning')
          | (ContentRuleOptions & {
              [k: string]: unknown | undefined;
            });
        'diagram-unknown-name'?:
          | true
          | ('error' | 'warning')
          | (RuleOptions & {
              [k: string]: unknown | undefined;
            });
        'diagram-forbidden-edge'?:
          | true
          | ('error' | 'warning')
          | (RuleOptions & {
              [k: string]: unknown | undefined;
            });
        'diagram-missing-dependency'?:
          | true
          | ('error' | 'warning')
          | (RuleOptions & {
              [k: string]: unknown | undefined;
            });
        'depends-called'?:
          | true
          | ('error' | 'warning')
          | (ContentRuleOptions & {
              [k: string]: unknown | undefined;
            });
      }
    | undefined;
}
/**
 * INW015's options in a template: allowed-in and check-tests. The template fills role with the role's modules.
 */
export interface TemplateConstructOnlyIn {
  /**
   * Whether the rule also reports in test modules: test_*.py, *_test.py, conftest.py, and modules with a tests or test segment. Off by default, so the rule skips them.
   */
  'check-tests'?: boolean;
  'allowed-in'?: AllowedIn;
}
