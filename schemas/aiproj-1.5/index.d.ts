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
export type GoScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  CustomParameters?: CustomParameters;
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
} | null;
export type JVMStartOptions = null | string;
export type UnpackCustomJARFiles = boolean;
export type PrefixesOfCustomPackages = null | string;
export type JDKVersion = '8' | '11' | '17';
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
} | null;
export type UseTaintAnalysisMethod = null | boolean;
export type UseJsaCoreForAnalysis = null | boolean;
export type PhpScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  DownloadDependencies?: DownloadDependencies;
  CustomParameters?: CustomParameters;
} | null;
export type PmTaintScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  CustomParameters?: CustomParameters;
} | null;
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
    {
        Enabled?: SendAReportByEmailAfterScanning;
        MailProfileName?: EmailProfileName;
        EmailRecipients?: ListOfRecipients;
      } | null
  );
export type SendAReportByEmailAfterScanning = boolean;
export type EmailProfileName = null | string;
export type ListOfRecipients = string[];
export type RubyScanOptions = {
  UsePublicAnalysisMethod?: UsePublicAnalysisMethod;
  CustomParameters?: CustomParameters;
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
  | 'Solidity'
)[];
export type ProjectName = string;
export type EnabledModules = (
  'Configuration' | 'Components' | 'BlackBox' | 'PatternMatching' | 'StaticCodeAnalysis' | 'SoftwareCompositionAnalysis'
)[];
export type ProjectTags =
  | {
      Type?: 'Repo' | 'Branch';
      Value?: string;
    }[]
  | null;
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
  Version?: '1.0' | '1.1' | '1.2' | '1.3' | '1.4' | '1.5';
  BlackBoxSettings?: BlackBoxAndAutocheckOptions;
  WindowsDotNetSettings?: NETScanOptions;
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
  ScanModules: EnabledModules;
  Tags?: ProjectTags;
  SkipGitIgnoreFiles?: SkipGitignoreFiles;
  UseSastRules?: UseSASTRules;
  UseCustomPmRules?: UseCustomPMRules;
  UseSecurityPolicies?: UseSecurityPolicies;
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
