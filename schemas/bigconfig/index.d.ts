/* eslint-disable */

export type Type = 'BIGCONFIG_FILE' & string;
export type AutoApplyOnIndexing = boolean;
export type TagId = string;
export type Name = string;
export type SimpleFieldType =
  | 'UNSPECIFIED'
  | 'STRING'
  | 'UUID'
  | 'BINARY'
  | 'NUMERIC'
  | 'DATE_LIKE'
  | 'TIMESTAMP_LIKE'
  | 'ANY'
  | 'BOOLEAN'
  | 'UNKNOWN'
  | 'ARRAY'
  | 'STRUCT';
export type Exclude = string;
export type Regex = string;
export type ColumnSelectors = ColumnSelector[];
export type TagDefinitions = TagDefinition[];
export type RowCreationTimes = RowCreationTimes1;
export type TagIds = string[];
export type ColumnSelectors1 = ColumnSelector[];
export type SavedMetricId = string;
export type PredefinedMetric =
  | 'PERCENT_NULL'
  | 'COUNT_NULL'
  | 'PERCENT_EMPTY_STRING'
  | 'COUNT_EMPTY_STRING'
  | 'PERCENT_UNIQUE'
  | 'PERCENT_VALUE_IN_LIST'
  | 'AVERAGE'
  | 'MIN'
  | 'MAX'
  | 'SUM'
  | 'COUNT_ROWS'
  | 'COUNT_DISTINCT'
  | 'HOURS_SINCE_MAX_DATE'
  | 'HOURS_SINCE_MAX_TIMESTAMP'
  | 'COUNT_TRUE'
  | 'PERCENT_TRUE'
  | 'COUNT_FALSE'
  | 'PERCENT_FALSE'
  | 'COUNT_USA_PHONE'
  | 'PERCENT_USA_PHONE'
  | 'COUNT_USA_ZIP_CODE'
  | 'PERCENT_USA_ZIP_CODE'
  | 'PERCENT_UUID'
  | 'COUNT_TIMESTAMP_STRING'
  | 'PERCENT_TIMESTAMP_STRING'
  | 'COUNT_DUPLICATES'
  | 'COUNT_USA_STATE_CODE'
  | 'PERCENT_USA_STATE_CODE'
  | 'VARIANCE'
  | 'SKEW'
  | 'KURTOSIS'
  | 'GEOMETRIC_MEAN'
  | 'HARMONIC_MEAN'
  | 'COUNT_UUID'
  | 'COUNT_CUSIP'
  | 'PERCENT_CUSIP'
  | 'COUNT_SEDOL'
  | 'PERCENT_SEDOL'
  | 'COUNT_ISIN'
  | 'PERCENT_ISIN'
  | 'COUNT_LEI'
  | 'PERCENT_LEI'
  | 'COUNT_FIGI'
  | 'PERCENT_FIGI'
  | 'COUNT_PERM_ID'
  | 'PERCENT_PERM_ID'
  | 'COUNT_NAN'
  | 'PERCENT_NAN'
  | 'COUNT_LONGITUDE'
  | 'PERCENT_LONGITUDE'
  | 'COUNT_LATITUDE'
  | 'PERCENT_LATITUDE'
  | 'COUNT_NOT_IN_FUTURE'
  | 'PERCENT_NOT_IN_FUTURE'
  | 'COUNT_DATE_NOT_IN_FUTURE'
  | 'PERCENT_DATE_NOT_IN_FUTURE'
  | 'MEDIAN'
  | 'PERCENTILE'
  | 'COUNT_NOT_NULL'
  | 'STRING_LENGTH_AVERAGE'
  | 'STRING_LENGTH_MIN'
  | 'STRING_LENGTH_MAX'
  | 'COUNT_SSN'
  | 'PERCENT_SSN'
  | 'COUNT_EMAIL'
  | 'PERCENT_EMAIL'
  | 'ROWS_INSERTED'
  | 'HOURS_SINCE_LAST_LOAD'
  | 'COUNT_READ_QUERIES'
  | 'PERCENT_NOT_NULL'
  | 'FRESHNESS'
  | 'VOLUME';
export type Metrics = SimpleMetricDefinition[];
export type ColumnSelectors2 = ColumnSelector[];
export type Metrics1 = SimpleMetricDefinition[];
export type TagId1 = string;
export type Deployments = TagDeployment[];
export type TagDeployments = TagDeploymentSuite[];
export type FqTableName = string;
export type ColumnName = string;
export type Metrics2 = SimpleMetricDefinition[];
export type Columns = ColumnMetricDeployment[];
export type TableMetrics = SimpleMetricDefinition[];
export type RowCreationTime = string;
export type Deployments1 = TableDeployment[];
export type TableDeployments = TableDeploymentSuite[];

