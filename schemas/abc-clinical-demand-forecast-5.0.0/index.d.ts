/* eslint-disable */

/**
 * Optional notes about the clinical demand forecast plan.
 */
export type PlanNotes = string;
export type ABCAnalyticsItem = TimeSeries | AnalyticsNoteItem;
/**
 * The aggregation level for time series data display
 */
export type TimeAggregateType = 'Annual' | 'Quarterly' | 'Monthly';
/**
 * Hex color string for the note's background.
 */
export type BackgroundColor = string;
/**
 * URL of an image to display in the note. Null means no image is set.
 */
export type ImageURL = string | null;
/**
 * Name of the clinical trial study.
 */
export type StudyName = string;
/**
 * Phase of the clinical trial.
 */
export type StudyPhase = 'phase_i' | 'phase_ii' | 'phase_iii' | 'phase_iv';
/**
 * Summary of the trial protocol. Optional field with recommended default: empty string.
 */
export type ProtocolSummary = string;
/**
 * Disease category being treated (e.g., Oncology, CNS, Rare Disease). Will be normalized by LLM for benchmarking. Required field with recommended default: empty string.
 */
export type TherapeuticArea = string;
/**
 * Target number of subjects to complete the trial.
 */
export type TargetCompleted = number;
/**
 * Fraction of subjects who fail screening (0–1, where 0.20 means 20%).
 */
export type ScreenFailureRate = number;
/**
 * Fraction of enrolled subjects who drop out of the study entirely and stop receiving all doses (0–1, where 0.05 means 5%). NOTE: This is different from adverse events in dose escalation regimens. Attrition causes subjects to exit the study early, while adverse events only prevent dose escalation but subjects continue receiving doses at their maximum tolerated level.
 */
export type AttritionRate = number;
/**
 * Display name of the kit.
 */
export type KitName = string;
/**
 * This interface was referenced by `Items`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export type KitNode = KitContainer | KitItem;
/**
 * Discriminator identifying this as a container node.
 */
export type NodeType = 'container';
/**
 * Name of the container.
 */
export type Name = string;
/**
 * Type of container.
 */
export type DeliveryForm = 'bottle' | 'carton' | 'dose_pack' | 'blister_pack';
/**
 * Display order of this node within its parent. Lower numbers appear first.
 */
export type Ordering = number;
/**
 * Discriminator identifying this as an item node.
 */
export type NodeType1 = 'item';
/**
 * Type of pharmaceutical item.
 */
export type DeliveryForm1 = 'tablet' | 'capsule' | 'vial' | 'syringe' | 'sachet';
/**
 * Number of units contained in this item within one kit. For example, if this is a bottle containing tablets, quantity=10 means the bottle contains 10 tablets. This is NOT the same as dosingRegimen.kitItemQuantities, which specifies consumption per dose. This quantity field defines the container/packaging size.
 */
export type Quantity = number;
/**
 * Dosage amount.
 */
export type Dosage = number;
/**
 * Units of dosage (e.g., mg, ml).
 */
export type Units = string;
/**
 * Description of the dosing regimen.
 */
export type Description = string;
/**
 * Discriminated union: either an active regimen definition (isPlacebo: false) or a placebo definition (isPlacebo: true).
 */
export type DosingRegimenDefinition = ActiveRegimenDefinition | PlaceboRegimenDefinition;
/**
 * Discriminator: false for active regimens.
 */
export type IsPlacebo = false;
/**
 * Total duration of treatment for all subjects. Must be greater than zero.
 */
export type TreatmentDuration = number;
/**
 * Unit of treatment duration.
 */
export type TreatmentDurationUnit = 'days' | 'weeks' | 'months' | 'years';
/**
 * Human-readable description of the dosing frequency (e.g., 'BID', 'capecitabine 14/7', 'weekly for 6 weeks then monthly'). Doubles as the AI generation prompt. null when created manually without AI.
 */
