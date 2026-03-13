/* eslint-disable */

/**
 * Prometheus rules file
 */
export type PrometheusRules = {
  groups?:
    | {
        /**
         * The name of the group. Must be unique within a file.
         */
        name: string;
        /**
         * How often rules in the group are evaluated.
         */
        interval?: string | null;
        /**
         * Offset the rule evaluation timestamp of this particular group by the specified duration into the past.
         */
        query_offset?: string | null;
        labels?: Labels;
        /**
         * Limit the number of alerts an alerting rule and series a recording rule can produce. 0 is no limit.
         */
        limit?: number | null;
        rules?: (RecordingRule | AlertingRule)[] | null;
      }[]
    | null;
} & ({
  groups?:
    | {
        /**
         * The name of the group. Must be unique within a file.
         */
        name: string;
        /**
         * How often rules in the group are evaluated.
         */
        interval?: string | null;
        /**
         * Offset the rule evaluation timestamp of this particular group by the specified duration into the past.
         */
        query_offset?: string | null;
        labels?: Labels;
        /**
         * Limit the number of alerts an alerting rule and series a recording rule can produce. 0 is no limit.
         */
        limit?: number | null;
        rules?: (RecordingRule | AlertingRule)[] | null;
      }[]
    | null;
} | null);
/**
 * Labels to add or overwrite before storing the result for its rules. Labels defined in <rule> will override the key if it has a collision.
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
 * Labels to add or overwrite before storing the result.
 */
export type Labels1 = {
  [k: string]: LabelValue;
} & ({
  [k: string]: LabelValue;
} | null);
/**
 * Labels to add or overwrite for each alert.
 */
export type Labels2 = {
  [k: string]: LabelValue;
} & ({
  [k: string]: LabelValue;
} | null);
/**
 * Annotations to add to each alert.
 */
export type Annotations = {
  [k: string]: TmplString;
} & ({
  [k: string]: TmplString;
} | null);
/**
 * A string which is template-expanded before usage.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 */
export type TmplString = string;

export interface RecordingRule {
  /**
   * The name of the time series to output to. Must be a valid metric name.
   */
  record: string;
  /**
   * The PromQL expression to evaluate. Every evaluation cycle this is evaluated at the current time, and the result recorded as a new set of time series with the metric name as given by 'record'.
   */
  expr: string | number;
  labels?: Labels1;
}
export interface AlertingRule {
  /**
   * The name of the alert. Must be a valid metric name.
   */
  alert: string;
  /**
   * The PromQL expression to evaluate. Every evaluation cycle this is evaluated at the current time, and all resultant time series become pending/firing alerts.
   */
  expr: string | number;
  /**
   * Alerts are considered firing once they have been returned for this long. Alerts which have not yet fired for long enough are considered pending.
   */
  for?: string | null;
  /**
   * How long an alert will continue firing after the condition that triggered it has cleared.
   */
  keep_firing_for?: string | null;
  labels?: Labels2;
  annotations?: Annotations;
}
