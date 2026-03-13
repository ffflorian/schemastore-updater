/* eslint-disable */

export type Rule =
  | [0 | 1 | 2]
  | [0 | 1 | 2, 'always' | 'never']
  | [
      0 | 1 | 2,
      'always' | 'never',
      {
        [k: string]: unknown | undefined;
      }
    ]
  | undefined;

export interface HttpsJsonSchemastoreOrgCommitlintrcJson {
  /**
   * Resolvable ids to commitlint configurations to extend
   */
  extends?: string[] | string;
  /**
   * Resolvable id to conventional-changelog parser preset to import and use
   */
  parserPreset?:
    | string
    | {
        name?: string;
        path?: string;
        parserOpts?: unknown;
      };
  /**
   * Custom URL to show upon failure
   */
  helpUrl?: string;
  /**
   * Resolvable id to package, from node_modules, which formats the output
   */
  formatter?: string;
  /**
   * Rules to check against
   */
  rules?: {
    [k: string]: Rule | undefined;
  };
  /**
   * Resolvable ids of commitlint plugins from node_modules
   */
  plugins?: string[];
  /**
   * Additional commits to ignore, defined by ignore matchers
   */
  ignores?: unknown[];
  /**
   * Whether commitlint uses the default ignore rules
   */
  defaultIgnores?: boolean;
  [k: string]: unknown | undefined;
}
