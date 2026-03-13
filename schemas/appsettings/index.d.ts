/* eslint-disable */

/**
 * The protocols enabled on the endpoint.
 */
export type Protocols = 'None' | 'Http1' | 'Http2' | 'Http1AndHttp2' | 'Http3' | 'Http1AndHttp2AndHttp3';
/**
 * Specifies allowable SSL protocols. Defaults to 'None' which allows the operating system to choose the best protocol to use, and to block protocols that are not secure. Unless your app has a specific reason not to, you should use this default. Available in .NET 5 and later.
 */
export type SslProtocols = ('None' | 'Tls' | 'Tls11' | 'Tls12' | 'Tls13')[];
/**
 * Specifies the client certificate requirements for a HTTPS connection. Defaults to 'NoCertificate'. Available in .NET 5 and later.
 */
export type ClientCertificateMode = 'NoCertificate' | 'AllowCertificate' | 'RequireCertificate';
/**
 * Log level threshold.
 */
export type LogLevelThreshold =
  | ('Trace' | 'Debug' | 'Information' | 'Warning' | 'Error' | 'Critical' | 'None')
  | undefined;
/**
 * ASP.NET Core host filtering middleware configuration. Allowed hosts is a semicolon-delimited list of host names without port numbers. Requests without a matching host name will be refused. Host names may be prefixed with a '*.' wildcard, or use '*' to allow all hosts.
 */
export type AllowedHosts = string;
/**
 * Pointer to the schema against which this document should be validated.
 */
export type Schema = string;
/**
 * .NET Assembly Name, without the file extension
 */
export type AssemblyName = string;
/**
 * Using section contains list of assemblies in which configuration methods. Can be required depending of the project type: See: https://github.com/serilog/serilog-settings-configuration#using-section-and-auto-discovery-of-configuration-assemblies
 */
export type ListOfAutoDiscoveryOfConfigurationAssemblies = AssemblyName[];
/**
 * Log level threshold.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^(?<SerilogLevelSwitcherName>\${0,1}[A-Za-z]+[A-Za-z0-9]*)$".
 */
export type LogLevel = 'Verbose' | 'Debug' | 'Information' | 'Warning' | 'Error' | 'Fatal' | 'Off';
/**
 * Minimum LogLevel Threshold. (Support dynamic reload if the underlying IConfigurationProvider supports it)
 */
export type MinimumLogLevelThreshold = (LogLevel | DetailedLogLevel) &
  (((LogLevel | DetailedLogLevel) & string) | (LogLevel | DetailedLogLevel));
/**
 * A Serilog Log Level or a reference to a Log Level Switch name on `LevelSwitches` configuration.
 */
export type LogLevelOrLevelSwitchesName = (LogLevel | LevelSwitchesName) & string;
/**
 * Log Level Switch string reference.
 */
export type LevelSwitchesName = string;
/**
 * This section defines Enriches that will be applied to log events.
 */
export type LogEventsEnriches = MethodCallReference;
/**
 * @minItems 1
 */
export type MethodCallReference =
  | [MethodCallReferenceItem, ...MethodCallReferenceItem[]]
  | string
  | {
      [k: string]: MethodCallReferenceItem;
    };
export type MethodCallReferenceItem = (MethodName | ComplexMethodCallReference) &
  (
    | ((MethodName | ComplexMethodCallReference) & string)
    | (MethodName | ComplexMethodCallReference)
    | (null & (MethodName | ComplexMethodCallReference))
  );
/**
 * A name referring to a C# Class method
 */
export type MethodName = string;
/**
 * This section defines Destructure.
 */
export type LogEventsDestructure = MethodCallReference;
/**
 * This section defines filters that will be applied to log events.
 */
export type LogEventsFilters = MethodCallReference;
/**
 * This section configures the sinks that log events will be emitted to.
 */
