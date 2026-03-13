/* eslint-disable */

export interface ChangepacksConfiguration {
  baseBranch?: string;
  ignore?: string[];
  latestPackage?: string | null;
  publish?: {
    [k: string]: string | undefined;
  };
  /**
   * Dependency rules for forced updates.
   * Key: glob pattern for trigger packages (e.g., "crates/*")
   * Value: list of package paths that must be updated when trigger matches
   */
  updateOn?: {
    [k: string]: string[] | undefined;
  };
  [k: string]: unknown | undefined;
}
