/* eslint-disable */

/**
 * The start date for the plan.  Format: first day of a month.
 */
export type PlanDate = string;
/**
 * The identifier for the organization to which the plan belongs.
 */
export type OrganizationID = string;
/**
 * Notes or comments about the plan in a specified format.  Since there is no JSON Schema for draft-js, the underlying component for mui-rte, format abc-draft-js_RawDraftContentState is enforced by calling https://draftjs.org/docs/api-reference-data-conversion/#convertfromraw.  see also: https://github.com/facebookarchive/draft-js/issues/2071 and https://github.com/facebookarchive/draft-js/issues/1544
 */
export type PlanNotes = string;
/**
 * The X coordinate position of the material in a graphical representation.
 */
export type XCoordinate = number;
/**
 * The Y coordinate position of the material in a graphical representation.
 */
export type YCoordinate = number;
/**
 * Numeric value representing the order or sequence of the material.
 */
export type Ordering = number;
/**
 * The name of the material.
 */
export type MaterialName = string;
/**
 * The unit of measure used for the material.
 */
export type UnitOfMeasure = string;
/**
 * The shape of the material represented graphically.
 */
export type MaterialShape =
  | 'circle'
  | 'square'
  | 'diamond'
  | 'rectangle'
  | 'parallelogram'
  | 'trapezoid'
  | 'triangle'
  | 'pentagon'
  | 'hexagon';
/**
 * Colors may be specified in any string-based format supported by the Color constructor documented at https://www.npmjs.com/package/color
 */
export type Color = string;
/**
 * Indicates whether to carry over the expiry information for the material.
 */
export type ExpiryCarryover = boolean;
/**
 * Determines if the material is a node where capacity constraints are applied.
 */
export type CapacityConstraintNode = boolean;
/**
 * The method used for managing inventory levels, either target months forward coverage or minimum inventory.
 */
export type InventoryMethod = 'TargetMFC' | 'MinimumInventory';
/**
 * The precision of decimal places allowed for numerical entries related to the material.
 */
export type DecimalPrecision = number;
/**
 * The currency used for pricing and cost calculations of the material.
 */
export type Currency = string;
/**
 * The cost per unit of the material.
 */
export type UnitCost = number;
/**
 * Batch size for orders. Must be greater than 0 to plan, etc. The strictly non-negative requirement is a known issue being addressed.
 */
export type LotSize = number;
/**
 * Delay between Manufacture Date and Release Date.  Format: non-negative integer.
 */
export type LeadTime = number;
/**
 * Time during which no Planned Orders are allowed.  Format: non-negative integer.
 */
export type FirmingPeriod = number;
/**
 * Target Months Forward Coverage refers to a dynamic safety stock level—a buffer quantity of inventory designed to mitigate the risk of stock-outs caused by variability in Demand. In essence, it represents the number of months of Demand that could be satisfied assuming no additional material is manufactured.  Format: non-negative integer.
 */
export type TargetMFC = number;
/**
 * Minimum Inventory denotes the lowest stock level to prevent outages, triggering restock. Format: non-negative integer.
 */
export type MinimumInventory = number;
/**
 * Defines a time-specific integer value within a valid date range, ensuring it is non-negative.
 */
export type NonNegativeIntegerTimeDependentValue = TemplateTimeDependentValue & NonNegativeIntegerConstraints;
/**
 * The start date for the time-dependent value. Must be the first day of a month and within a valid date range.
 */
export type StartDate = string | null;
/**
 * The end date for the time-dependent value. Must be the last day of a month and within a valid date range.
 */
export type EndDate = string | null;
/**
 * An integer value that cannot be negative, typically representing quantities or counts in a time-dependent context.
 */
export type TimeDependentValue = number;
/**
 * List of shelf life values, each defined for a specific period of time.
 */
export type ShelfLives = NonNegativeIntegerTimeDependentValue[];
/**
 * Buffers to account for stopship scenarios, listed for different periods.
 */
