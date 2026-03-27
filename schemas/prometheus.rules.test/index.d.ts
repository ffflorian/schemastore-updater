/* eslint-disable */

/**
 * Expanded annotations of the expected alert
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
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 */
export type LabelValue = string;

/**
 * Prometheus rules test file. See https://prometheus.io/docs/prometheus/latest/configuration/unit_testing_rules/ for details.
 */
export interface PrometheusRulesTestFile {
  /**
   * The evaluation interval for the tests. [duration] format.
   */
  evaluation_interval?: string | null;
  /**
   * The order in which group names are listed below will be the order of evaluation of rule groups (at a given evaluation time).
   */
  group_eval_order?: string[] | null;
  /**
   * List of rule files to consider for testing. Globs are supported.
   */
  rule_files?: string[];
  tests?: TestGroup[];
}
/**
 * All the tests are listed here.
 */
export interface TestGroup {
  /**
   * Unit tests for alerting rules. We only consider the alerting rules from the input files.
   */
  alert_rule_test?: AlertTestCase[];
  external_labels?: Labels;
  /**
   * External URL accessible to the alert template. Usually set using --web.external-url.
   */
  external_url?: string;
  /**
   * A list of time series
   */
  input_series: Series[];
  /**
   * The time elapsed from time=0s when the alerts have to be checked.
   */
  interval: string | null;
  /**
   * Name of the test group
   */
  name?: string;
  /**
   * Unit tests for PromQL expressions
   */
  promql_expr_test?: PromqlTestCase[];
}
export interface AlertTestCase {
  /**
   * Name of the alert to be tested.
   */
  alertname: string;
  /**
   * The time elapsed from time=0s when the alerts have to be checked.
   */
  eval_time: string | null;
  /**
   * List of expected alerts firing under the given alertname at the given evaluation time
   */
  exp_alerts?: Alert[];
}
export interface Alert {
  exp_annotations?: Labels;
  exp_labels: Labels;
  [k: string]: unknown | undefined;
}
export interface Series {
  /**
   * This follows the usual series notation '<metric name>{<label name>=<label value>, ...}'.
   */
  series: string;
  /**
   * This uses expanded notation to project time series. There are also the special `_` and `stale` values to indicate missing or stale samples
   */
  values: string;
}
export interface PromqlTestCase {
  /**
   * The time elapsed from time=0s when the expression has to be evaluated.
   */
  eval_time: string | null;
  /**
   * Expected samples at the given evaluation time.
   */
  exp_samples?: Sample[];
  /**
   * PromQL expression to evaluate
   */
  expr: string | number;
}
export interface Sample {
  /**
   * Labels of the sample in the usual series notation '<metric name>{<label name>=<label value>, ...}'
   */
  labels: string;
  /**
   * Expected value of the PromQL expression.
   */
  value: number;
  [k: string]: unknown | undefined;
}
