/* eslint-disable */

export type PreviewServerConfiguration = Configuration & Configuration1;
export type Configuration =
  | {
      runtimeExecutable: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      program: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      url: unknown;
      [k: string]: unknown | undefined;
    };

/**
 * Configuration for preview servers in Claude Code Desktop.
 * https://code.claude.com/docs/en/desktop#configure-preview-servers
 */
export interface LaunchConfiguration {
  /**
   * JSON Schema reference for this configuration file.
   */
  $schema?: string;
  /**
   * Version of the launch configuration format.
   */
  version: '0.0.1';
  /**
   * Whether Claude automatically verifies changes after editing files.
   * https://code.claude.com/docs/en/desktop#auto-verify-changes
   */
  autoVerify?: boolean;
  /**
   * Preview server configurations.
   */
  configurations: PreviewServerConfiguration[];
  [k: string]: unknown | undefined;
}
export interface Configuration1 {
  /**
   * Unique identifier for this server.
   */
  name: string;
  /**
   * Command used to start the server, such as npm, yarn, or node.
   */
  runtimeExecutable?: string;
  /**
   * Arguments passed to runtimeExecutable.
   */
  runtimeArgs?: string[];
  /**
   * Port on which the server listens.
   */
  port?: number;
  /**
   * Working directory relative to the project root. Use ${workspaceFolder} to reference the project root explicitly.
   */
  cwd?: string;
  /**
   * Additional environment variables passed to the server. Do not store secrets here because launch.json is committed to the repository.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * Whether Claude automatically selects a free port when the configured port is unavailable. When omitted, Claude asks the user.
   */
  autoPort?: boolean;
  /**
   * Standalone script run directly with Node.js.
   */
  program?: string;
  /**
   * Arguments passed to program.
   */
  args?: string[];
  /**
   * Address opened by the preview instead of http://localhost:<port>. Must use HTTP or HTTPS and must not contain a username or password. Localhost URLs must contain only the origin, and their port must match port.
   * https://code.claude.com/docs/en/desktop#open-the-preview-at-a-specific-url
   */
  url?: string;
  [k: string]: unknown | undefined;
}