export type StopshipBuffers = NonNegativeIntegerTimeDependentValue[];
/**
 * The identifier for the lot number of the inventory item. It must be at least 1 character in length.
 */
export type LotNumber = string;
/**
 * The quantity of the inventory item when first recorded. This must be a non-negative number.
 */
export type InitialInventoryQuantity = number;
/**
 * The date the item was manufactured. This date must be the first day of a month and fall within a valid date range.
 */
export type ManufactureDate = string;
/**
 * The date the item will expire. This date must be the last day of a month and fall within a valid date range.
 */
export type ExpirationDate = string;
/**
 * List of initial inventory records, each associated with specific lot and dates.
 */
export type InitialInventories = InitialInventory[];
/**
 * The name or identifier of the firm order.
 */
export type FirmOrderName = string;
/**
 * The quantity specified in the firm order. Must be a non-negative value.
 */
export type FirmOrderQuantity = number;
/**
 * The date the goods are scheduled to be manufactured. Must be the first day of the month and within valid date range.
 */
export type ManufactureDate1 = string;
/**
 * The date the goods are scheduled to be released. Must be the first day of the month and within valid date range.
 */
export type ReleaseDate = string;
/**
 * The expiration date of the product. Must be the last day of the month and within valid date range.
 */
export type ExpirationDate1 = string;
/**
 * List of firm orders with their respective quantities and dates.
 */
export type FirmOrders = FirmOrder[];
/**
 * The aggregation level for planning and reporting, e.g., annual, quarterly, or monthly.
 */
export type TimeAggregateType = 'Annual' | 'Quarterly' | 'Monthly';
/**
 * Defines how quantities are represented, e.g., in units, lots, or cost.
 */
export type ShowQuantitiesAs = 'Units' | 'Lots' | 'Cost';
/**
 * Determines the type of analysis to be performed on expiry data, focusing on expiration or stopship scenarios.
 */
export type ExpiryAnalysisType = 'Expiration' | 'Stopship';
/**
 * Indicates whether planning parameters are dependent on time, necessitating different values at different periods.
 */
export type TimeDependentPlanningParameters = boolean;
/**
 * Unique identifier of the recipe.
 */
export type RecipeID = number;
/**
 * Defines a time-specific percentage value within a valid date range, adhering to percentage constraints.
 */
export type PercentTimeDependentValue = TemplateTimeDependentValue & PercentValueConstraints;
/**
 * Percentage allocations of materials to the recipe over different periods.
 */
export type PercentAllocations = PercentTimeDependentValue[];
/**
 * The yield percentage of the recipe, indicating efficiency.
 */
export type PercentYield = number;

/**
 * Schema defining the structure of ABCSupplyPlan used for managing plan data in ABC-Plan's MasterPlanner.
 */
export interface ABCSupplyPlanJSONSchema {
  planDate: PlanDate;
  organizationID?: OrganizationID;
  planNotes: PlanNotes;
  abcMaterialsMap: ABCMaterialsMap;
  recipeMap: RecipeMap;
}
/**
 * A mapping of material IDs to their respective states within the ABC system.
 */
export interface ABCMaterialsMap {
  [k: string]: ABCMaterialState;
}
/**
 * Represents the state of a material in the system including its attributes and planning parameters.
 *
 * This interface was referenced by `ABCMaterialsMap`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 */