export type Description1 = string | null;
/**
 * Ordered array of dosing phases. Single-phase regimens have one element. Multi-phase regimens list phases in chronological order; the last phase has repeatFor: 0 (fills remainder of treatment).
 *
 * @minItems 1
 * @maxItems 10
 */
export type DosingPhases =
  | [DosingPhase]
  | [DosingPhase, DosingPhase]
  | [DosingPhase, DosingPhase, DosingPhase]
  | [DosingPhase, DosingPhase, DosingPhase, DosingPhase]
  | [DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase]
  | [DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase]
  | [DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase]
  | [DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase, DosingPhase]
  | [
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase
    ]
  | [
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase,
      DosingPhase
    ];
/**
 * Element i = doses in unit i of the repeating cycle. For cycleUnit 'days', element = doses on that day. For 'months', element = total doses in that calendar month.
 *
 * @minItems 1
 * @maxItems 365
 */
export type CycleDoses = [number, ...number[]];
/**
 * Time granularity. 'days' = fixed-length day cycle. 'months' = calendar month cycle.
 */
export type CycleUnit = 'days' | 'months';
/**
 * How many units of repeatForUnit the cycle repeats for. 0 = terminal phase (remainder of treatment).
 */
export type RepeatFor = number;
/**
 * Unit for repeatFor. Ignored when repeatFor is 0 (convention: match cycleUnit).
 */
export type RepeatForUnit = 'days' | 'weeks' | 'months' | 'years';
/**
 * Configuration for fixed dose regimens. Null if using another regimen type.
 */
export type FixedDoseConfiguration = FixedDoseConfiguration1 | null;
/**
 * Configuration for dose escalation regimens. Null if using another regimen type.
 */
export type DoseEscalationConfiguration = DoseEscalationConfiguration1 | null;
/**
 * Individual dose escalation level configuration. This is a discriminated union with three variants: First level (isFirstLevel=true), Intermediate level (isFinalLevel=false, has adverseEventRate), and Final level (isFinalLevel=true, no duration).
 *
 * This interface was referenced by `EscalationLevels`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export type DoseEscalationLevel = FirstDoseEscalationLevel | IntermediateDoseEscalationLevel | FinalDoseEscalationLevel;
/**
 * First escalation level. Has isFirstLevel=true, isFinalLevel=false, duration and durationUnit. Does NOT have adverseEventRate because adverse events occur when trialing a level, and there is no previous level to trial from.
 */
export type FirstDoseEscalationLevel = DoseEscalationLevelBase & {
  kitItemQuantities: unknown;
  isFirstLevel: IsFirstLevel;
  isFinalLevel: IsFinalLevel;
  duration: Duration;
  durationUnit: DurationUnit;
  ordering: unknown;
};
/**
 * Must be true for first level.
 */
export type IsFirstLevel = true;
/**
 * Must be false for first level (first level cannot also be final).
 */
export type IsFinalLevel = false;
/**
 * Duration of this escalation level.
 */
export type Duration = number;
/**
 * Unit of duration for this level.
 */
export type DurationUnit = 'days' | 'weeks' | 'months' | 'years';
/**
 * Intermediate escalation level (not first, not final). Has isFinalLevel=false, duration, durationUnit, and adverseEventRate. Does NOT have isFirstLevel property.
 */
export type IntermediateDoseEscalationLevel = DoseEscalationLevelBase & {
  kitItemQuantities: unknown;
  isFinalLevel: IsFinalLevel;
  duration: Duration;
  durationUnit: DurationUnit;
  adverseEventRate: AdverseEventRate;
  ordering: unknown;
};
/**
 * Fraction of subjects who experience adverse events when TRIALING THIS level from the previous level (0–1, where 0.10 means 10%).
 */
export type AdverseEventRate = number;
/**
 * Final escalation level. Has isFinalLevel=true and adverseEventRate. Does NOT have duration or durationUnit (subjects continue at final level until treatment ends).
 */
