/* eslint-disable */

export type Environment = string;
export type Name = string;
export type OwnerTeam = string | null;
export type Repository = string;
export type BundleId = string;
export type BundleVersion = string;
/**
 * Confidence of an evidence or an evaluation.
 *
 * Manual attestations default to `medium` at best; automated signals from
 * trusted sources can reach `high`. `low` signals data that is inconsistent
 * or derived from weakly authenticated sources.
 */
export type ConfidenceLevel = 'high' | 'medium' | 'low';
export type ControlId = string;
export type ControlName = string;
/**
 * Criticality of a control, driving release gate impact.
 *
 * - `critical`: missing evidence forces `release_status = not_ready`.
 * - `high`: missing evidence forces `release_status = conditional` (at best).
 * - `medium`: missing evidence downgrades to `conditional` when paired with
 *   any other gap; otherwise tolerated.
 * - `low`: advisory; never blocks the release by itself.
 */
export type ControlCriticality = 'critical' | 'high' | 'medium' | 'low';
export type EvaluatedAt = string;
/**
 * Outcome of evaluating a control against collected evidence.
 */
export type ControlEvaluationStatus = 'met' | 'partial' | 'missing' | 'waived' | 'not_applicable';
export type EvidenceRefs = string[];
export type ExceptionRefs = string[];
/**
 * Compliance / governance frameworks referenced by controls.
 */
export type ControlFramework = 'NIST_SSDF' | 'OWASP_SAMM' | 'ORG_INTERNAL';
/**
 * Canonical evidence types supported by the MVP.
 *
 * Extending this enum requires updating control definitions that reference
 * the new type. Unknown evidence should be rejected at the parser boundary.
 */
export type EvidenceType =
  | 'sast_scan'
  | 'sca_scan'
  | 'secrets_scan'
  | 'dast_scan'
  | 'sbom'
  | 'test_result'
  | 'code_review'
  | 'pr_metadata'
  | 'workflow_run'
  | 'threat_model'
  | 'release_approval'
  | 'rollback_plan'
  | 'artifact_signature'
  | 'artifact_attestation'
  | 'generic_attestation'
  | 'model_card'
  | 'prompt_injection_test_result'
  | 'ai_safety_eval'
  | 'mcp_tool_inventory'
  | 'ai_training_data_lineage';
export type MissingRecommendedEvidenceTypes = EvidenceType[];
export type MissingRequiredEvidenceTypes = EvidenceType[];
export type Rationale = string;
export type ControlEvaluations = ControlEvaluation[];
export type DriverName = string | null;
export type Reason = string;
export type CollectedAt = string;
export type CommitSha = string;
/**
 * Distinct CVE identifiers extracted from the underlying scanner output. Populated by parsers that can correlate findings to CVEs (SARIF results with security/cve tags, CycloneDX vulnerabilities block). Used by the optional EPSS/KEV enrichment step. Empty when the parser cannot derive CVEs or when the evidence type does not correspond to vulnerability data (test_result, code_review, etc).
 */
export type CveIds = string[];
export type EvidenceId = string;
export type GeneratedAt = string | null;
/**
 * True when the evidence was provided via manual attestation.
 */
export type Manual = boolean;
export type Producer = string;
export type ArtifactPath = string | null;
export type ArtifactUri = string | null;
export type ContentType = string | null;
/**
 * Hex digest with algorithm prefix, e.g. sha256:abcd...
 */
export type IntegrityHash = string | null;
export type SizeBytes = number | null;
export type EvidenceRef = string | null;
export type Method = string;
export type Source = string;
export type Status = string;
export type ReleaseId = string;
export type Kind = string;
export type Uri = string | null;
export type Version = string | null;
/**
 * Operational status of an evidence artifact.
 *
 * `passed`/`failed` apply to evaluative evidence (scans, tests). `generated`
 * applies to artifacts that exist without a pass/fail verdict (SBOM). `missing`
 * is used by the evaluation engine when an expected evidence is not found.
 * `invalid` marks artifacts that were present but failed parsing/validation.
 */
