/* eslint-disable */

/**
 * Open Service Reliability Manifest - Define service reliability requirements as code
 * https://github.com/rsionnach/opensrm
 */
export type OpenSRM = ServiceReliabilityManifest | Template;
/**
 * Service operational pattern
 * https://github.com/rsionnach/opensrm#service-types
 */
export type ServiceType = 'api' | 'worker' | 'stream' | 'ai-gate' | 'batch' | 'database';
/**
 * Latency SLO - measures response time at specified percentiles
 */
export type LatencySLO = LatencySLO1 & {
  /**
   * Target median (50th percentile) latency
   */
  p50?: string;
  /**
   * Target 90th percentile latency
   */
  p90?: string;
  /**
   * Target 95th percentile latency
   */
  p95?: string;
  /**
   * Target 99th percentile latency
   */
  p99?: string;
  /**
   * Target 99.9th percentile latency
   */
  p999?: string;
  /**
   * Ratio of requests meeting the latency threshold
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
};
export type LatencySLO1 = {
  [k: string]: unknown | undefined;
};
/**
 * Processing time SLO - job completion time for worker services
 */
export type ProcessingTimeSLO = ProcessingTimeSLO1 & {
  /**
   * Target median processing time
   */
  p50?: string;
  /**
   * Target 90th percentile
   */
  p90?: string;
  /**
   * Target 95th percentile
   */
  p95?: string;
  /**
   * Target 99th percentile
   */
  p99?: string;
  /**
   * Ratio of jobs meeting the time threshold
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
};
export type ProcessingTimeSLO1 = {
  [k: string]: unknown | undefined;
};
/**
 * Duration SLO - job execution time for batch services
 */
export type DurationSLO = DurationSLO1 & {
  /**
   * Target median duration
   */
  p50?: string;
  /**
   * Target 90th percentile
   */
  p90?: string;
  /**
   * Target 95th percentile
   */
  p95?: string;
  /**
   * Target 99th percentile
   */
  p99?: string;
  /**
   * Ratio of jobs meeting threshold
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
};
export type DurationSLO1 = {
  [k: string]: unknown | undefined;
};
/**
 * Query latency SLO - response time for database services
 */
export type QueryLatencySLO = QueryLatencySLO1 & {
  /**
   * Target median query latency
   */
  p50?: string;
  /**
   * Target 90th percentile
   */
  p90?: string;
  /**
   * Target 95th percentile
   */
  p95?: string;
  /**
   * Target 99th percentile
   */
  p99?: string;
  /**
   * Target 99.9th percentile
   */
  p999?: string;
  /**
   * Ratio of queries meeting threshold
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
};
export type QueryLatencySLO1 = {
  [k: string]: unknown | undefined;
};
/**
 * Feedback latency SLO - measures time until decision quality is known
 * https://github.com/rsionnach/opensrm#judgment-slos
 */
export type FeedbackLatencySLO = FeedbackLatencySLO1 & {
  /**
   * Target for median feedback latency
   */
  p50?: string;
  /**
   * Target for 90th percentile feedback latency
   */
  p90?: string;
};
export type FeedbackLatencySLO1 = {
  [k: string]: unknown | undefined;
};
/**
 * Duration format: number followed by ms, s, m, h, d, or w
 */
export type Duration = string;

/**
 * Service Reliability Manifest - defines reliability requirements for a service
 */
export interface ServiceReliabilityManifest {
  /**
   * Schema version. Must be srm/v1
   */
  apiVersion: 'srm/v1';
  /**
   * Document type
   */
  kind: 'ServiceReliabilityManifest';
  metadata: Metadata;
  spec: Spec;
}
/**
 * Service identity and classification
 */
export interface Metadata {
  /**
   * Unique service identifier (lowercase alphanumeric with hyphens)
   */
  name: string;
  /**
   * Owning team identifier
   */
  team: string;
  /**
   * Service criticality level
   */
  tier: 'critical' | 'high' | 'standard' | 'low';
  /**
   * Name of template to inherit from
   */
  template?: string;
  /**
   * Human-readable description
   */
  description?: string;
  /**
   * Key-value pairs for filtering/grouping
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Arbitrary metadata (not used for selection)
   */
  annotations?: {
    [k: string]: string | undefined;
  };
}
/**
 * Reliability requirements
 */
export interface Spec {
  type?: ServiceType;
  slos?: SLOs;
  contract?: Contract;
  instrumentation?: Instrumentation;
  /**
   * Upstream dependencies
   */
  dependencies?: Dependency[];
  ownership?: Ownership;
  observability?: Observability;
  deployment?: Deployment;
}
/**
 * Service Level Objectives
 */
export interface SLOs {
  availability?: AvailabilitySLO;
  latency?: LatencySLO;
  error_rate?: ErrorRateSLO;
  throughput?: ThroughputSLO;
  processing_time?: ProcessingTimeSLO;
  lag?: LagSLO;
  success_rate?: SuccessRateSLO;
  duration?: DurationSLO;
  schedule_adherence?: ScheduleAdherenceSLO;
  data_freshness?: DataFreshnessSLO;
  query_latency?: QueryLatencySLO;
  replication_lag?: ReplicationLagSLO;
  connection_availability?: ConnectionAvailabilitySLO;
  /**
   * References to external OpenSLO files
   */
  openslo?: {
    /**
     * Path to OpenSLO file
     */
    path: string;
  }[];
  /**
   * Custom SLO types
   */
  custom?: {
    /**
     * Custom SLO name
     */
    name: string;
    /**
     * Target value
     */
    target: number;
    /**
     * Unit of measurement
     */
    unit?: string;
    /**
     * Human-readable description
     */
    description?: string;
  }[];
  judgment?: JudgmentSLOs;
}
/**
 * Availability SLO - measures proportion of successful requests
 */
export interface AvailabilitySLO {
  /**
   * Target availability ratio (e.g., 0.9995 for 99.95%)
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Error rate SLO - measures proportion of failed requests
 */
export interface ErrorRateSLO {
  /**
   * Maximum error ratio (e.g., 0.001 for 0.1%)
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Throughput SLO - measures request processing rate
 */
export interface ThroughputSLO {
  /**
   * Minimum throughput
   */
  target: number;
  /**
   * Throughput unit
   */
  unit: 'rps' | 'rpm' | 'rph';
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Lag SLO - consumer lag for stream services
 */
export interface LagSLO {
  /**
   * Maximum acceptable lag in seconds
   */
  max_seconds: number;
  /**
   * Ratio of time within lag threshold
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Success rate SLO - measures proportion of successful operations
 */
export interface SuccessRateSLO {
  /**
   * Target success ratio (e.g., 0.995 for 99.5%)
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Schedule adherence SLO - measures timeliness of batch job starts
 */
export interface ScheduleAdherenceSLO {
  /**
   * Maximum acceptable delay from scheduled start time
   */
  max_delay: string;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Data freshness SLO - measures staleness of batch output data
 */
export interface DataFreshnessSLO {
  /**
   * Maximum acceptable age of output data
   */
  max_age: string;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Replication lag SLO for database services
 */
export interface ReplicationLagSLO {
  /**
   * Maximum acceptable replication lag (e.g., 1s, 500ms, 5m)
   */
  max_lag: string;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Connection availability SLO for database services
 */
export interface ConnectionAvailabilitySLO {
  /**
   * Target connection availability ratio (e.g., 0.9999 for 99.99%)
   */
  target: number;
  /**
   * Measurement window
   */
  window?: string;
}
/**
 * Judgment SLOs for AI gate services - measure decision quality
 * https://github.com/rsionnach/opensrm#judgment-slos
 */
export interface JudgmentSLOs {
  reversal_rate?: ReversalRateSLO;
  high_confidence_failure?: HighConfidenceFailureSLO;
  calibration?: CalibrationSLO;
  feedback_latency?: FeedbackLatencySLO;
}
/**
 * Reversal rate SLO - measures how often humans override AI decisions
 * https://github.com/rsionnach/opensrm#judgment-slos
 */
export interface ReversalRateSLO {
  /**
   * Maximum reversal ratio (e.g., 0.05 for 5%)
   */
  target: number;
  /**
   * SLO evaluation window
   */
  window: string;
  /**
   * Time to wait for reversals after a decision
   */
  observation_period?: string;
}
/**
 * High-confidence failure SLO - measures rate of confident but wrong decisions
 * https://github.com/rsionnach/opensrm#judgment-slos
 */
export interface HighConfidenceFailureSLO {
  /**
   * Maximum HCF ratio (e.g., 0.02 for 2%)
   */
  target: number;
  /**
   * SLO evaluation window
   */
  window: string;
  /**
   * What counts as high confidence
   */
  confidence_threshold?: number;
}
/**
 * Calibration SLO - measures if stated confidence matches actual accuracy (ECE)
 * https://github.com/rsionnach/opensrm#judgment-slos
 */
export interface CalibrationSLO {
  /**
   * Maximum Expected Calibration Error (e.g., 0.15)
   */
  target: number;
  /**
   * SLO evaluation window
   */
  window: string;
}
/**
 * Reliability guarantees promised to dependents
 * https://github.com/rsionnach/opensrm#contracts
 */
export interface Contract {
  /**
   * Promised uptime ratio
   */
  availability?: number;
  latency?: ContractLatency;
  throughput?: ContractThroughput;
  judgment?: ContractJudgment;
}
/**
 * Latency guarantees in a contract
 */
export interface ContractLatency {
  /**
   * Promised median latency
   */
  p50?: string;
  /**
   * Promised 99th percentile latency
   */
  p99?: string;
  /**
   * Promised 99.9th percentile latency
   */
  p999?: string;
}
/**
 * Throughput guarantees in a contract
 */
export interface ContractThroughput {
  /**
   * Maximum sustained requests per second
   */
  max_rps?: number;
  /**
   * Maximum burst capacity
   */
  burst?: number;
}
/**
 * Judgment guarantees in a contract for AI gate services
 */
export interface ContractJudgment {
  /**
   * Maximum promised reversal rate
   */
  max_reversal_rate?: number;
  /**
   * Maximum promised high-confidence failure rate
   */
  max_hcf_rate?: number;
  /**
   * Maximum promised feedback latency
   */
  max_feedback_latency?: string;
}
/**
 * Telemetry configuration for AI gate services
 */
export interface Instrumentation {
  /**
   * Event name mappings
   */
  events: {
    /**
     * Event name emitted when AI makes a decision
     */
    decision: string;
    /**
     * Event name emitted when a decision is overridden
     */
    reversal: string;
    /**
     * Event name emitted when ground truth is known
     */
    outcome?: string;
  };
  /**
   * Attribute name mappings
   */
  attributes?: {
    /**
     * Field name for decision identifier
     */
    decision_id?: string;
    /**
     * Field name for confidence score
     */
    confidence?: string;
    /**
     * Field name for decision value
     */
    decision?: string;
  };
}
/**
 * Upstream dependency and expected guarantees
 */
export interface Dependency {
  /**
   * Dependency identifier (service name)
   */
  service: string;
  /**
   * Type of dependency
   */
  type?: 'service' | 'database' | 'cache' | 'queue' | 'external';
  /**
   * Whether failure causes service failure
   */
  critical?: boolean;
  /**
   * Expected guarantees from dependency
   */
  expects?: {
    /**
     * Expected availability ratio
     */
    availability?: number;
    latency?: {
      /**
       * Expected 99th percentile latency
       */
      p99?: string;
    };
  };
  /**
   * URL to dependency's SRM manifest
   */
  manifest?: string;
}
/**
 * Service ownership information
 */
export interface Ownership {
  /**
   * Team identifier
   */
  team: string;
  /**
   * Slack channel for alerts (e.g., '#team-oncall')
   */
  slack?: string;
  /**
   * Team email address
   */
  email?: string;
  /**
   * On-call rotation or escalation policy name
   */
  escalation?: string;
  /**
   * PagerDuty integration
   */
  pagerduty?: {
    /**
     * PagerDuty service ID
     */
    service_id?: string;
    /**
     * PagerDuty escalation policy ID
     */
    escalation_policy_id?: string;
  };
  /**
   * URL to operational runbook
   */
  runbook?: string;
  /**
   * URL to service documentation
   */
  documentation?: string;
  /**
   * Whether on-call rotation is required
   */
  oncall_required?: boolean;
}
/**
 * Observability requirements
 */
export interface Observability {
  /**
   * Metric requirements
   */
  metrics?: {
    /**
     * Metric names that must exist
     */
    required?: string[];
    labels?: {
      /**
       * Labels that must be present
       */
      required?: string[];
    };
    /**
     * Metric naming convention
     */
    convention?: 'opentelemetry' | 'prometheus';
  };
  /**
   * Dashboard requirements
   */
  dashboards?: {
    /**
     * Whether dashboards must exist
     */
    required?: boolean;
    /**
     * URLs to service dashboards
     */
    urls?: string[];
  };
  /**
   * Alert requirements
   */
  alerts?: {
    /**
     * Whether alerts must be configured
     */
    required?: boolean;
    definitions?: {
      /**
       * Alert name
       */
      name: string;
      /**
       * Alert severity
       */
      severity: 'critical' | 'warning' | 'info';
      /**
       * Human-readable threshold description
       */
      threshold?: string;
    }[];
  };
  /**
   * Distributed tracing requirements
   */
  tracing?: {
    /**
     * Whether distributed tracing must be enabled
     */
    required?: boolean;
    /**
     * Expected sampling rate (0.0 - 1.0)
     */
    sampling_rate?: number;
  };
}
/**
 * Deployment requirements
 */
export interface Deployment {
  /**
   * Environments where service is deployed
   */
  environments?: string[];
  /**
   * Deployment gates
   */
  gates?: {
    error_budget?: {
      enabled?: boolean;
      threshold?: number;
    };
    slo_compliance?: {
      enabled?: boolean;
      min_compliance?: number;
    };
    recent_incidents?: {
      enabled?: boolean;
      lookback?: Duration;
      max_p1?: number;
      max_p2?: number;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Rollback configuration
   */
  rollback?: {
    /**
     * Whether automatic rollback is enabled
     */
    automatic?: boolean;
    criteria?: {
      /**
       * Error rate increase threshold
       */
      error_rate_increase?: string;
      /**
       * Latency increase threshold
       */
      latency_increase?: string;
    };
  };
}
/**
 * Reusable template for service reliability manifests
 */
export interface Template {
  /**
   * Schema version. Must be srm/v1
   */
  apiVersion: 'srm/v1';
  /**
   * Document type
   */
  kind: 'Template';
  metadata: TemplateMetadata;
  spec: TemplateSpec;
}
/**
 * Template identity
 */
export interface TemplateMetadata {
  /**
   * Unique template identifier
   */
  name: string;
  /**
   * Human-readable description
   */
  description?: string;
}
/**
 * Partial spec for template inheritance
 */
export interface TemplateSpec {
  type?: ServiceType;
  slos?: SLOs;
  ownership?: Ownership;
  instrumentation?: Instrumentation;
}