export type FinalDoseEscalationLevel = DoseEscalationLevelBase & {
  kitItemQuantities: unknown;
  isFinalLevel: IsFinalLevel2;
  adverseEventRate: AdverseEventRate;
  ordering: unknown;
};
/**
 * Must be true for final level.
 */
export type IsFinalLevel2 = true;
/**
 * Configuration for weight-based dosing regimens. Null if using another regimen type.
 */
export type WeightBasedConfiguration = WeightBasedConfiguration1 | null;
/**
 * Unit of weight measurement.
 */
export type WeightUnit = 'lbs' | 'kg';
/**
 * Minimum weight for this range (null for no lower bound).
 */
export type FromWeight = number | null;
/**
 * Maximum weight for this range (null for no upper bound).
 */
export type ToWeight = number | null;
/**
 * Expected fraction of subjects in this weight range (0–1, where 0.25 means 25%).
 */
export type ExpectedPercentage = number;
/**
 * Configuration for age-based dosing regimens. Null if using another regimen type.
 */
export type AgeBasedConfiguration = AgeBasedConfiguration1 | null;
/**
 * Unit of age measurement.
 */
export type AgeUnit = 'years' | 'months';
/**
 * Minimum age for this range (null for no lower bound).
 */
export type FromAge = number | null;
/**
 * Maximum age for this range (null for no upper bound).
 */
export type ToAge = number | null;
/**
 * Non-empty array of intervals between consecutive dispensation events, in dispensationIntervalUnit.
 */
export type DispensationIntervals = number[];
/**
 * Unit for dispensationIntervals. Independent of treatmentDurationUnit.
 */
export type DispensationIntervalUnit = 'days' | 'weeks' | 'months' | 'years';
/**
 * Discriminator: true for placebo regimens.
 */
export type IsPlacebo1 = true;
/**
 * ID of the active dosing regimen this placebo references. Placebo inherits all dosing configuration from the active regimen.
 */
export type PlaceboOf = string;
/**
 * Fraction of subjects allocated to this arm (0–1, where 0.50 means 50%).
 */
export type AllocationPercentage = number;
/**
 * This interface was referenced by `DosingRegimenSequence`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export type SequencePeriod = TreatmentPeriod | WashoutPeriod;
/**
 * Discriminator identifying this as a treatment period.
 */
export type PeriodType = 'treatment';
/**
 * ID of the dosing regimen used during this treatment period.
 */
export type DosingRegimenID = string;
/**
 * Discriminator identifying this as a washout period.
 */
export type PeriodType1 = 'washout';
/**
 * Months from when the trial begins until this arm starts enrolling. 0 means the arm begins enrolling at the start of the trial.
 */
export type TreatmentArmEnrollmentStartOffset = number;
/**
 * This interface was referenced by `Countries`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export type RegionConfig = RegionContainer | RegionLeaf;
/**
 * Name of the region container.
 */
export type RegionName = string;
/**
 * Activation start date inherited by descendant regions whose own value is null. Null at this container means the value is itself inherited from the nearest ancestor that sets it.
 */
export type ActivationStartDate = string | null;
/**
 * Subjects screened per site per month, inherited by descendant regions whose own value is null. Null at this container means the value is itself inherited from the nearest ancestor that sets it.
 */
export type ScreenRate = number | null;
/**
 * Sites activated per month, inherited by descendant regions whose own value is null. Null at this container means the value is itself inherited from the nearest ancestor that sets it.
 */
export type SiteActivationRate = number | null;
/**
 * Maximum patients enrollable per site, inherited by descendant regions whose own value is null. Null at this container means the value is itself inherited from the nearest ancestor that sets it.
 */
export type MaximumEnrollmentPerSite = number | null;
/**
 * Site seeding quantity per kit, as a map of kit ID to quantity, inherited by descendant regions. When a descendant has its own non-null map, ancestor entries are merged underneath (descendant keys win on conflict). Null at this container means the value is itself inherited from the nearest ancestor that sets it.
 */
