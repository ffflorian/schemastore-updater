/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The protocols enabled on the endpoint.
 */
export type Protocols = "None" | "Http1" | "Http2" | "Http1AndHttp2" | "Http3" | "Http1AndHttp2AndHttp3";
/**
 * Specifies allowable SSL protocols. Defaults to 'None' which allows the operating system to choose the best protocol to use, and to block protocols that are not secure. Unless your app has a specific reason not to, you should use this default. Available in .NET 5 and later.
 */
export type SslProtocols = ("None" | "Tls" | "Tls11" | "Tls12" | "Tls13")[];
/**
 * Specifies the client certificate requirements for a HTTPS connection. Defaults to 'NoCertificate'. Available in .NET 5 and later.
 */
export type ClientCertificateMode = "NoCertificate" | "AllowCertificate" | "RequireCertificate";
/**
 * Log level threshold.
 */
export type LogLevelThreshold =
  | ("Trace" | "Debug" | "Information" | "Warning" | "Error" | "Critical" | "None")
  | undefined;
/**
 * ASP.NET Core host filtering middleware configuration. Allowed hosts is a semicolon-delimited list of host names without port numbers. Requests without a matching host name will be refused. Host names may be prefixed with a '*.' wildcard, or use '*' to allow all hosts.
 */
export type AllowedHosts = string;

export interface JSONSchemaASPNETCoreSAppsettingsJsonFile {
  Kestrel?: Kestrel;
  Logging?: Logging;
  AllowedHosts?: AllowedHosts;
  ConnectionStrings?: ConnectionStrings;
  [k: string]: unknown | undefined;
}
/**
 * ASP.NET Core Kestrel server configuration.
 */
