/* eslint-disable */

/**
 * Path to sysroot.
 */
export type Sysroot = string;
/**
 * Path to the directory with source code of sysroot crates.
 */
export type SysrootSource = string;
/**
 * Crate name used for display purposes, without affecting semantics.
 */
export type DisplayName = string;
/**
 * Path to the root module of the crate.
 */
export type RootModule = string;
/**
 * Edition of the crate.
 */
export type Edition = '2015' | '2018' | '2021' | '2024';
/**
 * Index of a crate in the `crates` array.
 */
export type CrateIndex = number;
/**
 * Name as should appear in the (implicit) `extern crate name` declaration.
 */
export type Name = string;
/**
 * Crate dependencies.
 */
export type Dependencies = Dependencies1[];
/**
 * The crate's version
 */
export type Version = string;
/**
 * Whether this crate should be treated as a member of the current "workspace".
 */
export type IsWorkspaceMember = boolean;
export type IncludedDirectories = string[];
export type ExcludedDirectories = string[];
/**
 * The set of cfgs activated for a given crate.
 */
export type Configurations = string[];
/**
 * Target triple for this crate.
 */
export type Target = string;
/**
 * Whether the crate is a proc-macro crate.
 */
export type IsProcMacro = boolean;
/**
 * For proc-macro crates, path to compiled proc-macro (.so file).
 */
export type PathToCompiledProcMacro = string;
/**
 * URL to the source repository of the crate.
 */
export type Repository = string;
/**
 * The set of crates comprising the current project.
 */
export type Crates = Crate[];

export interface JSONSchemaForNonCargoBasedRustProjects {
  sysroot?: Sysroot;
  sysroot_src?: SysrootSource;
  crates: Crates;
  [k: string]: unknown | undefined;
}
export interface Crate {
  display_name?: DisplayName;
  root_module: RootModule;
  edition: Edition;
  deps: Dependencies;
  version?: Version;
  is_workspace_member?: IsWorkspaceMember;
  source?: Source;
  cfg?: Configurations;
  target?: Target;
  env?: EnvironmentVariables;
  is_proc_macro?: IsProcMacro;
  proc_macro_dylib_path?: PathToCompiledProcMacro;
  repository?: Repository;
  [k: string]: unknown | undefined;
}
export interface Dependencies1 {
  crate: CrateIndex;
  name: Name;
  [k: string]: unknown | undefined;
}
/**
 * (Super)set of `.rs` files comprising this crate.
 */
export interface Source {
  include_dirs: IncludedDirectories;
  exclude_dirs: ExcludedDirectories;
  [k: string]: unknown | undefined;
}
/**
 * Environment variables, used for the `env!` macro
 */
export interface EnvironmentVariables {
  /**
   * This interface was referenced by `EnvironmentVariables`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: string;
}
