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
    {
        Cookie?: CookieOptions;
        Form?: Form;
        Http?: Http;
        Type?: TypeOfAuthentication;
      } | null
  );
/**
 * Cookie authentication options
 */
export type CookieOptions = {
  Cookie: Cookie;
  ValidationAddress: ValidationAddress;
  ValidationTemplate: ValidationTemplate;
} | null;
export type Cookie = string;
/**
 * Verification address
 */
export type ValidationAddress = string;
/**
 * String to search for
 */
export type ValidationTemplate = string;
/**
 * Form-based authentication options
 */
export type Form = (
  | {
      FormDetection: 'Auto';
      FormAddress: string;
      FormXPath?: null | string;
      Login: string;
      LoginKey?: null | string;
      Password: string;
      PasswordKey?: null | string;
      ValidationTemplate: string;
      [k: string]: unknown | undefined;
    }
  | {
      FormDetection: 'Manual';
      FormAddress: string;
      FormXPath: string;
      Login: string;
      LoginKey: string;
      Password: string;
      PasswordKey: string;
      ValidationTemplate: string;
      [k: string]: unknown | undefined;
    }
) &
  (
    {
        FormDetection?: Detection;
        FormAddress?: SignInFormURL;
        FormXPath?: SignInFormXPath;
        Login?: User;
        LoginKey?: UserIdentifier;
        Password?: Password;
        PasswordKey?: PasswordIdentifier;
        ValidationTemplate?: ValidationTemplate1;
      } | null
  );
/**
 * Type of form authentication detection
 */
export type Detection = 'Auto' | 'Manual';
/**
 * HTTP Basic authentication options
 */
export type Http = {
  Login: User1;
  Password: Password1;
  ValidationAddress: ValidationAddress;
} | null;
export type User1 = string;
export type Password1 = string;
export type TypeOfAuthentication = 'Form' | 'Http' | 'RawCookie' | 'None';
export type SearchMode = 'None' | 'Fast' | 'Full' | 'Normal';
/**
 * Proxy server settings
 */
export type ProxySettings = {
  Enabled?: Enabled;
  Host?: Address2;
  Login?: User2;
  Password?: Password2;
  Port?: Port;
  Type?: TypeOfProxy;
} | null;
export type Enabled = boolean;
export type Address2 = null | string;
export type User2 = null | string;
export type Password2 = null | string;
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
export type JDKVersion = 'v1_8' | 'v1_11';
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
    {
        Enabled?: SendAReportByEmailAfterScanning;
        MailProfileName?: EmailProfileName;
        EmailRecipients?: ListOfRecipients;
      } | null
  );
export type SendAReportByEmailAfterScanning = boolean;
export type EmailProfileName = null | string;
export type ListOfRecipients = string[];
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
  'Configuration' | 'Components' | 'BlackBox' | 'DataFlowAnalysis' | 'PatternMatching' | 'VulnerableSourceCode'
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
  Version?: '1.0' | '1.1';
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
export interface SignInFormURL {
  [k: string]: unknown | undefined;
}
export interface SignInFormXPath {
  [k: string]: unknown | undefined;
}
export interface User {
  [k: string]: unknown | undefined;
}
export interface UserIdentifier {
  [k: string]: unknown | undefined;
}
export interface Password {
  [k: string]: unknown | undefined;
}
export interface PasswordIdentifier {
  [k: string]: unknown | undefined;
}
/**
 * String to search for
 */
export interface ValidationTemplate1 {
  [k: string]: unknown | undefined;
}