export interface Kestrel {
  /**
   * Endpoints that Kestrel listens to for network requests. Each endpoint has a name specified by its JSON property name.
   */
  Endpoints?: {
    /**
     * Kestrel endpoint configuration.
     */
    [k: string]:
      | {
          /**
           * The scheme, host name, and port the endpoint will listen on. A Url is required.
           */
          Url: string;
          Protocols?: Protocols;
          SslProtocols?: SslProtocols;
          Certificate?: Certificate;
          ClientCertificateMode?: ClientCertificateMode;
          /**
           * Server Name Indication (SNI) configuration. This enables the mapping of client requested host names to certificates and other TLS settings. Wildcard names prefixed with '*.', as well as a top level '*' are supported. Available in .NET 5 and later.
           */
          Sni?: {
            /**
             * Endpoint SNI configuration.
             */
            [k: string]:
              | {
                  Protocols?: Protocols;
                  SslProtocols?: SslProtocols;
                  Certificate?: Certificate;
                  ClientCertificateMode?: ClientCertificateMode;
                  [k: string]: unknown | undefined;
                }
              | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Default configuration applied to all endpoints. Named endpoint specific configuration overrides defaults.
   */
  EndpointDefaults?: {
    Protocols?: Protocols;
    SslProtocols?: SslProtocols;
    ClientCertificateMode?: ClientCertificateMode;
    [k: string]: unknown | undefined;
  };
  /**
   * Certificates that Kestrel uses with HTTPS endpoints. Each certificate has a name specified by its JSON property name. The 'Default' certificate is used by HTTPS endpoints that haven't specified a certificate.
   */
  Certificates?: {
    [k: string]: Certificate;
  };
  [k: string]: unknown | undefined;
}
/**
 * Certificate configuration.
 */
export interface Certificate {
  /**
   * The certificate file path. If a file path is specified then the certificate will be loaded from the file system.
   */
  Path?: string;
  /**
   * The certificate key file path. Available in .NET 5 and later.
   */
  KeyPath?: string;
  /**
   * The certificate password used to access the private key.
   */
  Password?: string;
  /**
   * The certificate subject. If a subject is specified then the certificate will be loaded from the certificate store.
   */
  Subject?: string;
  /**
   * The certificate store name. Defaults to 'My'.
   */
  Store?: string;
  /**
   * The certificate store location. Defaults to 'CurrentUser'.
   */
  Location?: "LocalMachine" | "CurrentUser";
  /**
   * A value indicating whether or not to load certificates that are considered invalid. Defaults to false.
   */
  AllowInvalid?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for Microsoft.Extensions.Logging.
 */
export interface Logging {
  LogLevel?: LogLevel;
  Console?: {
    LogLevel?: LogLevel;
    /**
     * Name of the log message formatter to use. Defaults to 'simple'.
     */
    FormatterName?: string;
    /**
     * Log message formatter options. Additional properties are available on the options depending on the configured formatter. The formatter is specified by FormatterName.
     */
    FormatterOptions?: {
      /**
       * Include scopes when true. Defaults to false.
       */
      IncludeScopes?: boolean;
      /**
       * Format string used to format timestamp in logging messages. Defaults to null.
       */
      TimestampFormat?: string;
      /**
       * Indication whether or not UTC timezone should be used to for timestamps in logging messages. Defaults to false.
       */
      UseUtcTimestamp?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Log level threshold.
     */
    LogToStandardErrorThreshold?: "Trace" | "Debug" | "Information" | "Warning" | "Error" | "Critical" | "None";
    [k: string]: unknown | undefined;
  };
  EventSource?: {
    LogLevel?: LogLevel;
    [k: string]: unknown | undefined;
  };
  Debug?: {
    LogLevel?: LogLevel;
    [k: string]: unknown | undefined;
  };
  EventLog?: {
    LogLevel?: LogLevel;
    [k: string]: unknown | undefined;
  };
  ElmahIo?: {
    LogLevel?: LogLevel;
    [k: string]: unknown | undefined;
  };
  ElmahIoBreadcrumbs?: {
    LogLevel?: LogLevel;
    [k: string]: unknown | undefined;
  };
  /**
   * Logging configuration for a provider. The provider name must match the configuration's JSON property property name.
   */
  [k: string]:
    | {
        LogLevel?: LogLevel;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Log level configurations used when creating logs. Only logs that exceeds its matching log level will be enabled. Each log level configuration has a category specified by its JSON property name. For more information about configuring log levels, see https://docs.microsoft.com/aspnet/core/fundamentals/logging/#configure-logging.
 */
export interface LogLevel {
  [k: string]: LogLevelThreshold | undefined;
}
/**
 * Connection string configuration. Get connection strings with the IConfiguration.GetConnectionString(string) extension method.
 */
export interface ConnectionStrings {
  /**
   * Connection string configuration. Each connection string has a name specified by its JSON property name.
   */
  [k: string]: string | undefined;
}
/**
 * Settings for WebOptimizer.Core
 *
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^WebOptimizer$".
 *
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^webOptimizer$".
 *
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^weboptimizer$".
 */
export interface WebOptimizer {
  /**
   * Determines if the "cache-control" HTTP headers should be set and if conditional GET (304) requests should be supported. This could be helpful to disable while in development mode.
   */
  enableCaching?: boolean;
  /**
   * Determines if `<script>` and `<link>` elements should point to the bundled path or a reference per source file should be created. This is helpful to disable when in development mode.
   */
  enableTagHelperBundling?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Definitions for WebEssentials.AspNetCore.CdnTagHelpers
 *
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^(cdn|Cdn)$".
 */
export interface Cdn {
  /**
   * An absolute URL used as a prefix for static resources
   */
  url?: string;
  /**
   * If true, injects a <link rel='dns-prefetch'> tag that speeds up DNS resolution to the CDN.
   */
  prefetch?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^(pwa|PWA|Pwa)$".
 */
export interface Pwa {
  /**
   * The cache identifier of the service worker (can be any string). Change this property to force the service worker to reload in browsers.
   */
  cacheId?: string;
  /**
   * The route to the page to show when offline.
   */
  offlineRoute?: string;
  /**
   * Determines if a script that registers the service worker should be injected into the bottom of the HTML page.
   */
  registerServiceWorker?: boolean;
  /**
   * Determines if a meta tag that points to the web manifest should be inserted at the end of the head element.
   */
  registerWebmanifest?: boolean;
  /**
   * A comma separated list of routes to pre-cache when service worker installs in the browser.
   */
  routesToPreCache?: string;
  /**
   * Selects one of the predefined service worker types.
   */
  strategy?: "cacheFirst" | "cacheFirstSafe" | "minimal" | "networkFirst";
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^(ElmahIo|Elmahio|elmahIo|elmahio)$".
 */
export interface ElmahIo {
  /**
   * An elmah.io API key with the Messages | Write permission.
   */
  ApiKey: string;
  /**
   * The Id of the elmah.io log to store messages in.
   */
  LogId: string;
  /**
   * An application name to put on all error messages.
   */
  Application?: string;
  /**
   * A list of HTTP status codes (besides 404) to log even though no exception is thrown.
   */
  HandledStatusCodesToLog?: number[];
  /**
   * Include log messages from Microsoft.Extensions.Logging as breadcrumbs.
   */
  TreatLoggingAsBreadcrumbs?: boolean;
  /**
   * The Id of the elmah.io heartbeat to notify.
   */
  HeartbeatId?: string;
  [k: string]: unknown | undefined;
}
/**
 * NLog configuration
 *
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^(nlog|Nlog|NLog)$".
 */
export interface NLog {
  /**
   * Automatically reload the NLog configuration when notified that appsettings.json file has changed.
   */
  autoReload?: boolean;
  /**
   * Throws an exception when there is a config error? If not set, then throwExceptions will be used for this setting.
   */
  throwConfigExceptions?: boolean | null;
  /**
   * Throws an exception when there is an error. For unit testing only and advanced troubleshooting.
   */
  throwExceptions?: boolean;
  /**
   * The minimal log level for the internal logger.
   */
  internalLogLevel?: "Trace" | "Debug" | "Info" | "Warn" | "Error" | "Fatal" | "Off";
  /**
   * Write internal log to the specified filepath
   */
  internalLogFile?: string;
  /**
   * Write internal log to a console
   */
  internalLogToConsole?: boolean & string;
  /**
   * Write internal log to a console with error stream
   */
  internalLogToConsoleError?: boolean & string;
  /**
   * Log events below this threshold are not logged.
   */
  globalThreshold?: "Trace" | "Debug" | "Info" | "Warn" | "Error" | "Fatal" | "Off";
  /**
   * Automatically call `LogFactory.Shutdown` on AppDomain.Unload or AppDomain.ProcessExit
   */
  autoShutdown?: boolean & string;
  /**
   * Load NLog extension packages for additional targets and layouts
   */
  extensions?: {
    /**
     * Assembly Name of the NLog extension package.
     */
    assembly?: string;
    /**
     * Appends prefix to all type-names loaded from the assembly
     */
    prefix?: string;
    /**
     * Absolute filepath to the Assembly-file of the NLog extension package.
     */
    assemblyFile?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Key-value pair of variables
   */
  variables?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: number | string | boolean;
  };
  /**
   * Wrap all defined targets with this custom target wrapper.
   */
  targetDefaultWrapper?: {
    type: string;
    [k: string]: unknown | undefined;
  };
  targets?: {
    /**
     * Wrap all defined targets using AsyncWrapper with OverflowAction=Discard for better performance.
     */
    async?: boolean;
    [k: string]: unknown | undefined;
  };
  rules?:
    | NLogRulesItem[]
    | {
        [k: string]: NLogRulesItem;
      };
  [k: string]: unknown | undefined;
}
/**
 * Redirect LogEvents from matching Logger objects to specified targets
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface NLogRulesItem {
  /**
   * Match Logger objects based on their Logger-name. Can use wildcard characters ('*' or '?').
   */
  logger: string;
  /**
   * Rule identifier to allow rule lookup with Configuration.FindRuleByName and Configuration.RemoveRuleByName.
   */
  ruleName?: string;
  level?: ("Trace" | "Debug" | "Info" | "Warn" | "Error" | "Fatal") | string;
  /**
   * Comma separated list of levels that this rule matches.
   */
  levels?: string;
  minLevel?: ("Trace" | "Debug" | "Info" | "Warn" | "Error" | "Fatal") | string;
  maxLevel?: ("Trace" | "Debug" | "Info" | "Warn" | "Error" | "Fatal") | string;
  finalMinLevel?: ("Trace" | "Debug" | "Info" | "Warn" | "Error" | "Fatal") | string;
  /**
   * Name or names of a target - separated by comma. Remove this property for sending events to the blackhole.
   */
  writeTo?: string;
  /**
   * Ignore further rules if this one matches.
   */
  final?: boolean;
  enabled?: boolean;
  filters?:
    | {
        type: string;
        /**
         * Result action when filter matches logevent.
         */
        action?: "Neutral" | "Log" | "Ignore" | "LogFinal" | "IgnoreFinal";
        [k: string]: unknown | undefined;
      }[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Default action if none of the filters match.
   */
  filterDefaultAction?: "Neutral" | "Log" | "Ignore" | "LogFinal" | "IgnoreFinal";
  [k: string]: unknown | undefined;
}
/**
 * Configuration of Open Source .NET CMS - Umbraco
 *
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^(Umbraco|umbraco)$".
 */
export interface Umbraco {
  CMS: {
    ActiveDirectory?: UmbracoActiveDirectory;
    Content?: UmbracoContent;
    Debug?: UmbracoDebug;
    Examine?: {
      /**
       * Lucene directory factory type
       */
      LuceneDirectoryFactory?: string;
      [k: string]: unknown | undefined;
    };
    ExceptionFilter?: {
      /**
       * Indicating whether the exception filter is disabled
       */
      Disabled?: boolean;
      [k: string]: unknown | undefined;
    };
    Global?: UmbracoGlobal;
    HealthChecks?: UmbracoHealthChecks;
    Hosting?: UmbracoHosting;
    Imaging?: UmbracoImaging;
    KeepAlive?: UmbracoKeepAlive;
    Logging?: {
      /**
       * Maximum age of a log file - https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
       */
      MaxLogAge?: string;
      [k: string]: unknown | undefined;
    };
    ModelsBuilder?: UmbracoModelsBuilder;
    NuCache?: {
      BTreeBlockSize?: number;
      [k: string]: unknown | undefined;
    };
    Plugins?: {
      /**
       * Allowed file extensions (including the period .) that should be accessible from the browser
       */
      BrowsableFileExtensions?: string;
      [k: string]: unknown | undefined;
    };
    RequestHandler?: UmbracoRequestHandler;
    RichTextEditor?: UmbracoRichTextEditor;
    Runtime?: {
      /**
       * Value for the maximum query string length
       */
      MaxQueryStringLength?: number;
      /**
       * Value for the maximum request length
       */
      MaxRequestLength?: number;
      [k: string]: unknown | undefined;
    };
    RuntimeMinification?: UmbracoRuntimeMinification;
    Security?: UmbracoSecurity;
    Tours?: {
      /**
       * Indicating whether back-office tours are enabled
       */
      EnableTours?: boolean;
      [k: string]: unknown | undefined;
    };
    TypeFinder?: {
      /**
       * A CSV string of assemblies that accept load exceptions during type finder operations
       */
      AssembliesAcceptingLoadExceptions?: string;
      [k: string]: unknown | undefined;
    };
    WebRouting?: UmbracoWebRouting;
    Unattended?: UmbracoUnattended;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration of Active Directory for Umbraco CMS
 */
export interface UmbracoActiveDirectory {
  /**
   * Active Directory Domain
   */
  Domain?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoContent {
  /**
   * Collection of file extensions without . that are allowed for upload
   */
  AllowedUploadFiles?: string;
  /**
   * Collection of file extensions without . that are disallowed for upload
   */
  DisallowedUploadFiles?: string;
  Error404Collection?: UmbracoContentErrorPage[];
  Imaging?: {
    /**
     * Imaging autofill following media file upload fields
     */
    AutoFillImageProperties?: {
      Alias?: string;
      ExtensionFieldAlias?: string;
      HeightFieldAlias?: string;
      LengthFieldAlias?: string;
      WidthFieldAlias?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Collection of accepted image file extensions
     */
    ImageFileTypes?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Path to the login screen background image
   */
  LoginBackgroundImage?: string;
  /**
   * Path to the login screen logo image
   */
  LoginLogoImage?: string;
  /**
   * Macro error behaviour
   */
  MacroErrors?: "Inline" | "Silent" | "Throw" | "Content";
  Notifications?: {
    /**
     * Email address used for notifications
     */
    Email?: string;
    /**
     * Whether HTML email notifications should be disabled
     */
    DisableHtmlEmail?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Preview badge mark-up
   */
  PreviewBadge?: string;
  /**
   * URLs should be resolved from text strings
   */
  ResolveUrlsFromTextString?: boolean;
  /**
   * Deprecated property editors should be shown
   */
  ShowDeprecatedPropertyEditors?: boolean;
  [k: string]: unknown | undefined;
}
export interface UmbracoContentErrorPage {
  /**
   * An int of the content
   */
  ContentId?: number;
  /**
   * A guid of the content
   */
  ContentKey?: string;
  /**
   * An XPath query for the content
   */
  ContentXPath?: string;
  /**
   * Content culture
   */
  Culture?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoDebug {
  /**
   * Indicating whether incompleted scopes should be logged
   */
  LogIncompletedScopes?: boolean;
  /**
   * Indicating whether memory dumps on thread abort should be taken
   */
  DumpOnTimeoutThreadAbort?: boolean;
  [k: string]: unknown | undefined;
}
export interface UmbracoGlobal {
  /**
   * CSV string of reserved URLs (must end with a comma)
   */
  ReservedUrls?: string;
  /**
   * CSV string of reserved paths (must end with a comma)
   */
  ReservedPaths?: string;
  /**
   * Duration of timeout https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
   */
  TimeOut?: string;
  /**
   * Default UI language of Umbraco backoffice
   */
  DefaultUILanguage?: string;
  /**
   * Indicating whether to hide the top level node from the path
   */
  HideTopLevelNodeFromPath?: boolean;
  /**
   * Indicating whether HTTPS should be used
   */
  UseHttps?: boolean;
  /**
   * Check for new version. Period in days
   */
  VersionCheckPeriod?: number;
  /**
   * Umbraco back-office path
   */
  UmbracoPath?: string;
  /**
   * Path to Umbraco Icons for backoffice
   */
  IconsPath?: string;
  /**
   * Path to store CSS files used for website built with Umbraco
   */
  UmbracoCssPath?: string;
  /**
   * Path to store media files
   */
  UmbracoMediaPath?: string;
  /**
   * Indicating whether to install the database when it is missing
   */
  InstallMissingDatabase?: boolean;
  /**
   * Indicating whether to disable the election for a single server
   */
  DisableElectionForSingleServer?: boolean;
  /**
   * Path to view when the website built with Umbraco has no content nodes
   */
  NoNodesViewPath?: string;
  DatabaseServerRegistrar?: {
    /**
     * The amount of time to wait between calls to the database on the background thread https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    WaitTimeBetweenCalls?: string;
    /**
     * The time span to wait before considering a server stale, after it has last been accessed https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    StaleServerTimeout?: string;
    [k: string]: unknown | undefined;
  };
  DatabaseServerMessenger?: {
    /**
     * The maximum number of instructions that can be processed at startup; otherwise the server cold-boots (rebuilds its caches)
     */
    MaxProcessingInstructionCount?: number;
    /**
     * The time to keep instructions in the database. Records older than this number will be pruned https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    TimeToRetainInstructions?: string;
    /**
     * The time to wait between each sync operations https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    TimeBetweenSyncOperations?: string;
    /**
     * The time to wait between each prune operations https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    TimeBetweenPruneOperations?: string;
    [k: string]: unknown | undefined;
  };
  Smtp?: {
    /**
     * Email address to use for messages
     */
    From?: string;
    /**
     * SMTP Server hostname
     */
    Host?: string;
    /**
     * SMTP Server Port Number
     */
    Port?: number;
    /**
     * Secure socket options for SMTP server
     */
    SecureSocketOptions?: "None" | "Auto" | "SslOnConnect" | "StartTls" | "StartTlsWhenAvailable";
    /**
     * SMTP pick-up directory path
     */
    PickupDirectoryLocation?: string;
    /**
     * SMTP delivery method
     */
    DeliveryMethod?: "Network" | "SpecifiedPickupDirectory" | "PickupDirectoryFromIis";
    /**
     * SMTP server username
     */
    Username?: string;
    /**
     * SMTP server password
     */
    Password?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface UmbracoHealthChecks {
  DisabledChecks?: UmbracoDisabledHealthChecks[];
  Notification?: {
    /**
     * Indicating whether health check notifications are enabled
     */
    Enabled?: boolean;
    /**
     * The first run time of a healthcheck notification in crontab format
     */
    FirstRunTime?: string;
    /**
     * The period of the healthcheck notifications are run https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    Period?: string;
    /**
     * A collection of health check notification methods that are set by their alias such as 'email'
     */
    NotificationMethods?: {
      [k: string]:
        | {
            /**
             * Indicating whether the health check notification method is enabled
             */
            Enabled?: boolean;
            /**
             * The health check notifications reporting verbosity
             */
            Verbosity?: "Summary" | "Detailed";
            /**
             * Indicating whether the health check notifications should occur on failures only
             */
            FailureOnly?: boolean;
            /**
             * An object of Health Check Notification provider specific settings. For the email notification it uses a setting 'RecipientEmail'
             */
            Settings?: {
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    DisabledChecks?: UmbracoDisabledHealthChecks[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface UmbracoDisabledHealthChecks {
  /**
   * Guid of healthcheck to disable
   */
  Id?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoHosting {
  ApplicationVirtualPath?: string;
  /**
   * Indicating whether umbraco is running in [debug mode]
   */
  Debug?: boolean;
  /**
   * The location of temporary files
   */
  LocalTempStorageLocation?: "Default" | "EnvironmentTemp";
  [k: string]: unknown | undefined;
}
export interface UmbracoImaging {
  Cache?: {
    /**
     * Browser image cache maximum age https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    BrowserMaxAge?: string;
    /**
     * Image cache maximum age https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-timespan-format-strings
     */
    CacheMaxAge?: string;
    /**
     * Length of the cached name
     */
    CachedNameLength?: number;
    /**
     * Location of media cache folder
     */
    CacheFolder?: string;
    [k: string]: unknown | undefined;
  };
  Resize?: {
    /**
     * Value for the maximum resize width
     */
    MaxWidth?: number;
    /**
     * Value for the maximum resize height
     */
    MaxHeight?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface UmbracoKeepAlive {
  /**
   * Indicating whether the keep alive task is disabled
   */
  DisableKeepAliveTask?: boolean;
  /**
   * Keep alive ping URL. {umbracoApplicationUrl} is replaced
   */
  KeepAlivePingUrl?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoModelsBuilder {
  /**
   * ModelsBuilder generation mode
   */
  ModelsMode?: "Nothing" | "InMemoryAuto" | "SourceCodeManual" | "SourceCodeAuto";
  /**
   * Namespace to use when generating strongly typed models
   */
  ModelsNamespace?: string;
  /**
   * Location to generate ModelsBuilder models
   */
  ModelsDirectory?: string;
  /**
   * Indicates the debug level. For internal / development use. Set to greater than zero to enable detailed logging.
   */
  DebugLevel?: number;
  /**
   * Indicates that the directory indicated in ModelsDirectory is allowed to be outside the website root (e.g. ~/../../some/place). Because that can be a potential security risk, it is not allowed by default.
   */
  AcceptUnsafeModelsDirectory?: boolean;
  /**
   * Indicates whether out-of-date models (i.e. after a content type or data type has been modified) should be flagged.
   */
  FlagOutOfDateModels?: boolean;
  [k: string]: unknown | undefined;
}
export interface UmbracoRequestHandler {
  /**
   * Indicating whether to add a trailing slash to URLs
   */
  AddTrailingSlash?: boolean;
  /**
   * Character collection for replacements
   */
  CharCollection?: UmbracoCharCollection[];
  /**
   * Indicating whether to convert URLs to ASCII (valid values: true, try or false)
   */
  ConvertUrlsToAscii?: "try" | "true" | "false";
  [k: string]: unknown | undefined;
}
export interface UmbracoCharCollection {
  Char: string;
  Replacement: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoRichTextEditor {
  /**
   * Commands to add to the TinyMCE Richtext editor
   */
  Commands?: UmbracoRichTextEditorCommands[];
  /**
   * An array of TinyMCE Plugins to load such as 'paste', 'table'
   */
  Plugins?: string;
  /**
   * Custom configuration for TinyMCE and its plugins
   */
  CustomConfig?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A CSV string of valid HTML elements in the richtext editor. Ex: iframe[*],button[class|title]
   */
  ValidElements?: string;
  /**
   * A CSV string of invalid HTML elements in the richtext editor. Ex: font
   */
  InvalidElements?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoRichTextEditorCommands {
  /**
   * Friendly name of Richtext Editor Command
   */
  Name?: string;
  /**
   * Alias of the Richtext Editor Command
   */
  Alias?: string;
  /**
   * Set how the Richtext Editor Command can be used. Such as when a selection is made
   */
  Mode?: "Insert" | "Selection" | "All";
  [k: string]: unknown | undefined;
}
export interface UmbracoRuntimeMinification {
  UseInMemoryCache?: boolean;
  /**
   * Cache buster type to use
   */
  CacheBuster?: "Version" | "AppDomain" | "Timestamp";
  [k: string]: unknown | undefined;
}
export interface UmbracoSecurity {
  /**
   * Indicating whether to allow user password reset
   */
  AllowPasswordReset?: boolean;
  /**
   * Authorization cookie domain
   */
  AuthCookieDomain?: string;
  /**
   * The authorization cookie name
   */
  AuthCookieName?: string;
  /**
   * Indicating whether to hide disabled users in the back-office
   */
  HideDisabledUsersInBackOffice?: boolean;
  /**
   * Indicating whether to keep the user logged in
   */
  KeepUserLoggedIn?: boolean;
  MemberPassword?: UmbracoMemberPassword;
  /**
   * Indicating whether the user's email address is to be considered as their username
   */
  UsernameIsEmail?: boolean;
  UserPassword?: UmbracoUserPassword;
  [k: string]: unknown | undefined;
}
export interface UmbracoMemberPassword {
  RequiredLength?: number;
  RequireNonLetterOrDigit?: boolean;
  RequireDigit?: boolean;
  RequireLowercase?: boolean;
  RequireUppercase?: boolean;
  MaxFailedAccessAttemptsBeforeLockout?: number;
  HashAlgorithmType?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoUserPassword {
  RequiredLength?: number;
  RequireNonLetterOrDigit?: boolean;
  RequireDigit?: boolean;
  RequireLowercase?: boolean;
  RequireUppercase?: boolean;
  MaxFailedAccessAttemptsBeforeLockout?: number;
  HashAlgorithmType?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoWebRouting {
  /**
   * Indicating whether to check if any routed endpoints match a front-end request before the Umbraco dynamic router tries to map the request to an Umbraco content item
   */
  TryMatchingEndpointsForAllPages?: boolean;
  /**
   * Indicating whether IIS custom errors should be skipped
   */
  TrySkipIisCustomErrors?: boolean;
  /**
   * Indicating whether an internal redirect should preserve the template
   */
  InternalRedirectPreservesTemplate?: boolean;
  /**
   * Indicating whether the use of alternative templates are disabled
   */
  DisableAlternativeTemplates?: boolean;
  /**
   * Indicating whether the use of alternative templates should be validated
   */
  ValidateAlternativeTemplates?: boolean;
  /**
   * Indicating whether find content ID by path is disabled
   */
  DisableFindContentByIdPath?: boolean;
  /**
   * Indicating whether redirect URL tracking is disabled
   */
  DisableRedirectUrlTracking?: boolean;
  UrlProviderMode?: "Default" | "Relative" | "Absolute" | "Auto";
  UmbracoApplicationUrl?: string;
  [k: string]: unknown | undefined;
}
export interface UmbracoUnattended {
  /**
   * Indicating whether unattended installs are enabled
   */
  InstallUnattended?: boolean;
  /**
   * Indicating whether unattended upgrades are enabled
   */
  UpgradeUnattended?: boolean;
  /**
   * Use for creating a user with a name for Unattended Installs
   */
  UnattendedUserName?: string;
  /**
   * Use for creating a user with an email for Unattended Installs
   */
  UnattendedUserEmail?: string;
  /**
   * Use for creating a user with a password for Unattended Installs
   */
  UnattendedUserPassword?: string;
  [k: string]: unknown | undefined;
}