export type EvidenceStatus = 'passed' | 'failed' | 'completed' | 'generated' | 'missing' | 'invalid' | 'unknown';
export type SubjectRef = string;
/**
 * Subject an evidence is attached to.
 */
export type SubjectType =
  | 'repository'
  | 'commit'
  | 'pull_request'
  | 'workflow_run'
  | 'build'
  | 'artifact'
  | 'release'
  | 'application'
  | 'ai_model'
  | 'ai_agent'
  | 'ai_dataset';
export type Summary = string | null;
export type CveCount = number;
export type CvesInKevCount = number;
export type CvesKnownRansomwareCount = number;
/**
 * Timestamp at which enrichment ran; volatile, stripped before structural hash.
 */
export type EnrichedAt = string | null;
/**
 * YYYY-MM-DD date stamped on the EPSS feed used for enrichment.
 */
export type EpssFeedDate = string | null;
/**
 * EPSS model version stamped on the feed header (e.g. 'v2026.01.04'). EPSS scores are not comparable across model versions, so recording it keeps day-to-day score deltas honest. None when enrichment is skipped or the feed header omits it.
 */
export type EpssModelVersion = string | null;
/**
 * YYYY-MM-DD date stamped on the CISA KEV catalog used for enrichment.
 */
export type KevFeedDate = string | null;
export type MaxEpssPercentile = number | null;
export type MaxEpssScore = number | null;
export type CveId = string;
export type EpssPercentile = number;
export type EpssScore = number;
export type InKev = boolean;
export type KnownRansomware = boolean;
/**
 * Up to N CVEs sorted by EPSS percentile (highest first).
 */
export type TopRiskCves = TopRiskCve[];
export type Evidence = NormalizedEvidence[];
export type ApprovedAt = string;
export type Approver = string;
export type ExceptionId = string;
export type ExpiresAt = string;
export type Justification = string;
/**
 * Ticket or document where the waiver was recorded.
 */
export type Reference = string | null;
export type Application1 = string | null;
export type ReleaseId1 = string | null;
export type Exceptions = EvidenceException[];
export type Description = string;
export type Remediation = string | null;
export type Gaps = Gap[];
export type GeneratedAt1 = string;
/**
 * Content digest of the published artifact, e.g. sha256:...
 */
export type ArtifactDigest = string | null;
export type Branch = string;
export type BuildId = string | null;
export type PipelineRunId = string | null;
export type Tag = string | null;
export type ConfidenceScore = number;
export type ControlsMet = number;
export type ControlsMissing = number;
export type ControlsNotApplicable = number;
export type ControlsPartial = number;
export type ControlsWaived = number;
export type EvidenceCoverageScore = number;
export type MissingCriticalEvidence = string[];
/**
 * Overall release readiness verdict computed from control evaluations.
 */
export type ReleaseStatus = 'ready' | 'conditional' | 'not_ready';
export type EpssPercentileThreshold = number;
export type ExploitableCveCount = number;
export type HighEpssCveCount = number;
export type KevBlocks = boolean;
export type KevCveCount = number;
export type KevRansomwareCveCount = number;
export type Mode = string;
export type TotalControls = number;

/**
 * Top-level, serializable container produced by the collector.
 */
export interface EvidenceBundle {
  application: Application;
  bundle_id: BundleId;
  bundle_version?: BundleVersion;
  control_evaluations?: ControlEvaluations;
  evidence?: Evidence;
  exceptions?: Exceptions;
  gaps?: Gaps;
  generated_at?: GeneratedAt1;
  release: ReleaseContext;
  summary: Summary1;
}
/**
 * Product or service under evaluation.
 */
export interface Application {
  environment?: Environment;
  name: Name;
  owner_team?: OwnerTeam;
  repository: Repository;
}
/**
 * Outcome of evaluating a control against the collected evidence set.
 */
export interface ControlEvaluation {
  confidence?: ConfidenceLevel;
  control_id: ControlId;
  control_name: ControlName;
  criticality: ControlCriticality;
  evaluated_at?: EvaluatedAt;
  evaluation_status: ControlEvaluationStatus;
  evidence_refs?: EvidenceRefs;
  exception_refs?: ExceptionRefs;
  framework: ControlFramework;
  missing_recommended_evidence_types?: MissingRecommendedEvidenceTypes;
  missing_required_evidence_types?: MissingRequiredEvidenceTypes;
  rationale: Rationale;
}
/**
 * Canonical evidence record after normalization.
 *
 * Every evaluation must reference normalized evidence via `evidence_id`.
 */
