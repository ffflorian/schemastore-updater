/* eslint-disable */

/**
 * JSON schema for SIL KIT Registry configuration files.
 */
export interface HttpsJsonSchemastoreOrgSilKitRegistryConfigurationJson {
  /**
   * The schema file
   */
  $schema?: string;
  /**
   * Version of the schema used to validate this document
   */
  SchemaVersion?: number | string;
  /**
   * Free text field allowing a user to describe the configuration file in their own words. The contents of this field are not parsed or used internally.
   */
  Description?: string;
  /**
   * The configured registry instance will listen on this address for incoming connections. Optional; This field overrides the -u, and --listen-uri command line parameters.
   */
  ListenUri?: string;
  /**
   * The configured registry instance will send data to this address to show it on the dashboard. Optional; This field overrides the -d, and --dashboard-uri command line parameters.
   */
  DashboardUri?: string;
  Logging?: Logging;
}
/**
 * Configures the properties of the SIL Kit Logging Service
 */
export interface Logging {
  FlushLevel?: 'Critical' | 'Error' | 'Warn' | 'Info' | 'Debug' | 'Trace' | 'Off';
  Sinks: {
    Type: 'File' | 'Stdout';
    Level?: 'Critical' | 'Error' | 'Warn' | 'Info' | 'Debug' | 'Trace' | 'Off';
    /**
     * Log name; Results in the following filename: <LogName>_%y-%m-%dT%h-%m-%s.txt
     */
    LogName?: string;
  }[];
}
