/* eslint-disable */

/**
 * The profile configuration for Qodana analysis
 */
export type Profile =
  | {
      /**
       * The profile name (embedded or located in the project)
       */
      name: string;
    }
  | {
      /**
       * The path to the profile file relative to the project root
       */
      path: string;
    };

/**
 * A configuration file for Qodana (https://jetbrains.com/qodana), named qodana.yaml or qodana.yml
 */
export interface Qodana {
  /**
   * The version of the file format
   */
  version: '1.0';
  profile?: Profile;
  /**
   * @deprecated
   * Deprecated: Use failureConditions#anySeverity
   */
  failThreshold?: number;
  script?: Script;
  /**
   * The inspections and paths that are excluded from analysis
   *
   * @minItems 0
   */
  exclude?: Exclude[];
  /**
   * The inspections and paths that are added to those from the profile
   *
   * @minItems 0
   */
  include?: Include[];
  /**
   * The linter (Docker image) to run for Qodana CLI / any CI extensions
   */
  linter?: string;
  /**
   * The local path to an IDE or a product code to use for Qodana analysis. Incompatible with 'linter'
   */
  ide?: string;
  /**
   * The command to run inside Docker before the analysis starts
   */
  bootstrap?: string;
  /**
   * Set JVM properties to be used while running Qodana
   */
  properties?: {
    [k: string]: string | undefined;
  };
  /**
   * A list of license rules to apply for license checks
   *
   * @minItems 0
   */
  licenseRules?: LicenseRule[];
  /**
   * @minItems 0
   */
  dependencyIgnores?: DependencyIgnore[];
  /**
   * @minItems 0
   */
  dependencyOverrides?: DependencyOverride[];
  /**
   * Overrides the licenses attached to the project
   *
   * @minItems 0
   */
  projectLicenses?: LicenseOverride[];
  /**
   * @minItems 0
   */
  customDependencies?: CustomDependency[];
  /**
   * A list of plugins to install for Qodana analysis
   *
   * @minItems 0
   */
  plugins?: Plugin[];
  /**
   * @deprecated
   * The configuration for .NET solutions and projects
   */
  'dot-net'?:
    | {
        /**
         * The name of a .NET solution inside the Qodana project
         */
        solution?: string;
      }
    | {
        /**
         * The name of a .NET project inside the Qodana project
         */
        project?: string;
      };
  /**
   * The configuration for .NET solutions and projects
   */
  dotnet?:
    | {
        /**
         * The name of a .NET solution inside the Qodana project
         */
        solution?: string;
      }
    | {
        /**
         * The name of a .NET project inside the Qodana project
         */
        project?: string;
      }
    | {
        /**
         * The name of a configuration to be used for .NET solution or project
         */
        configuration?: string;
      }
    | {
        /**
         * The name of a platform to be used for .NET solution or project
         */
        platform?: string;
      }
    | {
        /**
         * Semicolon-separated list of target framework monikers (TFM) to be analyzed (https://learn.microsoft.com/en-us/dotnet/standard/frameworks)
         */
        frameworks?: string;
      };
  cpp?: Cpp;
  /**
   * The JDK to use for the project
   */
  projectJDK?: string;
  php?: Php;
  /**
   * Disable sanity checks for the project
   */
  disableSanityInspections?: boolean;
  /**
   * The strategy to apply fixes
   */
  fixesStrategy?: 'none' | 'cleanup' | 'apply';
  /**
   * Whether to run a curated set of promo inspections
   */
  runPromoInspections?: boolean;
  /**
   * Whether to include absent issues in the baseline calculation
   */
  includeAbsent?: boolean;
  /**
   * Maximum amount of internal errors to collect in the report
   */
  maxRuntimeNotifications?: number;
  /**
   * Whether to fail the run when any internal error was encountered. In that case, the program returns exit code 70
   */
  failOnErrorNotification?: boolean;
  failureConditions?: FailureConditions;
  /**
   * Which dependencies to exclude from the generated SBOM report
   */
  dependencySbomExclude?: DependencyIgnore[];
  /**
   * Which submodules to include. Omitting this key will include all submodules
   *
   * @minItems 0
   */
  modulesToAnalyze?: {
    name?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Whether to include dev dependencies in the analysis
   */
  analyzeDevDependencies?: boolean;
  /**
   * Using package-search service for fetching license data for dependencies (only for jvm libraries)
   */
  enablePackageSearch?: boolean;
  /**
   * Show license problems like other inspections
   */
  raiseLicenseProblems?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The run scenario. 'default' by default
 */
export interface Script {
  /**
   * The name of the script
   */
  name?: 'default' | 'php-migration' | 'local-changes' | 'teamcity-changes' | 'migrate-classes';
  /**
   * The parameters to pass to the script
   */
  parameters?: {
    [k: string]: unknown | undefined;
  };
}
/**
 * The inspections or paths to exclude from analysis
 */
export interface Exclude {
  /**
   * The ID of the inspection to exclude, or 'All'
   */
  name: string;
  /**
   * The path in which to disable the inspection, relative to the project root. Omitting the paths disables the inspection everywhere
   *
   * @minItems 0
   */
  paths?: string[];
}
/**
 * The inspections to run in addition to those from the profile
 */
export interface Include {
  /**
   * The ID of the inspection to be added
   */
  name: string;
  /**
   * The path in which to enable the inspection, relative to the project root. Omitting the paths enables the inspection everywhere
   *
   * @minItems 0
   */
  paths?: string[];
}
/**
 * A license rule to apply for license compatibility checks in Qodana
 */
export interface LicenseRule {
  /**
   * The list of project license SPDX IDs
   *
   * @minItems 0
   */
  keys?: string[];
  /**
   * The list of allowed dependency licenses for the project
   *
   * @minItems 0
   */
  allowed?: string[];
  /**
   * The list of prohibited dependency licenses for the project
   *
   * @minItems 0
   */
  prohibited?: string[];
}
/**
 * A dependency to ignore for license checks in Qodana
 */
export interface DependencyIgnore {
  /**
   * The name of a dependency to ignore
   */
  name?: string;
}
/**
 * A dependency metadata to override for license checks in Qodana
 */
export interface DependencyOverride {
  /**
   * The dependency name
   */
  name: string;
  /**
   * The dependency version
   */
  version: string;
  /**
   * The dependency homepage
   */
  url?: string;
  /**
   * The dependency licenses
   *
   * @minItems 0
   */
  licenses: License[];
}
/**
 * A license to apply for license compatibility checks in Qodana
 */
export interface License {
  /**
   * The SPDX ID of the license
   */
  key?: string;
  /**
   * The license homepage
   */
  url?: string;
}
/**
 * Specifies the license of a dependency or project
 */
export interface LicenseOverride {
  /**
   * SPDX id of this license
   */
  key?: string;
  /**
   * Homepage of this license
   */
  url?: string;
  [k: string]: unknown | undefined;
}
/**
 * A dependency to add to license checks to Qodana
 */
export interface CustomDependency {
  /**
   * The dependency name
   */
  name: string;
  /**
   * The dependency version
   */
  version: string;
  /**
   * The dependency homepage
   */
  url?: string;
  /**
   * The dependency licenses
   *
   * @minItems 0
   */
  licenses: License[];
}
/**
 * A plugin to install for Qodana analysis
 */
export interface Plugin {
  /**
   * The plugin ID to install (can be copied from the plugin page on the JetBrains Marketplace)
   */
  id?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for Qodana for C/C++
 */
export interface Cpp {
  /**
   * Name of a specific CMake preset to use during analysis
   */
  cmakePreset?: string;
}
/**
 * The configuration for PHP projects
 */
export interface Php {
  /**
   * The PHP version to use for the code analysis
   */
  version?: string;
}
/**
 * Configures individual failure conditions. Absent properties will not be checked
 */
export interface FailureConditions {
  severityThresholds?: SeverityThresholds;
  testCoverageThresholds?: CoverageThresholds;
  [k: string]: unknown | undefined;
}
/**
 * Configures maximum thresholds for different problem severities. Absent properties are not checked. If a baseline is given, only new results are counted
 */
export interface SeverityThresholds {
  /**
   * The run fails if the total amount of results exceeds this number.
   */
  any?: number;
  /**
   * The run fails if the amount results with severity CRITICAL exceeds this number.
   */
  critical?: number;
  /**
   * The run fails if the amount results with severity HIGH exceeds this number.
   */
  high?: number;
  /**
   * The run fails if the amount results with severity MODERATE exceeds this number.
   */
  moderate?: number;
  /**
   * The run fails if the amount results with severity LOW exceeds this number.
   */
  low?: number;
  /**
   * The run fails if the amount results with severity INFO exceeds this number.
   */
  info?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configures minimum thresholds for test coverage metrics. Absent properties are not checked
 */
export interface CoverageThresholds {
  /**
   * The run fails if the percentage of total lines covered is lower than this number.
   */
  total?: number;
  /**
   * The run fails if the percentage of fresh lines covered is lower than this number
   */
  fresh?: number;
  [k: string]: unknown | undefined;
}
