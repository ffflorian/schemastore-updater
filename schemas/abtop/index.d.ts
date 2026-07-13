/* eslint-disable */

/**
 * Whether to show a dashboard section.
 */
export type DisplayToggle = boolean;

/**
 * Configuration for abtop, a terminal dashboard for coding agent activity.
 * https://github.com/graykode/abtop#configuration
 */
export interface AbtopConfiguration {
  /**
   * Color theme used by abtop.
   */
  theme?:
    | 'btop'
    | 'dracula'
    | 'catppuccin'
    | 'tokyo-night'
    | 'gruvbox'
    | 'nord'
    | 'light'
    | 'white'
    | 'high-contrast'
    | 'protanopia'
    | 'deuteranopia'
    | 'tritanopia';
  /**
   * Agent names to hide from the dashboard.
   */
  hidden_agents?: string[];
  /**
   * Additional Claude configuration directories to scan.
   */
  claude_config_dirs?: string[];
  /**
   * Interface language. Leave empty or omit to auto-detect. Values beginning with zh use Simplified Chinese; other values use English.
   */
  language?: string;
  show_context?: DisplayToggle;
  show_quota?: DisplayToggle;
  show_tokens?: DisplayToggle;
  show_projects?: DisplayToggle;
  show_ports?: DisplayToggle;
  show_sessions?: DisplayToggle;
  show_mcp?: DisplayToggle;
  [k: string]: unknown | undefined;
}
