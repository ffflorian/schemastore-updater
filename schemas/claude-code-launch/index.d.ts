/* eslint-disable */

export type PreviewServerConfiguration =
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