export type SiteSeeding = null | {
  [k: string]: number | undefined;
};
/**
 * Months from site activation until first enrollment (First Patient In lead time), inherited by descendant regions whose own value is null. Null at this container means the value is itself inherited from the nearest ancestor that sets it; the resolved value falls back to 0 if no ancestor sets it.
 */
export type EnrollmentStartOffset = number | null;
/**
 * Discriminator identifying this as a leaf region node.
 */
export type NodeType3 = 'region';
/**
 * Total number of sites in this region.
 */
export type NumberOfSites = number;
/**
 * Total subjects enrolled for this region and month.
 */
export type TotalEnrolled = number;
/**
 * Trial design type: parallel (single regimen per arm) or crossOver (sequence of treatments with washout periods).
 */
export type TrialDesign = 'parallel' | 'crossOver';

/**
 * Schema defining the structure of ABCClinicalDemandForecast used for clinical trial demand forecasting in ABC-Plan.
 */
export interface ABCClinicalDemandForecastJSONSchema {
  /**
   * Link to https://json.schemastore.org/abc-clinical-demand-forecast-5.0.0.json
   */
  $schema: 'https://json.schemastore.org/abc-clinical-demand-forecast-5.0.0.json';
  planNotes: PlanNotes;
  analytics: {
    items: ABCAnalyticsItem[];
    layouts: {
      contentId: string;
      /**
       * Grid column position (0-11 for 12-column grid)
       */
      x: number;
      /**
       * Grid row position
       */
      y: number;
      /**
       * ID of the tab this layout item belongs to
       */
      tabID: string;
      /**
       * Width in grid units (1-12)
       */
      w: number;
      /**
       * Height in grid units
       */
      h: number;
      /**
       * Minimum height in grid units
       */
      minH: number;
      /**
       * Maximum height in grid units
       */
      maxH: number;
      /**
       * Minimum width in grid units
       */
      minW: number;
      /**
       * Maximum width in grid units
       */
      maxW: number;
      /**
       * Whether the item can be dragged
       */
      isDraggable: boolean;
      /**
       * Whether the item can be resized
       */
      isResizable: boolean;
    }[];
    tabs: {
      id: string;
      name: string;
      ordering: number;
    }[];
  };
  clinicalDemandForecastConfiguration: ClinicalDemandForecastConfiguration;
  clinicalDemandCalculatedForecast: ClinicalDemandCalculatedForecast;
}
export interface TimeSeries {
  id: string;
  name: string;
  type: 'TIME_SERIES';
  subtitle: string;
  /**
   * Number of months to exclude from the beginning of the time series. Positive values trim, negative values add months before the plan start date.
   */
  excludeMonthsFromBeginning: number;
  /**
   * Number of months to exclude from the end of the time series. Positive values trim, negative values add months after the plan end date.
   */
  excludeMonthsFromEnd: number;
  timeAggregateType: TimeAggregateType;
  metrics: {
    [k: string]: unknown | undefined;
  }[];
}
export interface AnalyticsNoteItem {
  id: string;
  name: string;
  type: 'ANALYTICS_NOTE';
  subtitle: string;
  backgroundColor: BackgroundColor;
  imageUrl: ImageURL;
  text: Text;
}
/**
 * Text content and formatting for the note.
 */
export interface Text {
  content: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  horizontalAlignment: 'left' | 'center' | 'right';
  verticalAlignment: 'top' | 'center' | 'bottom';
}
/**
 * All algorithm inputs that affect forecast calculation. Any change to this object invalidates clinicalDemandCalculatedForecast.
 */
