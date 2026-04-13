/* eslint-disable */

/**
 * Checks if `hint-mostly-unused` is being applied to all dependencies.
 */
export type BlanketHintMostlyUnused = LintLevel | DetailedLint;
/**
 * Specify the lint level for a lint or lint group.
 */
export type LintLevel = 'forbid' | 'deny' | 'warn' | 'allow';
/**
 * Checks for dependency version requirements that do not explicitly specify a full `major.minor.patch` version requirement.
 */
export type ImplicitMinimumVersionReq = LintLevel | DetailedLint;
/**
 * Checks for unknown lints in the `[lints.cargo]` table.
 */
export type UnknownLints = LintLevel | DetailedLint;
/**
 * Code that does something simple but in a complex way.
 */
export type Complexity = LintLevel | DetailedLint;
/**
 * Code that is outright wrong or useless.
 */
export type Correctness = LintLevel | DetailedLint;
/**
 * New lints that are still under development.
 */
export type Nursery = LintLevel | DetailedLint;
/**
 * Lints which are rather strict or have occasional false positives.
 */
export type Pedantic = LintLevel | DetailedLint;
/**
 * Code that can be written to run faster.
 */
export type Perf = LintLevel | DetailedLint;
/**
 * Lints which prevent the use of Cargo features.
 */
export type Restriction = LintLevel | DetailedLint;
/**
 * Code that should be written in a more idiomatic way.
 */
export type Style = LintLevel | DetailedLint;
/**
 * Code that is most likely wrong or useless.
 */
export type Suspicious = LintLevel | DetailedLint;
export type Lint = (LintLevel | DetailedLint) | undefined;

/**
 * Lint settings for Cargo individual lints and lint groups.
 */
export interface CargoLints {
  blanket_hint_mostly_unused?: BlanketHintMostlyUnused;
  implicit_minimum_version_req?: ImplicitMinimumVersionReq;
  unknown_lints?: UnknownLints;
  complexity?: Complexity;
  correctness?: Correctness;
  nursery?: Nursery;
  pedantic?: Pedantic;
  perf?: Perf;
  restriction?: Restriction;
  style?: Style;
  suspicious?: Suspicious;
  [k: string]: Lint | undefined;
}
export interface DetailedLint {
  level?: LintLevel;
  /**
   * The priority that controls which lints or lint groups override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  [k: string]: unknown | undefined;
}
