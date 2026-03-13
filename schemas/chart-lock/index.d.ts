/* eslint-disable */

export interface HelmChartLock {
  /**
   * Generated is the date the lock file was last generated.
   */
  generated: string;
  /**
   * Digest is a hash of the dependencies in Chart.yaml.
   */
  digest: string;
  /**
   * In Helm, one chart may depend on any number of other charts. These dependencies can be dynamically linked using the dependencies field in Chart.yaml or brought in to the charts/ directory and managed manually.
   * The charts required by the current chart are defined as a list in the dependencies field.
   */
  dependencies: {
    /**
     * The name of the chart
     */
    name: string;
    /**
     * The version of the chart
     */
    version: string;
    /**
     * The repository URL or alias
     */
    repository: string;
  }[];
}