/**
 * Bigconfig is a yaml-based declarative monitoring as code solution. Data engineers can deploy Bigeye metrics from the command-line for convenient and scalable data quality monitoring.
 */
export interface Bigconfig {
  type: Type;
  auto_apply_on_indexing?: AutoApplyOnIndexing;
  tag_definitions?: TagDefinitions;
  row_creation_times?: RowCreationTimes;
  saved_metric_definitions?: SavedMetricDefinitions;
  tag_deployments?: TagDeployments;
  table_deployments?: TableDeployments;
  [k: string]: unknown | undefined;
}
export interface TagDefinition {
  tag_id: TagId;
  column_selectors: ColumnSelectors;
  [k: string]: unknown | undefined;
}
export interface ColumnSelector {
  name?: Name;
  type?: SimpleFieldType;
  exclude?: Exclude;
  regex?: Regex;
  [k: string]: unknown | undefined;
}
export interface RowCreationTimes1 {
  tag_ids?: TagIds;
  column_selectors?: ColumnSelectors1;
  [k: string]: unknown | undefined;
}
export interface SavedMetricDefinitions {
  metrics: Metrics;
  [k: string]: unknown | undefined;
}
export interface SimpleMetricDefinition {
  saved_metric_id?: SavedMetricId;
  metric_type?: MetricType;
  metric_name?: string;
  description?: string;
  schedule_frequency?: {
    interval_type: 'HOURS' | 'MINUTES';
    interval_value: number;
    [k: string]: unknown | undefined;
  };
  conditions?: string[];
  group_by?: string[];
  threshold?: {
    type: 'AUTO' | 'RELATIVE' | 'STDDEV' | 'CONSTANT';
    /**
     * Only valid for autothreshold metrics
     */
    sensitivity?: 'NARROW' | 'MEDIUM' | 'WIDE' | 'XWIDE';
    /**
     * Only valid for constant, relative, and standard deviation metrics
     */
    upper_bound?: number;
    /**
     * Only valid for constant, relative, and standard deviation metrics
     */
    lower_bound?: number;
    /**
     * Only valid for autothreshold metrics
     */
    upper_bound_only?: boolean;
    /**
     * Only valid for autothreshold metrics
     */
    lower_bound_only?: boolean;
    /**
     * Only valid for relative and standard deviation metrics
     */
    reference_point?: {
      interval_type: 'DAYS';
      interval_value: number;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  notification_channels?: NotificationChannels[];
  parameters?: MetricParameters[];
  lookback?: {
    lookback_type: 'DATA_TIME' | 'METRIC_TIME' | 'CLOCK_TIME';
    lookback_window: {
      interval_type: 'DAYS';
      interval_value: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Only valid for data time window metrics
     */
    bucket_size?: 'DAY' | 'HOUR';
    [k: string]: unknown | undefined;
  };
  metric_schedule?: {
    named_schedule: {
      name: string;
      cron?: string;
      id?: number;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface MetricType {
  predefined_metric: PredefinedMetric;
  type?: 'PREDEFINED' | 'TEMPLATE';
  template_id?: number;
  aggregation_type?: 'COUNT' | 'PERCENT';
  [k: string]: unknown | undefined;
}
export interface NotificationChannels {
  slack?: string;
  email?: string;
  webhook?: string;
  webhook_header_key?: string;
  webhook_header_value?: string;
  [k: string]: unknown | undefined;
}
export interface MetricParameters {
  key?: string;
  string_value?: string;
  column_name?: string;
  number_value?: number;
  [k: string]: unknown | undefined;
}
export interface TagDeploymentSuite {
  collection?: SimpleCollection;
  deployments?: Deployments;
  [k: string]: unknown | undefined;
}
export interface SimpleCollection {
  name: string;
  description: string;
  notification_channels?: NotificationChannels;
  [k: string]: unknown | undefined;
}
export interface TagDeployment {
  column_selectors?: ColumnSelectors2;
  metrics: Metrics1;
  tag_id?: TagId1;
  [k: string]: unknown | undefined;
}
export interface TableDeploymentSuite {
  collection?: SimpleMetricDefinition;
  deployments: Deployments1;
  [k: string]: unknown | undefined;
}
export interface TableDeployment {
  fq_table_name: FqTableName;
  columns?: Columns;
  table_metrics?: TableMetrics;
  row_creation_time?: RowCreationTime;
  [k: string]: unknown | undefined;
}
export interface ColumnMetricDeployment {
  column_name: ColumnName;
  metrics: Metrics2;
  [k: string]: unknown | undefined;
}
