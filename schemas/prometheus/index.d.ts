/* eslint-disable */

/**
 * Prometheus configuration file
 */
export type Prometheus = {
  /**
   * The global configuration specifies parameters that are valid in all other configuration contexts. They also serve as defaults for other configuration sections.
   */
  global?: {
    /**
     * How frequently to scrape targets by default.
     */
    scrape_interval?: string | null;
    /**
     * How long until a scrape request times out.
     */
    scrape_timeout?: string | null;
    /**
     * How frequently to evaluate rules.
     */
    evaluation_interval?: string | null;
    external_labels?: Labels;
    /**
     * File to which PromQL queries are logged. Reloading the configuration will reopen the file.
     */
    query_log_file?: string | null;
    /**
     * An uncompressed response body larger than this many bytes will cause the scrape to fail. 0 means no limit. Example: 100MB.
     */
    body_size_limit?: string | null;
    /**
     * Per-scrape limit on number of scraped samples that will be accepted. If more than this number of samples are present after metric relabelling the entire scrape will be treated as failed. 0 means no limit.
     */
    sample_limit?: number | null;
    /**
     * Per-scrape limit on number of labels that will be accepted for a sample. If more than this number of labels are present post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_limit?: number | null;
    /**
     * Per-scrape limit on length of labels name that will be accepted for a sample. If a label name is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_name_length_limit?: number | null;
    /**
     * Per-scrape limit on length of labels value that will be accepted for a sample. If a label value is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_value_length_limit?: number | null;
    /**
     * Per-scrape config limit on number of unique targets that will be accepted. If more than this number of targets are present after target relabeling, Prometheus will mark the targets as failed without scraping them. 0 means no limit.
     */
    target_limit?: number | null;
  } | null;
  /**
   * Rule files specifies a list of globs. Rules and alerts are read from all matching files.
   */
  rule_files?: FilepathGlob[] | null;
  /**
   * Settings related to the remote write feature.
   */
  remote_write?: Auth[] | null;
  /**
   * Settings related to the remote read feature.
   */
  remote_read?: Auth[] | null;
  /**
   * Scrape config files specifies a list of globs. Scrape configs are read from all matching files and appended to the list of scrape configs.
   */
  scrape_config_files?: FilepathGlob[] | null;
  /**
   * A list of scrape configurations.
   */
  scrape_configs?: Auth[] | null;
  /**
   * Alerting specifies settings related to the Alertmanager.
   */
  alerting?: {
    alert_relabel_configs?: RelabelConfigs;
    alertmanagers?: Auth[] | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Storage related settings that are runtime reloadable.
   */
  storage?: {
    tsdb?: {
      /**
       * Configures how old an out-of-order/out-of-bounds sample can be w.r.t. the TSDB max time.
       */
      out_of_order_time_window?: string | null;
    } | null;
    exemplars?: {
      /**
       * Configures the maximum size of the circular buffer used to store exemplars for all series. Resizable during runtime.
       */
      max_exemplars?: number | null;
    } | null;
  } | null;
} & ({
  /**
   * The global configuration specifies parameters that are valid in all other configuration contexts. They also serve as defaults for other configuration sections.
   */
  global?: {
    /**
     * How frequently to scrape targets by default.
     */
    scrape_interval?: string | null;
    /**
     * How long until a scrape request times out.
     */
    scrape_timeout?: string | null;
    /**
     * How frequently to evaluate rules.
     */
    evaluation_interval?: string | null;
    external_labels?: Labels;
    /**
     * File to which PromQL queries are logged. Reloading the configuration will reopen the file.
     */
    query_log_file?: string | null;
    /**
     * An uncompressed response body larger than this many bytes will cause the scrape to fail. 0 means no limit. Example: 100MB.
     */
    body_size_limit?: string | null;
    /**
     * Per-scrape limit on number of scraped samples that will be accepted. If more than this number of samples are present after metric relabelling the entire scrape will be treated as failed. 0 means no limit.
     */
    sample_limit?: number | null;
    /**
     * Per-scrape limit on number of labels that will be accepted for a sample. If more than this number of labels are present post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_limit?: number | null;
    /**
     * Per-scrape limit on length of labels name that will be accepted for a sample. If a label name is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_name_length_limit?: number | null;
    /**
     * Per-scrape limit on length of labels value that will be accepted for a sample. If a label value is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_value_length_limit?: number | null;
    /**
     * Per-scrape config limit on number of unique targets that will be accepted. If more than this number of targets are present after target relabeling, Prometheus will mark the targets as failed without scraping them. 0 means no limit.
     */
    target_limit?: number | null;
  } | null;
  /**
   * Rule files specifies a list of globs. Rules and alerts are read from all matching files.
   */
  rule_files?: FilepathGlob[] | null;
  /**
   * Settings related to the remote write feature.
   */
  remote_write?: Auth[] | null;
  /**
   * Settings related to the remote read feature.
   */
  remote_read?: Auth[] | null;
  /**
   * Scrape config files specifies a list of globs. Scrape configs are read from all matching files and appended to the list of scrape configs.
   */
  scrape_config_files?: FilepathGlob[] | null;
  /**
   * A list of scrape configurations.
   */
  scrape_configs?: Auth[] | null;
  /**
   * Alerting specifies settings related to the Alertmanager.
   */
  alerting?: {
    alert_relabel_configs?: RelabelConfigs;
    alertmanagers?: Auth[] | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Storage related settings that are runtime reloadable.
   */
  storage?: {
    tsdb?: {
      /**
       * Configures how old an out-of-order/out-of-bounds sample can be w.r.t. the TSDB max time.
       */
      out_of_order_time_window?: string | null;
    } | null;
    exemplars?: {
      /**
       * Configures the maximum size of the circular buffer used to store exemplars for all series. Resizable during runtime.
       */
      max_exemplars?: number | null;
    } | null;
  } | null;
} | null);
/**
 * The labels to add to any time series or alerts when communicating with external systems (federation, remote storage, Alertmanager).
 */
export type Labels = {
  [k: string]: LabelValue;
} & ({
  [k: string]: LabelValue;
} | null);
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 */
export type LabelValue = string;
export type FilepathGlob = string;
export type Auth = {
  [k: string]: unknown | undefined;
};
export type RelabelConfigs =
  | {
      /**
       * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
       */
      source_labels?: LabelName[];
      /**
       * Separator placed between concatenated source label values.
       */
      separator?: string;
      /**
       * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
       */
      target_label?: string;
      /**
       * Regular expression against which the extracted value is matched.
       */
      regex?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      modulus?: number;
      /**
       * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available.
       */
      replacement?: string;
      /**
       * Action to perform based on regex matching.
       */
      action?:
        | 'replace'
        | 'lowercase'
        | 'uppercase'
        | 'keep'
        | 'drop'
        | 'keepequal'
        | 'dropequal'
        | 'hashmod'
        | 'labelmap'
        | 'labeldrop'
        | 'labelkeep';
      [k: string]: unknown | undefined;
    }[]
  | null;
export type LabelName = string;
