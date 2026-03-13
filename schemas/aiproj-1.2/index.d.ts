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
/**
 * Custom kernel startup parameters
 */
export type CustomParameters = null | string;
export type NETScanOptions = {
  ProjectType?: TypeOfApplication;
  SolutionFile?: SolutionFile;
} | null;
export type TypeOfApplication = 'None' | 'Solution' | 'WebSite';
/**
 * Path to a solution or project
 */
export type SolutionFile = null | string;
export type JavaScanOptions = {
  Parameters?: JVMStartOptions;
  UnpackUserPackages?: UnpackCustomJARFiles;
  UserPackagePrefixes?: PrefixesOfCustomPackages;
  Version?: JDKVersion;
} | null;
export type JVMStartOptions = null | string;
export type UnpackCustomJARFiles = boolean;
export type PrefixesOfCustomPackages = null | string;
export type JDKVersion = '8' | '11' | '17';
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
export type ActiveScanningLanguage =
  | 'Java'
  | 'CSharp'
  | 'VB'
  | 'Php'
  | 'JavaScript'
  | 'Python'
  | 'ObjectiveC'
  | 'Swift'
  | 'CAndCPlusPlus'
  | 'Go'
  | 'Kotlin'
  | 'Sql';
export type ProjectName = string;
export type EnabledModules = (
  | 'Configuration'
  | 'Components'
  | 'BlackBox'
  | 'DataFlowAnalysis'
  | 'PatternMatching'
  | 'VulnerableSourceCode'
)[];
/**
 * Exclude from scanning the files from the .gitignore file
 */
export type SkipGitignoreFiles = boolean;
/**
 * Search from available public and protected methods
 */
export type UsePublicAnalysisMethod = boolean;
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
export type DownloadDependencies = null | boolean;

/**
 * Settings for project analysis by the Application Inspector
 */
export interface Aiproj {
  $schema?: string;
  Version?: '1.0' | '1.1' | '1.2';
  BlackBoxSettings?: BlackBoxAndAutocheckOptions;
  CustomParameters?: CustomParameters;
  DotNetSettings?: NETScanOptions;
  JavaSettings?: JavaScanOptions;
  MailingProjectSettings?: MailSettings;
  ProgrammingLanguage: ActiveScanningLanguage;
  ProjectName: ProjectName;
  ScanModules: EnabledModules;
  SkipGitIgnoreFiles?: SkipGitignoreFiles;
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  UseSastRules?: UseSASTRules;
  UseCustomPmRules?: UseCustomPMRules;
  UseSecurityPolicies?: UseSecurityPolicies;
  DownloadDependencies?: DownloadDependencies;
}