export interface NormalizedEvidence {
  /**
   * Optional classification provenance for the evidence_type. Populated by parsers that apply a heuristic (currently the SARIF normalizer); absent when the evidence type is self-evident from the format (SBOM, JUnit, ZAP).
   */
  classification?: EvidenceClassification | null;
  collected_at?: CollectedAt;
  commit_sha: CommitSha;
  confidence?: ConfidenceLevel;
  cve_ids?: CveIds;
  evidence_id: EvidenceId;
  evidence_type: EvidenceType;
  findings_count?: FindingsCount;
  generated_at?: GeneratedAt;
  manual?: Manual;
  metadata?: Metadata;
  producer: Producer;
  raw?: RawEvidenceRef | null;
  /**
   * Optional reachability annotation (§3.2). Populated externally (CodeQL reachability, Endor Labs, Semgrep Pro, manual review). The collector preserves the upstream verdict; it does not compute reachability itself.
   */
  reachability?: Reachability | null;
  release_id: ReleaseId;
  source: EvidenceSource;
  status: EvidenceStatus;
  subject_ref: SubjectRef;
  subject_type: SubjectType;
  summary?: Summary;
  /**
   * Optional EPSS/KEV enrichment summary for the CVEs in ``cve_ids``. Stays ``None`` unless the user opted into enrichment via the ``run --enrich`` flag or the standalone ``sdlc-evidence enrich`` command. The bundle remains schema-compatible with pre-enrichment consumers when this field is absent.
   */
  vulnerability_intelligence?: VulnerabilityIntelligence | null;
}
/**
 * How the ``evidence_type`` of a record was decided.
 *
 * Promotes the implicit confidence signal previously visible only in
 * ``evaluation.rationale`` text to a first-class bundle field so
 * downstream consumers can weight or filter evidence by classification
 * confidence without parsing free-form prose. The taxonomy is small on
 * purpose: any new ``reason`` value MUST be documented in
 * ``docs/limitations.md`` so reviewers know what to expect.
 */
export interface EvidenceClassification {
  confidence: ConfidenceLevel;
  driver_name?: DriverName;
  reason: Reason;
}
/**
 * Aggregated findings counters keyed by severity, e.g. {high: 0}.
 */
export interface FindingsCount {
  [k: string]: number | undefined;
}
export interface Metadata {
  [k: string]: unknown | undefined;
}
/**
 * Reference to a raw (non-normalized) artifact stored alongside the bundle.
 */
export interface RawEvidenceRef {
  artifact_path?: ArtifactPath;
  artifact_uri?: ArtifactUri;
  content_type?: ContentType;
  integrity_hash?: IntegrityHash;
  size_bytes?: SizeBytes;
}
/**
 * Optional reachability annotation for an SCA / dependency finding (§3.2).
 *
 * Records whether the vulnerable code path is reachable from the
 * application entry points. Source = whichever tool produced the
 * signal (CodeQL reachability, Endor Labs, Semgrep Pro, or a manual
 * review). The collector **does not** re-derive reachability; it
 * only stores the upstream verdict so consumers can filter findings
 * by reachable / not_reachable / unknown.
 */
export interface Reachability {
  evidence_ref?: EvidenceRef;
  method?: Method;
  source: Source;
  status: Status;
}
/**
 * Origin system that produced an evidence artifact.
 */
export interface EvidenceSource {
  kind: Kind;
  name: Name;
  uri?: Uri;
  version?: Version;
}
/**
 * EPSS + CISA KEV enrichment aggregated for a single evidence record.
 *
 * Computed by the optional ``enrich`` step (CLI flag ``--enrich`` on
 * ``run``, or the standalone ``sdlc-evidence enrich`` command). When the
 * enrichment step is skipped the field stays ``None`` and the bundle
 * behaves exactly like it did pre-enrichment, so consumers that never
 * opt in are unaffected.
 *
 * Source feeds:
 *
 * * EPSS — https://epss.cyentia.com/ (FIRST.org, public CSV, refreshed
 *   daily). ``epss_score`` is the probability of exploitation in the
 *   next 30 days; ``epss_percentile`` is the position within the day's
 *   distribution.
 * * CISA KEV — https://www.cisa.gov/known-exploited-vulnerabilities-catalog
 *   (JSON catalog of vulnerabilities confirmed exploited in the wild).
 */
