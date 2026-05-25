/* eslint-disable */

/**
 * Configuration file (pgrls.toml) for pgrls, the Postgres Row-Level Security linter. Rule reference: https://github.com/pgrls/pgrls/blob/main/AGENTS.md
 */
export interface PgrlsConfiguration {
  /**
   * Path, or list of paths, to base pgrls.toml file(s) merged beneath this one. Later list entries and this file's own keys take precedence.
   */
  extends?: string | string[];
  /**
   * Database connection and scan scope.
   */
  database?: {
    /**
     * Postgres connection string. $VAR and ${VAR} are interpolated from the environment. Prefer leaving this unset and passing --database-url (or $DATABASE_URL) at runtime so secrets stay out of version control.
     */
    url?: string;
    /**
     * Schemas to lint.
     */
    schemas?: string[];
  };
  /**
   * Lint behavior.
   */
  lint?: {
    /**
     * Severity that makes `pgrls lint` exit non-zero. CI gates on this.
     */
    fail_on?: 'error' | 'warning' | 'info';
    /**
     * Rule IDs to disable entirely (case-insensitive), e.g. ["SEC022", "PERF002"].
     */
    disable?: string[];
    /**
     * Per-rule settings, keyed by rule ID — e.g. a [lint.rules.SEC001] table.
     */
    rules?: {
      [k: string]: RuleOptions | undefined;
    };
  };
  /**
   * Behavior of `pgrls diff`.
   */
  diff?: {
    /**
     * Change classification at or above which `pgrls diff` exits non-zero.
     */
    fail_on?: 'safe' | 'breaking' | 'requires-review' | 'dangerous';
  };
}
/**
 * Settings for a single rule.
 */
export interface RuleOptions {
  /**
   * Remap this rule's emitted severity without disabling it (promote an info nudge to a CI-blocking error, or demote a noisy warning).
   */
  severity?: 'error' | 'warning' | 'info';
  /**
   * Objects exempt from this rule. Entry shape depends on the rule: a policy ID (schema.table.policy), a table reference (table or schema.table), a role name, a qualified view/function, etc.
   */
  allowlist?: string[];
  [k: string]: unknown | undefined;
}