export interface ClinicalDemandForecastConfiguration {
  studyOverview: StudyOverview;
  enrollment: Enrollment;
  kitConfiguration: KitConfiguration;
  dosingRegimens: DosingRegimens;
  treatmentArms: TreatmentArms;
  subjectFlow: SubjectFlow;
  actuals: ClinicalDemandActuals;
  trialDesign: TrialDesign;
}
/**
 * Basic information about the clinical trial study.
 */
export interface StudyOverview {
  studyName: StudyName;
  studyPhase: StudyPhase;
  protocolSummary: ProtocolSummary;
  therapeuticArea: TherapeuticArea;
}
/**
 * Patient enrollment targets and rates.
 */
export interface Enrollment {
  targetCompleted: TargetCompleted;
  screenFailureRate: ScreenFailureRate;
  attritionRate: AttritionRate;
}
/**
 * Configuration of kits with containers and items, keyed by kit ID.
 */
export interface KitConfiguration {
  [k: string]: Kit;
}
/**
 * A kit containing items and containers. The kit ID is the key in the kitConfiguration map.
 *
 * This interface was referenced by `KitConfiguration`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface Kit {
  name: KitName;
  items: Items;
}
/**
 * Items and containers within this kit, keyed by node ID.
 */
export interface Items {
  [k: string]: KitNode;
}
/**
 * A structural container (bottle, blister pack) that holds other nodes. The container ID is the key in the parent items/children map.
 */
export interface KitContainer {
  nodeType: NodeType;
  name: Name;
  deliveryForm: DeliveryForm;
  children: Children;
  ordering: Ordering;
}
/**
 * Items contained within this container, keyed by node ID.
 */
export interface Children {
  [k: string]: KitNode;
}
/**
 * An actual pharmaceutical item (tablet, capsule, vial) with dosage. The item ID is the key in the parent items/children map.
 */
export interface KitItem {
  nodeType: NodeType1;
  name: Name;
  deliveryForm: DeliveryForm1;
  quantity: Quantity;
  dosage: Dosage;
  units: Units;
  ordering: Ordering;
}
/**
 * Available dosing regimens for the study, keyed by ID.
 */
export interface DosingRegimens {
  [k: string]: DosingRegimen;
}
/**
 * Dosing regimen configuration with nested dosingRegimenDefinition discriminated union.
 *
 * This interface was referenced by `DosingRegimens`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface DosingRegimen {
  name: Name;
  description: Description;
  dosingRegimenDefinition: DosingRegimenDefinition;
}
/**
 * Definition for an active (non-placebo) dosing regimen.
 */
export interface ActiveRegimenDefinition {
  isPlacebo: IsPlacebo;
  treatmentDuration: TreatmentDuration;
  treatmentDurationUnit: TreatmentDurationUnit;
  dosingFrequency: DosingFrequency;
  fixedConfig: FixedDoseConfiguration;
  doseEscalationConfig: DoseEscalationConfiguration;
  weightBasedConfig: WeightBasedConfiguration;
  ageBasedConfig: AgeBasedConfiguration;
  dispensationIntervals: DispensationIntervals;
  dispensationIntervalUnit: DispensationIntervalUnit;
}
/**
 * Phased dosing frequency. Each phase defines a repeating cycle pattern. The last phase runs for the remainder of the treatment.
 */
export interface DosingFrequency {
  description: Description1;
  phases: DosingPhases;
}
/**
 * A single phase within a dosing frequency. Defines a repeating cycle pattern and a repeat duration. repeatFor: 0 means terminal (remainder of treatment).
 */
export interface DosingPhase {
  cycleDoses: CycleDoses;
  cycleUnit: CycleUnit;
  repeatFor: RepeatFor;
  repeatForUnit: RepeatForUnit;
}
/**
 * Configuration for fixed dose regimens.
 */
export interface FixedDoseConfiguration1 {
  kitItemQuantities: KitItemQuantities;
}
/**
 * Mapping of kit item IDs to quantities consumed per dose.
 */
