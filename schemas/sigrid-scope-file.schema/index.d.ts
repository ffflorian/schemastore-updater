/* eslint-disable */

/**
 * List of file and directory patterns to manually exclude from the analysis.
 */
export type FilePatternList = string[];
export type ComponentList = {
  name?: string;
  include?: FilePatternList;
  exclude?: FilePatternList;
}[];
/**
 * A list of technologies that should be included as part of the analysis.
 *
 * @minItems 1
 */
export type LanguageList = [Language, ...Language[]];
export type Language =
  | {
      name?: LanguageName;
      production?: Component;
      test?: Component;
      generated?: Component;
      supplementary?: Component;
    }
  | LanguageName;
export type LanguageName = string;
export type Component = null | {
  include?: FilePatternList;
  exclude?: FilePatternList;
  override?: boolean;
};
export type DependencyCheckerSource = 'all' | 'sbom';
/**
 * List of system elements that are manually defined and added to the architecture graph.
 */
export type SystemElementList = SystemElement[];
/**
 * List of manually added dependencies on top of the ones detected automatically by the analysis.
 */
export type DependencyList = Dependency[];
/**
 * Annotate all top-level components matching the pattern, in order to divide them into logical groups.
 */
export type ArchitectureGroupList = ArchitectureGroup[];
/**
 * Attaches role labels to all matching components, describing their role in the architecture.
 */
export type ArchitectureComponentRoleList = ArchitectureComponentRole[];
/**
 * Adds additional custom patterns to the architecture knowledge base used for the analysis.
 */
export type ArchitecturePatterns = ArchitecturePattern[];
/**
 * List of third-party analyzers that should not be ran.
 */
export type AnalyzerList = string[];

/**
 * Analysis scope configuration file used by Sigrid (sigrid-says.com)
 */
export interface SigridScopeConfigurationFile {
  /**
   * When true, excludes files and directories from the analysis scope based on common conventions.
   */
  default_excludes?: boolean;
  exclude?: FilePatternList;
  /**
   * Directory depth that will be used to define components.
   */
  component_depth?: number;
  component_base_dirs?: FilePatternList;
  components?: ComponentList;
  /**
   * Enable experimental analysis features.
   */
  experimental?: boolean;
  languages: LanguageList;
  /**
   * SIG Maintainability Model that should be used for the analysis, defaults to latest.
   */
  model?: string | number;
  dependencychecker?: {
    /**
     * When this *or* the 'blocklist' option is provided, OSH analysis is performed for every upload.
     */
    enabled?: boolean;
    /**
     * List of patterns for library names that should not be sent to external services.
     */
    blocklist?: string[];
    /**
     * Deprecated, use 'blocklist' instead.
     */
    blacklist?: string[];
    /**
     * When true, transitive dependencies are also checked and included in the results.
     */
    transitive?: boolean;
    /**
     * List of paths and/or dependencies that should be ignored for Open Source Health.
     */
    exclude?: (
      | string
      | {
          /**
           * Excludes all dependencies in paths matching the specified regular expression.
           */
          path: string;
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * Excludes all vulnerabilities matching the specified identifier (e.g. 'CVE-123').
           */
          vulnerability: string;
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * Excludes license risks identified in dependencies with the specified name.
           */
          license: string;
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * Excludes activity risks identified in dependencies with the specified name.
           */
          activity: string;
          [k: string]: unknown | undefined;
        }
    )[];
    /**
     * SIG Open Source Health model version that should be used for the analysis, defaults to latest.
     */
    model?: string | number;
    /**
     * List of additional technologies to analyze, which are not enabled by default.
     */
    override_enabled_technologies?: string[];
    /**
     * List of technologies for which the analysis should be disabled.
     */
    override_disabled_technologies?: string[];
    source?: DependencyCheckerSource;
  };
  architecture?: {
    /**
     * When true, architecture analysis will be triggered for each incoming upload.
     */
    enabled?: boolean;
    /**
     * SIG Architecture Quality Model that should be used for the analysis, defaults to latest.
     */
    model?: string | number;
    exclude?: FilePatternList;
    /**
     * Deprecated. This option is obsolete.
     */
    custom_components?: boolean;
    /**
     * Automatic componentization based on @sigrid:component annotations in source files.
     */
    file_annotation_components?: boolean;
    flatten_directories?: FilePatternList;
    add_system_elements?: SystemElementList;
    remove_system_elements?: SystemElementList;
    add_dependencies?: DependencyList;
    remove_dependencies?: DependencyList;
    undesirable_dependencies?: DependencyList;
    /**
     * Map of system elements for which to manually override the name.
     */
    rename?: {
      [k: string]: string | undefined;
    };
    /**
     * Default is false. When true, skips automated data store detection and assumes one monolithic data store.
     */
    merge_data_stores?: boolean;
    grouping?: ArchitectureGroupList;
    component_roles?: ArchitectureComponentRoleList;
    /**
     * Deprecated. This option is obsolete.
     */
    history_enabled?: boolean;
    /**
     * Deprecated. This option is obsolete.
     */
    history?: boolean | string;
    /**
     * Period to use for repository history analysis, default is last 12 months.
     */
    history_period_months?: number;
    /**
     * Repository history start date in the format 'yyyy-mm-dd', default is last year.
     */
    history_start?: string | number;
    /**
     * Repository history end date in the format 'yyyy-mm-dd', default is current date.
     */
    history_end?: string | number;
    /**
     * Either 'week' (default) or ‘month’.
     */
    history_interval?: 'week' | 'month';
    /**
     * Filters commits with an abnormally large amount of churn from the history analysis.
     */
    history_filter_outliers?: boolean;
    /**
     * Deprecated. This option is obsolete.
     */
    branch?: string;
    /**
     * Set to false to disable duplication detection, improves performance for huge systems.
     */
    duplication?: boolean;
    /**
     * Set to false to disable co-evolution detection, improves performance for huge systems.
     */
    co_evolution?: boolean;
    /**
     * List of metrics that should be removed from the analysis and set to N/A.
     */
    disabled_metrics?: string[];
    custom_patterns?: ArchitecturePatterns;
  };
  thirdpartyfindings?: {
    /**
     * When true, third party findings analysis will be triggered for each incoming upload.
     */
    enabled?: boolean;
    disabled_analyzers?: AnalyzerList;
    /**
     * List of rule IDs that should not be reported by Sigrid.
     */
    disabled_rules?: string[];
    enabled_analyzers?: AnalyzerList;
    /**
     * List of rule IDs that should be reported by Sigrid, even though they are disabled by default.
     */
    enabled_rules?: string[];
    include?: FilePatternList;
    exclude?: FilePatternList;
  };
  checkmarx?: never;
  [k: string]: unknown | undefined;
}
export interface SystemElement {
  name: string;
  type?: string;
  [k: string]: unknown | undefined;
}
export interface Dependency {
  source: string;
  target: string;
  type?: string;
  count?: number;
  bidirectional?: boolean;
}
export interface ArchitectureGroup {
  name: string;
  annotation?: string;
  include: FilePatternList;
  exclude?: FilePatternList;
}
export interface ArchitectureComponentRole {
  role: string;
  include: FilePatternList;
  exclude?: FilePatternList;
}
export interface ArchitecturePattern {
  description: string;
  [k: string]: unknown | undefined;
}
