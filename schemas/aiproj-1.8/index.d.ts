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
      Address?: Address1;
      Format?: AddressFormat1;
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * Address value
 */
export type Address1 = string;
/**
 * Type of address
 */
export type AddressFormat1 = 'Wildcard' | 'ExactMatch' | 'RegExp';
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
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod1;
  CustomParameters?: CustomParameters1;
  DslRulesRelativePath?: DslRules1;
} | null;
export type UsePublicAnalysisMethod1 = null | boolean;
/**
 * Custom Go kernel startup parameters
 */
export type CustomParameters1 = null | string;
/**
 * Path to the dsl rules directory
 */
export type DslRules1 = null | string;
export type JavaScanOptions = {
  Parameters?: JVMStartOptions;
  UnpackUserPackages?: UnpackCustomJARFiles;
  UserPackagePrefixes?: PrefixesOfCustomPackages;
  Version?: JDKVersion;
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod2;
  DownloadDependencies?: DownloadDependencies1;
  DependenciesPath?: DependenciesPath;
  CustomParameters?: CustomParameters2;
  DslRulesRelativePath?: DslRules2;
} | null;
export type JVMStartOptions = null | string;
export type UnpackCustomJARFiles = boolean;
export type PrefixesOfCustomPackages = null | string;
export type JDKVersion = '8' | '11' | '17' | '21';
export type UsePublicAnalysisMethod2 = null | boolean;
export type DownloadDependencies1 = null | boolean;
/**
 * Path that the Java kernel will use as a classPath
 */
export type DependenciesPath = null | string;
/**
 * Custom Java kernel startup parameters
 */
export type CustomParameters2 = null | string;
/**
 * Path to the dsl rules directory
 */
export type DslRules2 = null | string;
export type JavaScriptScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod3;
  UseTaintAnalysis?: UseTaintAnalysisMethod;
  UseJsaAnalysis?: UseJsaCoreForAnalysis;
  DownloadDependencies?: DownloadDependencies2;
  CustomParameters?: CustomParameters3;
  DslRulesRelativePath?: DslRules3;
} | null;
export type UsePublicAnalysisMethod3 = null | boolean;
export type UseTaintAnalysisMethod = null | boolean;
export type UseJsaCoreForAnalysis = null | boolean;
export type DownloadDependencies2 = null | boolean;
/**
 * Custom JavaScript kernel startup parameters
 */
export type CustomParameters3 = null | string;
/**
 * Path to the dsl rules directory
 */
export type DslRules3 = null | string;
export type PhpScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod4;
  DownloadDependencies?: DownloadDependencies3;
  CustomParameters?: CustomParameters4;
  DslRulesRelativePath?: DslRules4;
} | null;
export type UsePublicAnalysisMethod4 = null | boolean;
export type DownloadDependencies3 = null | boolean;
/**
 * Custom Php kernel startup parameters
 */
export type CustomParameters4 = null | string;
/**
 * Path to the dsl rules directory
 */
export type DslRules4 = null | string;
export type PmTaintScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod5;
  PMGroups?: ListOfEnabledPMGroupNames;
  CustomParameters?: CustomParameters5;
} | null;
export type UsePublicAnalysisMethod5 = null | boolean;
export type ListOfEnabledPMGroupNames = string[];
/**
 * Custom PmTaint kernel startup parameters
 */
export type CustomParameters5 = null | string;
export type PygrepScanOptions = {
  CustomParameters?: CustomParameters6;
  RulesDirPath?: CustomRules;
} | null;
/**
 * Custom Pygrep kernel startup parameters
 */
export type CustomParameters6 = null | string;
/**
 * Path to the custom rules directory
 */
export type CustomRules = null | string;
export type PythonScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod6;
  DownloadDependencies?: DownloadDependencies4;
  DependenciesPath?: DependenciesPath1;
  CustomParameters?: CustomParameters7;
  DslRulesRelativePath?: DslRules5;
} | null;
export type UsePublicAnalysisMethod6 = null | boolean;
export type DownloadDependencies4 = null | boolean;
/**
 * Path to venv or path to directory with dependencies if venv was not used to restore them
 */
export type DependenciesPath1 = null | string;
/**
 * Custom Python kernel startup parameters
 */
export type CustomParameters7 = null | string;
/**
 * Path to the dsl rules directory
 */
export type DslRules5 = null | string;
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
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod7;
  CustomParameters?: CustomParameters8;
  DslRulesRelativePath?: DslRules6;
} | null;
export type UsePublicAnalysisMethod7 = null | boolean;
/**
 * Custom Ruby kernel startup parameters
 */
export type CustomParameters8 = null | string;
/**
 * Path to the dsl rules directory
 */
export type DslRules6 = null | string;
export type SCAScanOptions = {
  CustomParameters?: CustomParameters9;
  BuildDependenciesGraph?: BuildBependenciesGraph;
} | null;
/**
 * Custom SCA kernel startup parameters
 */
export type CustomParameters9 = null | string;
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