export type ConfigurationForLogDestination = MethodCallReference;
/**
 * This section configures sinks for auditing, instead of regular (safe) logging. Obs: When auditing is used, exceptions from sinks and any intermediate filters propagate back to the caller.
 */
export type ConfigurationForLogDestinationForAuditing = MethodCallReference;
/**
 * This section defines Enriches that will be applied to log events.
 *
 * This interface was referenced by `SerilogAppSettings`'s JSON-Schema definition
 * via the `patternProperty` "^Enrich:((?<EnvironmentVariableName>[a-zA-Z_]\w*)|(?<ArrayIndex>\d*))$".
 */
export type LogEventsEnriches1 = MethodCallReferenceItem;
/**
 * This section defines Destructure.
 *
 * This interface was referenced by `SerilogAppSettings`'s JSON-Schema definition
 * via the `patternProperty` "^Destructure:((?<EnvironmentVariableName>[a-zA-Z_]\w*)|(?<ArrayIndex>\d*))$".
 */
export type LogEventsDestructure1 = MethodCallReferenceItem;
/**
 * This section defines filters that will be applied to log events.
 *
 * This interface was referenced by `SerilogAppSettings`'s JSON-Schema definition
 * via the `patternProperty` "^Filter:((?<EnvironmentVariableName>[a-zA-Z_]\w*)|(?<ArrayIndex>\d*))$".
 */
export type LogEventsFilters1 = MethodCallReferenceItem;
/**
 * This section configures the sinks that log events will be emitted to.
 *
 * This interface was referenced by `SerilogAppSettings`'s JSON-Schema definition
 * via the `patternProperty` "^WriteTo:((?<EnvironmentVariableName>[a-zA-Z_]\w*)|(?<ArrayIndex>\d*))$".
 */
export type ConfigurationForLogDestination1 = MethodCallReferenceItem;
/**
 * This section configures sinks for auditing, instead of regular (safe) logging. Obs: When auditing is used, exceptions from sinks and any intermediate filters propagate back to the caller.
 *
 * This interface was referenced by `SerilogAppSettings`'s JSON-Schema definition
 * via the `patternProperty` "^AuditTo:((?<EnvironmentVariableName>[a-zA-Z_]\w*)|(?<ArrayIndex>\d*))$".
 */
export type ConfigurationForLogDestinationForAuditing1 = MethodCallReferenceItem;

export interface JSONSchemaASPNETCoreSAppsettingsJsonFile {
  Kestrel?: Kestrel;
  Logging?: LoggingOptions;
  AllowedHosts?: AllowedHosts;
  ConnectionStrings?: ConnectionStringOptions;
  [k: string]: unknown | undefined;
}
/**
 * ASP.NET Core Kestrel server configuration.
 */
export interface Kestrel {
  Endpoints?: Endpoints;
  EndpointDefaults?: EndpointDefaults;
  Certificates?: Certificates;
  [k: string]: unknown | undefined;
}
/**
 * Endpoints that Kestrel listens to for network requests. Each endpoint has a name specified by its JSON property name.
 */
export interface Endpoints {
  [k: string]: EndpointOptions | undefined;
}
/**
 * Kestrel endpoint configuration.
 */
