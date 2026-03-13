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
export type NETScanOptions1 = {
  ProjectType?: TypeOfApplication1;
  SolutionFile?: SolutionFile1;
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod1;
  DownloadDependencies?: DownloadDependencies1;
  CustomParameters?: CustomParameters1;
} | null;
export type TypeOfApplication1 = 'None' | 'Solution' | 'WebSite';
/**
 * Path to a solution or project
 */
export type SolutionFile1 = null | string;
export type UsePublicAnalysisMethod1 = null | boolean;
export type DownloadDependencies1 = null | boolean;
/**
 * Custom DotNet kernel startup parameters
 */
export type CustomParameters1 = null | string;
export type GoScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod2;
  CustomParameters?: CustomParameters2;
} | null;
export type UsePublicAnalysisMethod2 = null | boolean;
/**
 * Custom Go kernel startup parameters
 */
export type CustomParameters2 = null | string;
export type JavaScanOptions = {
  Parameters?: JVMStartOptions;
  UnpackUserPackages?: UnpackCustomJARFiles;
  UserPackagePrefixes?: PrefixesOfCustomPackages;
  Version?: JDKVersion;
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod3;
  DownloadDependencies?: DownloadDependencies2;
  CustomParameters?: CustomParameters3;
} | null;
export type JVMStartOptions = null | string;
export type UnpackCustomJARFiles = boolean;
export type PrefixesOfCustomPackages = null | string;
export type JDKVersion = '8' | '11' | '17';
export type UsePublicAnalysisMethod3 = null | boolean;
export type DownloadDependencies2 = null | boolean;
/**
 * Custom Java kernel startup parameters
 */
export type CustomParameters3 = null | string;
export type JavaScriptScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod4;
  UseTaintAnalysis?: UseTaintAnalysisMethod;
  UseJsaAnalysis?: UseJsaCoreForAnalysis;
  DownloadDependencies?: DownloadDependencies3;
  CustomParameters?: CustomParameters4;
} | null;
export type UsePublicAnalysisMethod4 = null | boolean;
export type UseTaintAnalysisMethod = null | boolean;
export type UseJsaCoreForAnalysis = null | boolean;
export type DownloadDependencies3 = null | boolean;
/**
 * Custom JavaScript kernel startup parameters
 */
export type CustomParameters4 = null | string;
export type PhpScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod5;
  DownloadDependencies?: DownloadDependencies4;
  CustomParameters?: CustomParameters5;
} | null;
export type UsePublicAnalysisMethod5 = null | boolean;
export type DownloadDependencies4 = null | boolean;
/**
 * Custom Php kernel startup parameters
 */
export type CustomParameters5 = null | string;
export type PmTaintScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod6;
  CustomParameters?: CustomParameters6;
} | null;
export type UsePublicAnalysisMethod6 = null | boolean;
/**
 * Custom PmTaint kernel startup parameters
 */
export type CustomParameters6 = null | string;
export type PythonScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod7;
  DownloadDependencies?: DownloadDependencies5;
  CustomParameters?: CustomParameters7;
} | null;
export type UsePublicAnalysisMethod7 = null | boolean;
export type DownloadDependencies5 = null | boolean;
/**
 * Custom Python kernel startup parameters
 */
export type CustomParameters7 = null | string;
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
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod8;
  CustomParameters?: CustomParameters8;
} | null;
export type UsePublicAnalysisMethod8 = null | boolean;
/**
 * Custom Ruby kernel startup parameters
 */
export type CustomParameters8 = null | string;
export type ActiveScanningLanguages = (
  | 'Java'
  | 'CSharp (Windows, Linux)'
  | 'CSharp (Windows)'
  | 'VB'
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
)[];
export type ProjectName = string;
export type EnabledModules = ('Configuration' | 'Components' | 'BlackBox' | 'PatternMatching' | 'StaticCodeAnalysis')[];
/**
 * Exclude from scanning the files from the .gitignore file
 */
export type SkipGitignoreFiles = boolean;
/**
 * Enable SAST Analysis rules
 */
export type UseSASTRules = boolean;
/**
 * Enable custom PM rules
 */
export type UseCustomPMRules = boolean;
/**
 * Check for compliance with the security policy
 */
export type UseSecurityPolicies = boolean;

/**
 * Settings for project analysis by the Application Inspector
 */
export interface Aiproj {
  $schema?: string;
  Version?: '1.0' | '1.1' | '1.2' | '1.3';
  BlackBoxSettings?: BlackBoxAndAutocheckOptions;
  WindowsDotNetSettings?: NETScanOptions;
  DotNetSettings?: NETScanOptions1;
  GoSettings?: GoScanOptions;
  JavaSettings?: JavaScanOptions;
  JavaScriptSettings?: JavaScriptScanOptions;
  PhpSettings?: PhpScanOptions;
  PmTaintSettings?: PmTaintScanOptions;
  PythonSettings?: PythonScanOptions;
  MailingProjectSettings?: MailSettings;
  RubySettings?: RubyScanOptions;
  ProgrammingLanguages: ActiveScanningLanguages;
  ProjectName: ProjectName;
  ScanModules: EnabledModules;
  SkipGitIgnoreFiles?: SkipGitignoreFiles;
  UseSastRules?: UseSASTRules;
  UseCustomPmRules?: UseCustomPMRules;
  UseSecurityPolicies?: UseSecurityPolicies;
}
