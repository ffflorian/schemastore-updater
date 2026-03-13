/* eslint-disable */

export interface JSONSchemaForMSBuildSolutionFilters {
  /**
   * Solution filter description
   */
  solution?: {
    /**
     * Path to filtered solution. Should be relative to current .slnf
     */
    path?: string;
    /**
     * List of projects that will be included in filitered solution. Paths should be relative to solution rather than to .slnf
     */
    projects?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