export interface EndpointOptions {
  /**
   * The scheme, host name, and port the endpoint will listen on. A Url is required.
   */
  Url: string;
  Protocols?: Protocols;
  SslProtocols?: SslProtocols;
  Certificate?: Certificate;
  ClientCertificateMode?: ClientCertificateMode;
  Sni?: SNI;
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
  Location?: 'LocalMachine' | 'CurrentUser';
  /**
   * A value indicating whether or not to load certificates that are considered invalid. Defaults to false.
   */
  AllowInvalid?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Server Name Indication (SNI) configuration. This enables the mapping of client requested host names to certificates and other TLS settings. Wildcard names prefixed with '*.', as well as a top level '*' are supported. Available in .NET 5 and later.
 */
export interface SNI {
  [k: string]: SNIOptions | undefined;
}
/**
 * Endpoint SNI configuration.
 */
export interface SNIOptions {
  Protocols?: Protocols;
  SslProtocols?: SslProtocols;
  Certificate?: Certificate;
  ClientCertificateMode?: ClientCertificateMode;
  [k: string]: unknown | undefined;
}
/**
 * Default configuration applied to all endpoints. Named endpoint specific configuration overrides defaults.
 */
export interface EndpointDefaults {
  Protocols?: Protocols;
  SslProtocols?: SslProtocols;
  ClientCertificateMode?: ClientCertificateMode;
  [k: string]: unknown | undefined;
}
/**
 * Certificates that Kestrel uses with HTTPS endpoints. Each certificate has a name specified by its JSON property name. The 'Default' certificate is used by HTTPS endpoints that haven't specified a certificate.
 */
export interface Certificates {
  [k: string]: Certificate;
}
/**
 * Configuration for Microsoft.Extensions.Logging.
 */
export interface LoggingOptions {
  LogLevel?: LoggingLevelOptions;
  Console?: {
    LogLevel?: LoggingLevelOptions;
    /**
     * Name of the log message formatter to use. Defaults to 'simple'.
     */
    FormatterName?: string;
    FormatterOptions?: FormatterOptions;
    /**
     * Log level threshold.
     */
    LogToStandardErrorThreshold?: 'Trace' | 'Debug' | 'Information' | 'Warning' | 'Error' | 'Critical' | 'None';
    [k: string]: unknown | undefined;
  };
  EventSource?: {
    LogLevel?: LoggingLevelOptions;
    [k: string]: unknown | undefined;
  };
  Debug?: {
    LogLevel?: LoggingLevelOptions;
    [k: string]: unknown | undefined;
  };
  EventLog?: {
    LogLevel?: LoggingLevelOptions;
    [k: string]: unknown | undefined;
  };
  ElmahIo?: {
    LogLevel?: LoggingLevelOptions;
    [k: string]: unknown | undefined;
  };
  ElmahIoBreadcrumbs?: {
    LogLevel?: LoggingLevelOptions;
    [k: string]: unknown | undefined;
  };
  [k: string]: ProviderLoggingSettings | undefined;
}
/**
 * Log level configurations used when creating logs. Only logs that exceeds its matching log level will be enabled. Each log level configuration has a category specified by its JSON property name. For more information about configuring log levels, see https://docs.microsoft.com/aspnet/core/fundamentals/logging/#configure-logging.
 */
export interface LoggingLevelOptions {
  [k: string]: LogLevelThreshold | undefined;
}
/**
 * Log message formatter options. Additional properties are available on the options depending on the configured formatter. The formatter is specified by FormatterName.
 */
export interface FormatterOptions {
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
}
/**
 * Logging configuration for a provider. The provider name must match the configuration's JSON property property name.
 */
export interface ProviderLoggingSettings {
  LogLevel?: LoggingLevelOptions;
  [k: string]: unknown | undefined;
}
/**
 * Connection string configuration. Get connection strings with the IConfiguration.GetConnectionString(string) extension method.
 */
export interface ConnectionStringOptions {
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
export interface CDN {
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
  strategy?: 'cacheFirst' | 'cacheFirstSafe' | 'minimal' | 'networkFirst';
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
export interface NLogOptions {
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
  internalLogLevel?: 'Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal' | 'Off';
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
  globalThreshold?: 'Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal' | 'Off';
  /**
   * Automatically call `LogFactory.Shutdown` on AppDomain.Unload or AppDomain.ProcessExit
   */
  autoShutdown?: boolean & string;
  /**
   * Load NLog extension packages for additional targets and layouts
   */
  extensions?: Extension[];
  variables?: Variables;
  targetDefaultWrapper?: DefaultWrapper;
  targets?: Targets;
  rules?: NLogRuleItem[] | Rules;
  [k: string]: unknown | undefined;
}
export interface Extension {
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
}
/**
 * Key-value pair of variables
 */
export interface Variables {
  /**
   * This interface was referenced by `Variables`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: number | string | boolean;
}
/**
 * Wrap all defined targets with this custom target wrapper.
 */
export interface DefaultWrapper {
  type: string;
  [k: string]: unknown | undefined;
}
export interface Targets {
  /**
   * Wrap all defined targets using AsyncWrapper with OverflowAction=Discard for better performance.
   */
  async?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Redirect LogEvents from matching Logger objects to specified targets
 *
 * This interface was referenced by `Rules`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface NLogRuleItem {
  /**
   * Match Logger objects based on their Logger-name. Can use wildcard characters ('*' or '?').
   */
  logger: string;
  /**
   * Rule identifier to allow rule lookup with Configuration.FindRuleByName and Configuration.RemoveRuleByName.
   */
  ruleName?: string;
  level?: ('Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal') | string;
  /**
   * Comma separated list of levels that this rule matches.
   */
  levels?: string;
  minLevel?: ('Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal') | string;
  maxLevel?: ('Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal') | string;
  finalMinLevel?: ('Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal') | string;
  /**
   * Name or names of a target - separated by comma. Remove this property for sending events to the blackhole.
   */
  writeTo?: string;
  /**
   * Ignore further rules if this one matches.
   */
  final?: boolean;
  enabled?: boolean;
  filters?: Filter[] | Filter1;
  /**
   * Default action if none of the filters match.
   */
  filterDefaultAction?: 'Neutral' | 'Log' | 'Ignore' | 'LogFinal' | 'IgnoreFinal';
  [k: string]: unknown | undefined;
}
export interface Filter {
  type: string;
  /**
   * Result action when filter matches logevent.
   */
  action?: 'Neutral' | 'Log' | 'Ignore' | 'LogFinal' | 'IgnoreFinal';
  [k: string]: unknown | undefined;
}
export interface Filter1 {
  [k: string]: unknown | undefined;
}
export interface Rules {
  [k: string]: NLogRuleItem;
}
/**
 * Serilog appSettings Configuration
 *
 * This interface was referenced by `JSONSchemaASPNETCoreSAppsettingsJsonFile`'s JSON-Schema definition
 * via the `patternProperty` "^(Serilog|serilog)$".
 */
export interface SerilogAppSettings {
  $schema?: Schema;
  Using?: ListOfAutoDiscoveryOfConfigurationAssemblies;
  LevelSwitches?: {
    [k: string]: LogLevel;
  };
  FilterSwitches?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(?<SerilogLevelSwitcherName>\${0,1}[A-Za-z]+[A-Za-z0-9]*)$".
     */
    [k: string]: string;
  };
  MinimumLevel?: MinimumLogLevelThreshold;
  Properties?: LogEventsProperties;
  Enrich?: LogEventsEnriches;
  Destructure?: LogEventsDestructure;
  Filter?: LogEventsFilters;
  WriteTo?: ConfigurationForLogDestination;
  AuditTo?: ConfigurationForLogDestinationForAuditing;
}
/**
 * Detailed Log level threshold object. Allowing set log levels be overridden per logging source.
 */
export interface DetailedLogLevel {
  Default?: LogLevelOrLevelSwitchesName;
  ControlledBy?: LevelSwitchesName;
  Override?: LoggingSourceLogLevelObject;
}
/**
 * Set the Log level threshold or LevelSwitcher reference per Logging Source.
 */
export interface LoggingSourceLogLevelObject {
  [k: string]: LogLevelOrLevelSwitchesName;
}
/**
 * This section defines a static list of key-value pairs that will enrich log events.
 */
export interface LogEventsProperties {
  [k: string]: string | undefined;
}
export interface ComplexMethodCallReference {
  Name: MethodName;
  Args?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(?<CSharpMethodArgumentName>[a-zA-Z_]\w*)$".
     */
    [k: string]: unknown;
  };
}
