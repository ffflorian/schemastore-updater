/* eslint-disable */

/**
 * A rule-set and config for the Solidarity JSON checker
 */
export interface Solidarity {
  config?: {
    /**
     * Identify what kind output should happen when a check is called
     */
    output?: 'moderate' | 'verbose' | 'silent';
    [k: string]: unknown | undefined;
  };
  /**
   * List of requirement rules for your particular environment
   */
  requirements: {
    /**
     * @minItems 1
     */
    [k: string]: [Cli | Dir | File | Env | Shell | Custom, ...(Cli | Dir | File | Env | Shell | Custom)[]] | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * CLI Rule
 */
export interface Cli {
  rule: 'cli';
  binary: string;
  semver?: string;
  version?: string;
  line?: string | number;
  matchIndex?: number;
  platform?: 'darwin' | 'macos' | 'freebsd' | 'linux' | 'sunos' | 'win32' | 'windows';
  error?: string;
  ci?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Dir Rule
 */
export interface Dir {
  rule: 'dir' | 'directory';
  platform?: 'darwin' | 'macos' | 'freebsd' | 'linux' | 'sunos' | 'win32' | 'windows';
  error?: string;
  ci?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * File Rule
 */
export interface File {
  rule: 'file';
  platform?: 'darwin' | 'macos' | 'freebsd' | 'linux' | 'sunos' | 'win32' | 'windows';
  error?: string;
  ci?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * ENV Rule
 */
export interface Env {
  rule: 'env';
  platform?: 'darwin' | 'macos' | 'freebsd' | 'linux' | 'sunos' | 'win32' | 'windows';
  error?: string;
  ci?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Shell Rule
 */
export interface Shell {
  rule: 'shell';
  platform?: 'darwin' | 'macos' | 'freebsd' | 'linux' | 'sunos' | 'win32' | 'windows';
  error?: string;
  ci?: boolean;
  /**
   * A regexp to search the output.
   */
  match: string;
  [k: string]: unknown | undefined;
}
/**
 * Custom Rule
 */
export interface Custom {
  rule: 'custom';
  plugin: string;
  name: string;
  platform?: 'darwin' | 'macos' | 'freebsd' | 'linux' | 'sunos' | 'win32' | 'windows';
  error?: string;
  ci?: boolean;
  /**
   * A regexp to search the output.
   */
  match?: string;
  [k: string]: unknown | undefined;
}
