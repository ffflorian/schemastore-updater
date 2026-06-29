/* eslint-disable */

export type StringList = string[];
/**
 * Configuration applied to files matched by a paths glob.
 */
export type PathConfig =
  | ({
      ignore?: StringList;
    } | null)
  | undefined;

/**
 * Configuration for actionlint, a static checker for GitHub Actions workflow files.
 */
export interface ActionlintConfiguration {
  /**
   * Configuration for self-hosted runner environments.
   */
  'self-hosted-runner'?: {
    /**
     * Label names added to self-hosted runners. Glob syntax supported by Go's path.Match is available.
     */
    labels?: StringList | null;
  } | null;
  /**
   * Configuration variables defined in the repository or organization. Null disables strict checking; an empty array means no variable is allowed.
   */
  'config-variables'?: StringList | null;
  /**
   * Path-specific configurations keyed by glob patterns relative to the repository root. Path separators are always '/'.
   */
  paths?: {
    [k: string]: PathConfig | undefined;
  } | null;
}
