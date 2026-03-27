/* eslint-disable */

export type BlackBoxAndAutocheckOptions = {
  AdditionalHttpHeaders?: AdditionalHTTPHeaders;
  WhiteListedAddresses?: WhitelistedAddresses;
  BlackListedAddresses?: BlacklistedAddresses;
  Authentication?: AuthenticationOptions;
  Level?: SearchMode;
  ProxySettings?: ProxySettings;
  RunAutocheckAfterScan?: RunAutocheck;
  ScanScope?: ScanScope;
  Site?: WebsiteAddress;
  SslCheck?: CheckSslConnection;
} | null;
/**
 * Dictionary of additional HTTP headers
 */
export type AdditionalHTTPHeaders =
  | {
      Key?: Header;
      Value?: Value;
      [k: string]: unknown | undefined;
    }[]
  | null;
export type Header = string;
export type Value = string;
/**
 * Addresses, that was added in white list
 */
export type WhitelistedAddresses =
  | {
      Address?: Address;
      Format?: AddressFormat;
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * Address value
 */
export type Address = string;
/**
 * Type of address
 */
export type AddressFormat = 'Wildcard' | 'ExactMatch' | 'RegExp';
/**
 * Addresses, that was added in black list
 */
export type BlacklistedAddresses =
  | {
      Address?: Address;
      Format?: AddressFormat;
      [k: string]: unknown | undefined;
    }[]
  | null;
export type AuthenticationOptions = (
  | {
      Type: 'RawCookie';
      Cookie: {
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      Type: 'Form';
      Form: {
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      Type: 'Http';
      Http: {
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      Type: 'None';
      [k: string]: unknown | undefined;
    }
  | null
) &
  (
    | (
        | {
            Type: 'RawCookie';
            Cookie: {
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          }
        | {
            Type: 'Form';
            Form: {
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          }
        | {
            Type: 'Http';
            Http: {
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          }
        | {
            Type: 'None';
            [k: string]: unknown | undefined;
          }
        | null
      )
    | (null &
        (
          | {
              Type: 'RawCookie';
              Cookie: {
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | {
              Type: 'Form';
              Form: {
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | {
              Type: 'Http';
              Http: {
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | {
              Type: 'None';
              [k: string]: unknown | undefined;
            }
          | null
        ))
  );
export type SearchMode = 'None' | 'Fast' | 'Full' | 'Normal';
/**
 * Proxy server settings
 */
export type ProxySettings = {
  Enabled?: Enabled;
  Host?: Address2;
  Login?: User;
  Password?: Password;
  Port?: Port;
  Type?: TypeOfProxy;
} | null;
export type Enabled = boolean;
export type Address2 = null | string;
export type User = null | string;
export type Password = null | string;
export type Port = number;
export type TypeOfProxy = 'Http' | 'Socks4' | 'Socks5';
/**
 * Autocheck vulnerabilities after scanning
 */
export type RunAutocheck = boolean;
export type ScanScope = 'Domain' | 'Folder' | 'Path';
export type WebsiteAddress = string;
export type CheckSslConnection = boolean;
export type NETScanOptions = {
  ProjectType?: TypeOfApplication;
  SolutionFile?: SolutionFile;
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  DownloadDependencies?: DownloadDependencies;
  CustomParameters?: CustomParameters;
  DslRulesRelativePath?: DslRules;
} | null;
export type TypeOfApplication = 'None' | 'Solution' | 'WebSite';
/**
 * Path to a solution or project
 */
export type SolutionFile = null | string;
export type UsePublicAnalysisMethod = null | boolean;
export type DownloadDependencies = null | boolean;
/**
 * Custom DotNet kernel startup parameters
 */
export type CustomParameters = null | string;
/**
 * Path to the dsl rules directory
 */
export type DslRules = null | string;
export type GoScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  CustomParameters?: CustomParameters;
  DslRulesRelativePath?: DslRules;
} | null;
export type JavaScanOptions = {
  Parameters?: JVMStartOptions;
  UnpackUserPackages?: UnpackCustomJARFiles;
  UserPackagePrefixes?: PrefixesOfCustomPackages;
  Version?: JDKVersion;
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  DownloadDependencies?: DownloadDependencies;
  DependenciesPath?: DependenciesPath;
  CustomParameters?: CustomParameters;
  DslRulesRelativePath?: DslRules;
} | null;
export type JVMStartOptions = null | string;
export type UnpackCustomJARFiles = boolean;
export type PrefixesOfCustomPackages = null | string;
export type JDKVersion = '8' | '11' | '17' | '21';
/**
 * Path that the Java kernel will use as a classPath
 */
export type DependenciesPath = null | string;
export type JavaScriptScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  UseTaintAnalysis?: UseTaintAnalysisMethod;
  UseJsaAnalysis?: UseJsaCoreForAnalysis;
  DownloadDependencies?: DownloadDependencies;
  CustomParameters?: CustomParameters;
  DslRulesRelativePath?: DslRules;
} | null;
export type UseTaintAnalysisMethod = null | boolean;
export type UseJsaCoreForAnalysis = null | boolean;
export type PhpScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  DownloadDependencies?: DownloadDependencies;
  CustomParameters?: CustomParameters;
  DslRulesRelativePath?: DslRules;
} | null;
export type PmTaintScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  PMGroups?: ListOfEnabledPMGroupNames;
  CustomParameters?: CustomParameters;
} | null;
export type ListOfEnabledPMGroupNames = string[];
export type PygrepScanOptions = {
  CustomParameters?: CustomParameters;
  RulesDirPath?: CustomRules;
} | null;
/**
 * Path to the custom rules directory
 */
export type CustomRules = null | string;
export type PythonScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  DownloadDependencies?: DownloadDependencies;
  DependenciesPath?: DependenciesPath;
  CustomParameters?: CustomParameters;
  DslRulesRelativePath?: DslRules;
} | null;
/**
 * Report mailing options
 */
export type MailSettings = (
  | {
      Enabled: true;
      MailProfileName: string;
      /**
       * @minItems 1
       * @maxItems 10
       */
      EmailRecipients:
        | [unknown]
        | [unknown, unknown]
        | [unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
      [k: string]: unknown | undefined;
    }
  | {
      Enabled: false;
      MailProfileName?: null | string;
      /**
       * @minItems 0
       * @maxItems 10
       */
      EmailRecipients?:
        | []
        | [unknown]
        | [unknown, unknown]
        | [unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
        | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
      [k: string]: unknown | undefined;
    }
) &
  (
    | (
        | {
            Enabled: true;
            MailProfileName: string;
            /**
             * @minItems 1
             * @maxItems 10
             */
            EmailRecipients:
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
            [k: string]: unknown | undefined;
          }
        | {
            Enabled: false;
            MailProfileName?: null | string;
            /**
             * @minItems 0
             * @maxItems 10
             */
            EmailRecipients?:
              | []
              | [unknown]
              | [unknown, unknown]
              | [unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
              | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
            [k: string]: unknown | undefined;
          }
      )
    | (null &
        (
          | {
              Enabled: true;
              MailProfileName: string;
              /**
               * @minItems 1
               * @maxItems 10
               */
              EmailRecipients:
                | [unknown]
                | [unknown, unknown]
                | [unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
              [k: string]: unknown | undefined;
            }
          | {
              Enabled: false;
              MailProfileName?: null | string;
              /**
               * @minItems 0
               * @maxItems 10
               */
              EmailRecipients?:
                | []
                | [unknown]
                | [unknown, unknown]
                | [unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
                | [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
              [k: string]: unknown | undefined;
            }
        ))
  );
export type RubyScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  CustomParameters?: CustomParameters;
  DslRulesRelativePath?: DslRules;
} | null;
export type SCAScanOptions = {
  CustomParameters?: CustomParameters;
  BuildDependenciesGraph?: BuildBependenciesGraph;
} | null;
export type BuildBependenciesGraph = null | boolean;
export type ActiveScanningLanguages = (
  | 'Java'
  | 'CSharp (Windows, Linux)'
  | 'CSharp (Windows)'
  | 'Php'
  | 'JavaScript'
  | 'Python'
  | 'ObjectiveC'
  | 'Swift'
  | 'CAndCPlusPlus'
  | 'Go'
  | 'Kotlin'
  | 'Sql'
  | 'Ruby'
  | 'Solidity'
  | 'Scala'
)[];
export type ProjectName = string;
export type BranchName = string | null;
export type EnabledModules = (
  | 'Configuration'
  | 'Components'
  | 'BlackBox'
  | 'PatternMatching'
  | 'StaticCodeAnalysis'
  | 'SoftwareCompositionAnalysis'
)[];
/**
 * Exclude from scanning the files from the .gitignore file
 */
export type SkipGitignoreFiles = boolean;
/**
 * Apply all PM rules
 */
export type ApplyAllPMRules = boolean;
/**
 * Check for compliance with the security policy
 */
export type UseSecurityPolicies = boolean;

/**
 * Settings for project analysis by the Application Inspector
 */
export interface Aiproj {
  $schema?: string;
  Version?: '1.0' | '1.1' | '1.2' | '1.3' | '1.4' | '1.5' | '1.6' | '1.7' | '1.8';
  BlackBoxSettings?: BlackBoxAndAutocheckOptions;
  DotNetSettings?: NETScanOptions;
  GoSettings?: GoScanOptions;
  JavaSettings?: JavaScanOptions;
  JavaScriptSettings?: JavaScriptScanOptions;
  PhpSettings?: PhpScanOptions;
  PmTaintSettings?: PmTaintScanOptions;
  PygrepSettings?: PygrepScanOptions;
  PythonSettings?: PythonScanOptions;
  MailingProjectSettings?: MailSettings;
  RubySettings?: RubyScanOptions;
  ScaSettings?: SCAScanOptions;
  ProgrammingLanguages: ActiveScanningLanguages;
  ProjectName: ProjectName;
  BranchName?: BranchName;
  ScanModules: EnabledModules;
  SkipGitIgnoreFiles?: SkipGitignoreFiles;
  ApplyAllPMRules?: ApplyAllPMRules;
  UseSecurityPolicies?: UseSecurityPolicies;
}
