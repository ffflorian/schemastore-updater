/* eslint-disable */

/**
 * Configuration schema for WebJEA - a web-based JEA execution framework.
 */
export interface WebJEAConfiguration {
  /**
   * Link to this schema. WebJEA accepts and ignores it.
   */
  $schema?: string;
  /**
   * The page title displayed in WebJEA.
   */
  Title?: string;
  /**
   * Default folder path for scripts with relative paths.
   */
  BasePath?: string | null;
  /**
   * Log form inputs to the audit log. Can be overridden per command.
   */
  LogParameters?: boolean;
  /**
   * Global access groups or users. Members have access to all commands. With Windows authentication, use domain\group. With Entra ID, use a group or user object ID (GUID), a UPN, an app role value, or a group display name when ResolveGroupNamesViaGraph is enabled. '*' is not honored here in production.
   */
  PermittedGroups?: string | string[];
  /**
   * Send anonymized usage data.
   */
  SendTelemetry?: boolean;
  /**
   * An HTML string displayed on the landing page. Can be used for instructions, help text, or branding.
   */
  DashboardHtml?: string | null;
  /**
   * Default language for HTML output, used by screen readers and assistive technologies.
   */
  HtmlLanguage?: string;
  /**
   * Whether members of the global PermittedGroups can see verbose output. Applies to global users only; other users never see verbose output. There is no per-command override.
   */
  ShowVerbose?: boolean;
  /**
   * @deprecated
   * DEPRECATED as of v2026.5.2.1922. The ID of the command to display by default.
   */
  DefaultCommandId?: string;
  /**
   * Default rendering mode for command output. Can be overridden per command. 'Markdown' and 'Link' require WebJEA v2100 or later.
   */
  RenderMode?: 'Legacy' | 'Markdown' | 'Link';
  /**
   * Array of command definitions available in WebJEA.
   */
  Commands: Command[];
  [k: string]: unknown | undefined;
}
/**
 * A command shown in the WebJEA menu, backed by a PowerShell script.
 */
export interface Command {
  /**
   * Unique, case-insensitive identifier (stored lowercased). Used in URL parameters (?id=<value>). Duplicate Ids are rejected when the config loads.
   */
  Id: string;
  /**
   * Friendly name presented to users.
   */
  DisplayName?: string | null;
  /**
   * @deprecated
   * DEPRECATED. Valid only up to WebJEA v2026.4.x. Description text for the command.
   */
  Description?: string | null;
  /**
   * Description text for the landing page. Can contain HTML. Will be displayed on the dashboard below the command title.
   */
  Synopsis?: string | null;
  /**
   * Script to execute on page load. Should not require parameters and should run quickly.
   */
  OnloadScript?: string | null;
  /**
   * Script to parse for form generation and execution.
   */
  Script?: string | null;
  /**
   * Override config-level LogParameters for this command. When null or omitted, the config-level value applies.
   */
  LogParameters?: boolean | null;
  /**
   * Groups or users with access to this command. Use '*' for all authenticated users. With Windows authentication, use domain\group. With Entra ID, use a group or user object ID (GUID), a UPN, an app role value, or a group display name when ResolveGroupNamesViaGraph is enabled. When omitted, only members of the global PermittedGroups can see the command.
   */
  PermittedGroups?: string | string[];
  /**
   * Rendering mode for output of this command. When null or omitted, the config-level RenderMode applies, which defaults to 'Legacy'. 'Markdown' and 'Link' require WebJEA v2100 or later.
   */
  RenderMode?: ('Legacy' | 'Markdown' | 'Link') | null;
  [k: string]: unknown | undefined;
}