export interface KitItemQuantities {
  /**
   * This interface was referenced by `KitItemQuantities`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: number;
}
/**
 * Configuration for dose escalation levels.
 */
export interface DoseEscalationConfiguration1 {
  levels: EscalationLevels;
}
/**
 * Map of level IDs to dose escalation levels. Use ordering property to maintain display order.
 */
export interface EscalationLevels {
  [k: string]: DoseEscalationLevel;
}
/**
 * Base properties shared by all dose escalation level variants.
 */
export interface DoseEscalationLevelBase {
  kitItemQuantities: KitItemQuantities1;
  ordering: Ordering;
  [k: string]: unknown | undefined;
}
/**
 * Mapping of kit item IDs to quantities consumed per dose at this escalation level.
 */
export interface KitItemQuantities1 {
  /**
   * This interface was referenced by `KitItemQuantities1`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: number;
}
/**
 * Configuration for weight-based dosing.
 */
export interface WeightBasedConfiguration1 {
  weightUnit: WeightUnit;
  ranges: WeightRanges;
}
/**
 * Map of range IDs to weight ranges for kit assignment. Use ordering property to maintain display order.
 */
export interface WeightRanges {
  [k: string]: WeightRange;
}
/**
 * Weight range configuration for dosing.
 *
 * This interface was referenced by `WeightRanges`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface WeightRange {
  kitItemQuantities: KitItemQuantities2;
  fromWeight: FromWeight;
  toWeight: ToWeight;
  expectedPercentage: ExpectedPercentage;
  ordering: Ordering;
}
/**
 * Mapping of kit item IDs to quantities consumed per dose for subjects in THIS weight range. Each value represents the number of units (e.g., tablets) of that item required for a single dose. Different weight ranges can specify different quantities for the same item.
 */
export interface KitItemQuantities2 {
  /**
   * This interface was referenced by `KitItemQuantities2`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: number;
}
/**
 * Configuration for age-based dosing.
 */
export interface AgeBasedConfiguration1 {
  ageUnit: AgeUnit;
  ranges: AgeRanges;
}
/**
 * Map of range IDs to age ranges for kit assignment. Use ordering property to maintain display order.
 */
export interface AgeRanges {
  [k: string]: AgeRange;
}
/**
 * Age range configuration for dosing.
 *
 * This interface was referenced by `AgeRanges`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface AgeRange {
  kitItemQuantities: KitItemQuantities3;
  fromAge: FromAge;
  toAge: ToAge;
  expectedPercentage: ExpectedPercentage;
  ordering: Ordering;
}
/**
 * Mapping of kit item IDs to quantities consumed per dose for subjects in THIS age range. Each value represents the number of units (e.g., tablets) of that item required for a single dose. Different age ranges can specify different quantities for the same item.
 */
export interface KitItemQuantities3 {
  /**
   * This interface was referenced by `KitItemQuantities3`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: number;
}
/**
 * Definition for a placebo regimen that references an active regimen.
 */
export interface PlaceboRegimenDefinition {
  isPlacebo: IsPlacebo1;
  placeboOf: PlaceboOf;
}
/**
 * Treatment arms in the clinical trial, keyed by ID.
 */
export interface TreatmentArms {
  [k: string]: TreatmentArm;
}
/**
 * Treatment arm configuration from wizard step 5.
 *
 * This interface was referenced by `TreatmentArms`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface TreatmentArm {
  name: Name;
  allocationPercentage: AllocationPercentage;
  dosingRegimenSequence: DosingRegimenSequence;
  armEnrollmentStartOffset: TreatmentArmEnrollmentStartOffset;
}
/**
 * Sequence of treatment and washout periods for this treatment arm.
 */
export interface DosingRegimenSequence {
  [k: string]: SequencePeriod;
}
/**
 * Treatment period in a dosing regimen sequence.
 */
export interface TreatmentPeriod {
  periodType: PeriodType;
  dosingRegimenId: DosingRegimenID;
  ordering: Ordering;
}
/**
 * Washout period (no dosing) in a dosing regimen sequence.
 */
export interface WashoutPeriod {
  periodType: PeriodType1;
  duration: Duration;
  durationUnit: DurationUnit;
  ordering: Ordering;
}
/**
 * Site supply and region configuration.
 */
export interface SubjectFlow {
  regions: Countries;
}
/**
 * Region-specific site configuration, keyed by ID.
 */
export interface Countries {
  [k: string]: RegionConfig;
}
/**
 * Container node for grouping regions. Has subregions but no sites.
 */
export interface RegionContainer {
  nodeType: NodeType;
  regionName: RegionName;
  subregions: Subregions;
  activationStartDate: ActivationStartDate;
  screenRate: ScreenRate;
  siteActivationRate: SiteActivationRate;
  maxEnrollmentPerSite: MaximumEnrollmentPerSite;
  siteSeeding: SiteSeeding;
  enrollmentStartOffset: EnrollmentStartOffset;
}
/**
 * Child regions within this container.
 */
export interface Subregions {
  [k: string]: RegionConfig;
}
/**
 * Leaf node representing an operational region with sites.
 */
export interface RegionLeaf {
  nodeType: NodeType3;
  regionName: RegionName;
  numberOfSites: NumberOfSites;
  activationStartDate: ActivationStartDate;
  screenRate: ScreenRate;
  siteActivationRate: SiteActivationRate;
  maxEnrollmentPerSite: MaximumEnrollmentPerSite;
  siteSeeding: SiteSeeding;
  enrollmentStartOffset: EnrollmentStartOffset;
}
/**
 * Actual enrollment data entered by users to reconcile with forecast.
 */
export interface ClinicalDemandActuals {
  enrollment: EnrollmentActuals;
  sites: SitesActuals;
  notes: ActualsNotes;
  siteNotes: SiteActualsNotes;
}
/**
 * Actual enrollment by region and month.
 */
export interface EnrollmentActuals {
  /**
   * This interface was referenced by `EnrollmentActuals`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      total: TotalEnrolled;
      byArm: EnrollmentByArm;
    };
  };
}
/**
 * Enrollment count per treatment arm.
 */
export interface EnrollmentByArm {
  /**
   * This interface was referenced by `EnrollmentByArm`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: number;
}
/**
 * Actual site counts by region and month.
 */
export interface SitesActuals {
  /**
   * This interface was referenced by `SitesActuals`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: number;
  };
}
/**
 * Explanatory notes for enrollment actuals by region and month.
 */
export interface ActualsNotes {
  /**
   * This interface was referenced by `ActualsNotes`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
}
/**
 * Explanatory notes for site activation actuals by region and month.
 */
export interface SiteActualsNotes {
  /**
   * This interface was referenced by `SiteActualsNotes`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
}
/**
 * Calculated demand forecast with atomic monthly data per-region, per-arm.
 */
export interface ClinicalDemandCalculatedForecast {
  byRegion: ByRegion;
}
/**
 * Region-specific forecast data keyed by region ID.
 */
export interface ByRegion {
  [k: string]: RegionForecast | undefined;
}
/**
 * Atomic monthly forecast data for a single region. All values are monthly (not cumulative). UI computes cumulative views.
 */
export interface RegionForecast {
  sites: Sites;
  subjectsScreened: SubjectsScreened;
  subjectsScreenedOut: SubjectsScreenedOut;
  subjectsEnrolled: SubjectsEnrolled;
  subjectsActive: SubjectsActive;
  subjectsCompleted: SubjectsCompleted;
  subjectsDroppedOut: SubjectsDroppedOut;
  kitDemand: KitDemand;
  kitItemDemand: KitItemDemand;
  siteSeedingKitDemand: SiteSeedingKitDemand;
}
/**
 * Monthly count of sites opened this month.
 */
export interface Sites {
  /**
   * This interface was referenced by `Sites`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreened`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreenedOut`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap1`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap2`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Monthly count of subjects screened this month.
 */
export interface SubjectsScreened {
  /**
   * This interface was referenced by `Sites`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreened`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreenedOut`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap1`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap2`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Monthly count of subjects who failed screening this month.
 */
export interface SubjectsScreenedOut {
  /**
   * This interface was referenced by `Sites`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreened`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreenedOut`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap1`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap2`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Monthly subjects enrolled, broken down by treatment arm.
 */
export interface SubjectsEnrolled {
  [k: string]: PositiveDateMap;
}
/**
 * Mapping of dates to positive numerical values.
 *
 * This interface was referenced by `SubjectsEnrolled`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 *
 * This interface was referenced by `SubjectsActive`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 *
 * This interface was referenced by `SubjectsCompleted`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 *
 * This interface was referenced by `SubjectsDroppedOut`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 *
 * This interface was referenced by `SiteSeedingKitDemand`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface PositiveDateMap {
  /**
   * This interface was referenced by `Sites`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreened`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreenedOut`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap1`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap2`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Monthly change in active subjects (new active this month), broken down by treatment arm.
 */
export interface SubjectsActive {
  [k: string]: PositiveDateMap;
}
/**
 * Monthly subjects who completed treatment, broken down by treatment arm.
 */
export interface SubjectsCompleted {
  [k: string]: PositiveDateMap;
}
/**
 * Monthly subjects who dropped out, broken down by treatment arm.
 */
export interface SubjectsDroppedOut {
  [k: string]: PositiveDateMap;
}
/**
 * Monthly kit demand (whole kits rounded up), broken down by treatment arm and kit ID. Use this for supply planning - it accounts for buffer/waste in partially-used bottles.
 */
export interface KitDemand {
  /**
   * Mapping of sequence period IDs to kit demand for this arm.
   *
   * This interface was referenced by `KitDemand`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: {
    /**
     * Mapping of kit IDs to KitDemandEntry for this sequence period.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      [k: string]: KitDemandEntry;
    };
  };
}
/**
 * Kit demand with placeboOf tagging for active/placebo separation.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface KitDemandEntry {
  demand: PositiveDateMap1;
  /**
   * Regimen ID this is placebo of, or null if active.
   */
  placeboOf: string | null;
}
/**
 * Mapping of dates to positive numerical values.
 */
export interface PositiveDateMap1 {
  /**
   * This interface was referenced by `Sites`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreened`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreenedOut`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap1`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap2`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Monthly kit item consumption (what patients actually receive), broken down by treatment arm and item ID. Displayed as 'Dosing' in the UI. Note: This is consumption, not supply demand - it does not include buffer/waste from partially-used bottles. For supply planning, use kitDemand.
 */
export interface KitItemDemand {
  /**
   * Mapping of sequence period IDs to kit item demand for this arm.
   *
   * This interface was referenced by `KitItemDemand`'s JSON-Schema definition
   * via the `patternProperty` ".*".
   */
  [k: string]: {
    /**
     * Mapping of item IDs to KitItemDemandEntry for this sequence period.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      [k: string]: KitItemDemandEntry;
    };
  };
}
/**
 * Kit item consumption entry with placeboOf tagging for active/placebo separation. Represents what patients actually receive, not supply demand.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface KitItemDemandEntry {
  demand: PositiveDateMap2;
  /**
   * Regimen ID this is placebo of, or null if active.
   */
  placeboOf: string | null;
}
/**
 * Mapping of dates to positive numerical values.
 */
export interface PositiveDateMap2 {
  /**
   * This interface was referenced by `Sites`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreened`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `SubjectsScreenedOut`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap1`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PositiveDateMap2`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Site seeding kit demand - kits shipped when sites activate (not treatment-driven). Keyed by kit ID.
 */
export interface SiteSeedingKitDemand {
  [k: string]: PositiveDateMap;
}