export interface ABCMaterialState {
  x: XCoordinate;
  y: YCoordinate;
  ordering: Ordering;
  abcMaterialName: MaterialName;
  uom: UnitOfMeasure;
  materialShape: MaterialShape;
  materialColor: Color;
  doExpiryCarryover: ExpiryCarryover;
  isCapacityConstraintNode: CapacityConstraintNode;
  inventoryMethod: InventoryMethod;
  decimalPrecision: DecimalPrecision;
  currency: Currency;
  unitCost: UnitCost;
  lotSize: LotSize;
  leadTime: LeadTime;
  firmingPeriod: FirmingPeriod;
  targetMFC: TargetMFC;
  minimumInventory: MinimumInventory;
  shelfLives?: ShelfLives;
  stopshipBuffers?: StopshipBuffers;
  initialInventories?: InitialInventories;
  firmOrders?: FirmOrders;
  demand?: Demand;
  otherDemand?: OtherDemand;
  otherDemandAnnotation?: OtherDemandAnnotation;
  actuals?: Actuals;
  plannedOrders?: PlannedOrders;
  expiryAdjustments?: ExpiryAdjustments;
  timeAggregateType?: TimeAggregateType;
  showQuantitiesAs?: ShowQuantitiesAs;
  expiryAnalysisType?: ExpiryAnalysisType;
  timeDependentPlanningParameters?: TimeDependentPlanningParameters;
}
/**
 * Base template for defining time-dependent values, specifying the valid date ranges for such values.
 */
export interface TemplateTimeDependentValue {
  startDate: StartDate;
  endDate: EndDate;
  [k: string]: unknown | undefined;
}
/**
 * Defines constraints for integer values to ensure they are non-negative, used in various time-dependent value configurations.
 */
export interface NonNegativeIntegerConstraints {
  timeDependentValue: TimeDependentValue;
  [k: string]: unknown | undefined;
}
/**
 * Defines the initial inventory of a material, including lot number and associated dates.
 */
export interface InitialInventory {
  lotNumber: LotNumber;
  initialInventoryQuantity: InitialInventoryQuantity;
  manufactureDate: ManufactureDate;
  expirationDate: ExpirationDate;
}
/**
 * Defines a firm order within the system, including order details and relevant dates.
 */
export interface FirmOrder {
  firmOrderName: FirmOrderName;
  firmOrderQuantity: FirmOrderQuantity;
  manufactureDate: ManufactureDate1;
  releaseDate: ReleaseDate;
  expirationDate: ExpirationDate1;
}
/**
 * Map of demand values with specific dates as keys.
 */
export interface Demand {
  /**
   * This interface was referenced by `Demand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `OtherDemand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `Actuals`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PlannedOrders`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Map of other types of demand not included in the primary demand values.
 */
export interface OtherDemand {
  /**
   * This interface was referenced by `Demand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `OtherDemand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `Actuals`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PlannedOrders`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Annotations related to other demand entries, providing additional context.
 */
export interface OtherDemandAnnotation {
  /**
   * This interface was referenced by `OtherDemandAnnotation`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: string;
}
/**
 * Map of actual quantities, corresponding to real data collected.
 */
export interface Actuals {
  /**
   * This interface was referenced by `Demand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `OtherDemand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `Actuals`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PlannedOrders`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Map of planned order quantities, anticipated ahead of time.
 */
export interface PlannedOrders {
  /**
   * This interface was referenced by `Demand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `OtherDemand`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `Actuals`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   *
   * This interface was referenced by `PlannedOrders`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * Adjustments made to account for expired materials, reducing quantities.
 */
export interface ExpiryAdjustments {
  /**
   * This interface was referenced by `ExpiryAdjustments`'s JSON-Schema definition
   * via the `patternProperty` "^\d{4}-(0[1-9]|1[0-2])-01$".
   */
  [k: string]: number;
}
/**
 * A mapping of recipes, representing the relationships and dependencies between materials.
 */
export interface RecipeMap {
  [k: string]: RecipeState;
}
/**
 * Defines a recipe within the system, including its components and yields.
 *
 * This interface was referenced by `RecipeMap`'s JSON-Schema definition
 * via the `patternProperty` "^\d+-\d+$".
 */
export interface RecipeState {
  recipe: RecipeID;
  percentAllocations: PercentAllocations;
  percentYield: PercentYield;
}
/**
 * Constraints for percentage values, defining the valid range as 0% to 100%.
 */
export interface PercentValueConstraints {
  /**
   * During a particular period of time for this recipe, how much of the downstream consumption is allocated to the upstream material.  Format: 0-1 which correspond to 0%-100%.
   */
  timeDependentValue: number;
  [k: string]: unknown | undefined;
}