export interface VulnerabilityIntelligence {
  cve_count?: CveCount;
  cves_in_kev_count?: CvesInKevCount;
  cves_known_ransomware_count?: CvesKnownRansomwareCount;
  enriched_at?: EnrichedAt;
  epss_feed_date?: EpssFeedDate;
  epss_model_version?: EpssModelVersion;
  kev_feed_date?: KevFeedDate;
  max_epss_percentile?: MaxEpssPercentile;
  max_epss_score?: MaxEpssScore;
  top_risk_cves?: TopRiskCves;
}
/**
 * A single CVE selected for top-risk listing in vulnerability intelligence.
 *
 * Kept small on purpose: only the fields a maintainer needs to decide
 * whether to patch *this week* vs *batch later*. Full CVE detail lives
 * in the raw scanner artefacts referenced by ``raw.artifact_path``.
 */
export interface TopRiskCve {
  cve_id: CveId;
  epss_percentile: EpssPercentile;
  epss_score: EpssScore;
  in_kev?: InKev;
  known_ransomware?: KnownRansomware;
}
/**
 * Formal, time-bound waiver that allows a control to pass without
 * its required evidence being present.
 *
 * Exceptions must have an approver, a written justification, and an
 * expiration date. The engine refuses expired or unscoped exceptions.
 */
export interface EvidenceException {
  approved_at: ApprovedAt;
  approver: Approver;
  control_id: ControlId;
  exception_id: ExceptionId;
  expires_at: ExpiresAt;
  justification: Justification;
  reference?: Reference;
  scope?: ExceptionScope;
}
/**
 * Scope to which an exception applies.
 */
export interface ExceptionScope {
  application?: Application1;
  release_id?: ReleaseId1;
}
/**
 * A concrete missing or weak evidence that impacts release readiness.
 */
export interface Gap {
  control_id: ControlId;
  criticality: ControlCriticality;
  description: Description;
  evidence_type?: EvidenceType | null;
  remediation?: Remediation;
}
/**
 * Release candidate context that anchors every evidence collected.
 */
export interface ReleaseContext {
  artifact_digest?: ArtifactDigest;
  branch?: Branch;
  build_id?: BuildId;
  commit_sha: CommitSha;
  pipeline_run_id?: PipelineRunId;
  release_id: ReleaseId;
  tag?: Tag;
}
/**
 * Aggregated verdict and scores for the bundle.
 */
export interface Summary1 {
  confidence_score: ConfidenceScore;
  controls_met: ControlsMet;
  controls_missing: ControlsMissing;
  controls_not_applicable: ControlsNotApplicable;
  controls_partial: ControlsPartial;
  controls_waived: ControlsWaived;
  evidence_coverage_score: EvidenceCoverageScore;
  missing_critical_evidence?: MissingCriticalEvidence;
  release_status: ReleaseStatus;
  risk_assessment?: RiskAssessment | null;
  total_controls: TotalControls;
}
/**
 * Risk-weighted verdict rationale (T6.6, opt-in).
 *
 * Populated when the run was invoked with ``--risk-mode epss-weighted``.
 * ``None`` when the default presence-based verdict is in effect, which
 * preserves byte-stability for pre-T6.6 bundles.
 */
export interface RiskAssessment {
  base_release_status: ReleaseStatus;
  epss_percentile_threshold: EpssPercentileThreshold;
  exploitable_cve_count: ExploitableCveCount;
  high_epss_cve_count: HighEpssCveCount;
  kev_blocks?: KevBlocks;
  kev_cve_count: KevCveCount;
  kev_ransomware_cve_count: KevRansomwareCveCount;
  mode: Mode;
  rationale?: Rationale;
}
