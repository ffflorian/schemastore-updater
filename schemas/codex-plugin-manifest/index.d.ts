/* eslint-disable */

export type RelativePath = string;
export type PluginInterface = PluginInterface1 & {
  displayName: string;
  shortDescription: string;
  longDescription: string;
  developerName: string;
  category: string;
  /**
   * @minItems 1
   */
  capabilities: [string, ...string[]];
  websiteURL?: HttpsUrl;
  privacyPolicyURL?: HttpsUrl;
  termsOfServiceURL?: HttpsUrl;
  defaultPrompt?: DefaultPrompt;
  default_prompt?: DefaultPrompt;
  brandColor?: string;
  composerIcon?: AssetPath;
  logo?: AssetPath;
  /**
   * Package-relative asset path.
   */
  logoDark?: string;
  screenshots?: AssetPath[];
};
export type PluginInterface1 =
  | {
      defaultPrompt: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      default_prompt: unknown;
      [k: string]: unknown | undefined;
    };
export type HttpsUrl = string;
/**
 * Starter prompt shown by Codex clients.
 */
export type DefaultPrompt = string | [string] | [string, string] | [string, string, string];
/**
 * Package-relative asset path.
 */
export type AssetPath = string;

/**
 * Manifest for an OpenAI Codex plugin.
 */
export interface CodexPluginManifest {
  /**
   * Optional plugin identifier.
   */
  id?: string;
  /**
   * Plugin identifier.
   */
  name: string;
  /**
   * Strict semantic version.
   */
  version: string;
  /**
   * Brief plugin description.
   */
  description: string;
  /**
   * Relative path to skill directories or files.
   */
  skills?: string;
  /**
   * Relative path to the app manifest.
   */
  apps?: string;
  /**
   * Relative path to an MCP manifest or inline MCP server configuration.
   */
  mcpServers?:
    | RelativePath
    | {
        [k: string]: unknown | undefined;
      };
  interface: PluginInterface;
  author: {
    name: string;
    email?: string;
    url?: HttpsUrl;
  };
  /**
   * Plugin documentation URL.
   */
  homepage?: string;
  /**
   * Plugin source repository URL.
   */
  repository?: string;
  license?: string;
  keywords?: string[];
}
