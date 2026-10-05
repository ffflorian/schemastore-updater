/* eslint-disable */

export type LayerEntry =
  {
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
  | 'FAPI001'
  | 'FAPI002'
  | 'FAPI003';
/**
 * Module prefixes or selectors, as in layers[].modules: the rule reports only in the modules they match.
 *
 * @minItems 1
 *
 * Items: A layer entry: a module prefix such as shop.domain, or, with a *, a selector whose segments are identifiers, * (one segment) or ** (one or more), starting with a package name, such as shop.*.domain. Inwards also checks non-ASCII identifiers exactly.
 */
export type Modules = [
  LayerEntry & LayerEntry1,
  ...(LayerEntry & LayerEntry1)[]
];

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
  'pure-domain'?: RuleOptions;
  'unassigned-module'?: RuleOptions;
  'package-shape'?: RuleOptions;
  'missing-member'?: RuleOptions;
  'suppression-comment'?: RuleOptions;
  'unknown-first-party'?: RuleOptions;
  'dynamic-import'?: RuleOptions;
  'endpoint-metadata'?: EndpointMetadataOptions;
  'undocumented-error-response'?: UndocumentedErrorResponseOptions;
  'router-wiring'?: RouterWiringOptions;
}
/**
 * A rule's options, [tool.inwards.rules.<rule-name>]. They don't turn the rule on: extend-select or select does.
 */
export interface RuleOptions {
  modules?: Modules;
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
  modules?: [
    LayerEntry & LayerEntry1,
    ...(LayerEntry & LayerEntry1)[]
  ];
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
  modules?: [
    LayerEntry & LayerEntry1,
    ...(LayerEntry & LayerEntry1)[]
  ];
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
  'allow-unmounted'?: [
    LayerEntry & LayerEntry1,
    ...(LayerEntry & LayerEntry1)[]
  ];
  /**
   * What an include_router call Inwards can't resolve does to unmounted routers: warn turns them into warnings, silent drops them.
   */
  'unresolved-includes'?: 'warn' | 'silent';
  /**
   * Whether to report an include_router call that runs above the included router's own routes in the same file.
   */
  'check-order'?: boolean;
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
   * Prefixes of this context's own modules that contexts depending on it may import. Absolute names, not relative to the context.
   */
  public?: DottedName[];
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
}
