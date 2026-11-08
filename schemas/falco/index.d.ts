/* eslint-disable */

export type Item = number | string;
export type Priority =
  'EMERGENCY' | 'ALERT' | 'CRITICAL' | 'ERROR' | 'WARNING' | 'NOTICE' | 'INFO' | 'INFORMATIONAL' | 'DEBUG';
export type OverriddenItem = 'append' | 'replace';
/**
 * Falco runtime security rules. See https://falco.org/docs/rules/ for documentation.
 */
export type FalcoRules = FalcoRule[];

export interface FalcoRule {
  required_engine_version?: string;
  required_plugin_versions?: RequiredPluginVersion[];
  macro?: string;
  condition?: string;
  list?: string;
  items?: Item[];
  rule?: string;
  desc?: string;
  enabled?: boolean;
  output?: string;
  append?: boolean;
  priority?: Priority;
  capture?: boolean;
  capture_duration?: number;
  source?: string;
  exceptions?: Exception[];
  override?: Override;
  tags?: string[];
  warn_evttypes?: boolean;
  'skip-if-unknown-filter'?: boolean;
}
export interface RequiredPluginVersion {
  name: string;
  version: string;
  alternatives?: Alternative[];
}
export interface Alternative {
  name: string;
  version: string;
}
export interface Exception {
  name: string;
  fields?: unknown;
  comps?: unknown;
  values?: unknown;
}
export interface Override {
  items?: OverriddenItem;
  desc?: OverriddenItem;
  condition?: OverriddenItem;
  output?: OverriddenItem;
  priority?: OverriddenItem;
  enabled?: OverriddenItem;
  exceptions?: OverriddenItem;
  capture?: OverriddenItem;
  capture_duration?: OverriddenItem;
  tags?: OverriddenItem;
  warn_evttypes?: OverriddenItem;
  'skip-if-unknown-filter'?: OverriddenItem;
}
