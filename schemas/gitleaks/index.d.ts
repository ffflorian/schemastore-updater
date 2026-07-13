/* eslint-disable */

/**
 * Inherited rule IDs to disable.
 */
export type StringArray = string[];
/**
 * Deprecated rule allowlist form. Prefer [[rules.allowlists]].
 */
export type RuleAllowlist = (
  | {
      commits: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      paths: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      regexes: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      stopwords: StringArray;
      [k: string]: unknown | undefined;
    }
) & {
  /**
   * Human-readable allowlist description.
   */
  description?: string;
  /**
   * Whether any criterion or all criteria must match.
   */
  condition?: 'AND' | 'OR' | 'and' | 'or' | '&&' | '||';
  commits?: StringArray;
  paths?: StringArray;
  /**
   * Finding field tested by regexes.
   */
  regexTarget?: 'secret' | 'match' | 'line';
  regexes?: StringArray;
  stopwords?: StringArray;
};
/**
 * An allowlist for commits, paths, regexes, or stopwords.
 */
export type RuleAllowlist1 = RuleAllowlist2 & {
  /**
   * Human-readable allowlist description.
   */
  description?: string;
  /**
   * Whether any criterion or all criteria must match.
   */
  condition?: 'AND' | 'OR' | 'and' | 'or' | '&&' | '||';
  commits?: StringArray;
  paths?: StringArray;
  /**
   * Finding field tested by regexes.
   */
  regexTarget?: 'secret' | 'match' | 'line';
  regexes?: StringArray;
  stopwords?: StringArray;
};
export type RuleAllowlist2 =
  | {
      commits: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      paths: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      regexes: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      stopwords: StringArray;
      [k: string]: unknown | undefined;
    };
/**
 * Deprecated global allowlist form. Prefer [[allowlists]].
 */
export type GlobalAllowlist = (
  | {
      commits: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      paths: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      regexes: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      stopwords: StringArray;
      [k: string]: unknown | undefined;
    }
) & {
  targetRules?: StringArray;
  /**
   * Human-readable allowlist description.
   */
  description?: string;
  /**
   * Whether any criterion or all criteria must match.
   */
  condition?: 'AND' | 'OR' | 'and' | 'or' | '&&' | '||';
  commits?: StringArray;
  paths?: StringArray;
  /**
   * Finding field tested by regexes.
   */
  regexTarget?: 'secret' | 'match' | 'line';
  regexes?: StringArray;
  stopwords?: StringArray;
};
/**
 * A global or targeted allowlist for commits, paths, regexes, or stopwords.
 */
export type GlobalAllowlist1 = GlobalAllowlist2 & {
  targetRules?: StringArray;
  /**
   * Human-readable allowlist description.
   */
  description?: string;
  /**
   * Whether any criterion or all criteria must match.
   */
  condition?: 'AND' | 'OR' | 'and' | 'or' | '&&' | '||';
  commits?: StringArray;
  paths?: StringArray;
  /**
   * Finding field tested by regexes.
   */
  regexTarget?: 'secret' | 'match' | 'line';
  regexes?: StringArray;
  stopwords?: StringArray;
};
export type GlobalAllowlist2 =
  | {
      commits: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      paths: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      regexes: StringArray;
      [k: string]: unknown | undefined;
    }
  | {
      stopwords: StringArray;
      [k: string]: unknown | undefined;
    };

/**
 * Configuration for Gitleaks secret detection rules and allowlists.
 * https://github.com/gitleaks/gitleaks#configuration
 */
export interface GitleaksConfiguration {
  /**
   * Optional schema URL for editor integrations.
   */
  $schema?: string;
  /**
   * Configuration title.
   */
  title?: string;
  /**
   * Configuration description.
   */
  description?: string;
  /**
   * Minimum Gitleaks version required to use this configuration.
   */
  minVersion?: string;
  extend?: Extend;
  /**
   * Detection rules.
   */
  rules?: Rule[];
  allowlist?: GlobalAllowlist;
  /**
   * Global or targeted allowlists.
   */
  allowlists?: GlobalAllowlist1[];
}
/**
 * Configuration inheritance options.
 */
export interface Extend {
  /**
   * Path to a configuration file to extend.
   */
  path?: string;
  /**
   * URL to a configuration file to extend.
   */
  url?: string;
  /**
   * Extend the default Gitleaks configuration.
   */
  useDefault?: boolean;
  disabledRules?: StringArray;
}
/**
 * A detection rule.
 */
export interface Rule {
  /**
   * Unique rule identifier.
   */
  id: string;
  /**
   * Human-readable rule description.
   */
  description?: string;
  /**
   * Go regular expression used to detect secrets.
   */
  regex?: string;
  /**
   * Regex capture group used as the secret and for entropy checks.
   */
  secretGroup?: number;
  /**
   * Minimum Shannon entropy required for the configured secret group.
   */
  entropy?: number;
  /**
   * Go regular expression used to match paths.
   */
  path?: string;
  keywords?: StringArray;
  tags?: StringArray;
  /**
   * Do not include this rule in reports.
   */
  skipReport?: boolean;
  allowlist?: RuleAllowlist;
  /**
   * Rule-specific allowlists.
   */
  allowlists?: RuleAllowlist1[];
  /**
   * Auxiliary rules required for a composite rule match.
   */
  required?: RequiredRule[];
}
export interface RequiredRule {
  /**
   * Required rule ID.
   */
  id: string;
  /**
   * Maximum line distance between the primary finding and required finding.
   */
  withinLines?: number;
  /**
   * Maximum column distance between the primary finding and required finding.
   */
  withinColumns?: number;
}
