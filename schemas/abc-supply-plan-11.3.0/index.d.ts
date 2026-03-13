/* eslint-disable */

/**
 * The start date for the plan.  Format: first day of a month.
 */
export type PlanDate = string;
/**
 * Notes or comments about the plan in a specified format.  Since there is no JSON Schema for draft-js, the underlying component for mui-rte, format abc-draft-js_RawDraftContentState is enforced by calling https://draftjs.org/docs/api-reference-data-conversion/#convertfromraw.  see also: https://github.com/facebookarchive/draft-js/issues/2071 and https://github.com/facebookarchive/draft-js/issues/1544
 */
export type PlanNotes = string;
/**
 * An analytics item that can be either a time series or an analytics note
 */
export type AnalyticsItem = TimeSeries | AnalyticsNoteItem | DemandConsumptionAllocationItem;
/**
 * The aggregation level for time series data display
 */
export type TimeAggregateType = 'Annual' | 'Quarterly' | 'Monthly';
/**
 * Represents the state of a material in the system including its attributes and planning parameters.
 *
 * This interface was referenced by `ABCMaterialsMap`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 */
export type ABCMaterialState = {
  [k: string]: unknown | undefined;
};
/**
 * Unique identifier of the recipe.
 */
export type RecipeID = number;
/**
 * Method for allocating downstream consumption to upstream materials.
 */
export type ConsumptionAllocation = 'PercentAllocation' | 'PriorityAllocation';
/**
 * Defines a time-specific percentage value within a valid date range, adhering to percentage constraints.
 */
export type PercentTimeDependentValue = TemplateTimeDependentValue & PercentValueConstraints;
/**
 * The start date for the time-dependent value. Must be the first day of a month and within a valid date range.
 */
export type StartDate = string | null;
/**
 * The end date for the time-dependent value. Must be the last day of a month and within a valid date range.
 */
export type EndDate = string | null;
/**
 * Percentage allocations of materials to the recipe over different periods.
 */
export type PercentAllocations = PercentTimeDependentValue[];
/**
 * Defines a time-specific number within a valid range, ensuring it is non-negative.
 */
export type NonNegativeNumberTimeDependentValue = TemplateTimeDependentValue & NonNegativeNumberConstraints;
/**
 * A non-negative number, used in various contexts to represent quantities or counts.
 */
export type NonNegativeNumber = number;
/**
 * Priority allocations of materials to the recipe over different periods.
 */
export type PriorityAllocations = NonNegativeNumberTimeDependentValue[];
/**
 * The yield percentage of the recipe, indicating efficiency.
 */
export type PercentYield = number;

/**
 * Schema defining the structure of ABCSupplyPlan used for managing plan data in ABC-Plan's MasterPlanner.
 */
export interface ABCSupplyPlanJSONSchema {
  /**
   * Link to https://json.schemastore.org/abc-supply-plan-11.3.0.json
   */
  $schema: 'https://json.schemastore.org/abc-supply-plan-11.3.0.json';
  planDate: PlanDate;
  planNotes: PlanNotes;
  analytics: {
    items: AnalyticsItem[];
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
      minH?: number;
      /**
       * Maximum height in grid units
       */
      maxH?: number;
      /**
       * Minimum width in grid units
       */
      minW?: number;
      /**
       * Maximum width in grid units
       */
      maxW?: number;
      /**
       * Whether the item can be dragged
       */
      isDraggable?: boolean;
      /**
       * Whether the item can be resized
       */
      isResizable?: boolean;
    }[];
    tabs: {
      id: string;
      name: string;
      ordering: number;
    }[];
  };
  abcMaterialsMap: ABCMaterialsMap;
  recipeMap: RecipeMap;
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
  backgroundColor?: string;
  imageUrl?: string;
  text?: {
    content: string;
    fontFamily: string;
    fontSize: number;
    color: string;
    horizontalAlignment: 'left' | 'center' | 'right';
    verticalAlignment: 'top' | 'center' | 'bottom';
  };
}
export interface DemandConsumptionAllocationItem {
  id: string;
  name: string;
  type: 'DEMAND_OR_CONSUMPTION_ALLOCATION';
  subtitle: string;
  /**
   * Single material ID for demand details analysis
   */
  materialId: string;
  /**
   * Visualization type for the demand details
   */
  visualizationType: 'PIE_CHART' | 'TIME_SERIES';
  /**
   * Chart type for time series visualization (defaults to bar)
   */
  chartType?: 'line' | 'bar' | 'area';
  /**
   * Months to exclude from plan start (default: 0)
   */
  excludeMonthsFromBeginning?: number;
  /**
   * Months to exclude from plan end (default: 0)
   */
  excludeMonthsFromEnd?: number;
  /**
   * Time aggregation type for TIME_SERIES mode
   */
  timeAggregateType?: 'Annual' | 'Quarterly' | 'Monthly';
  displayConfig?: {
    /**
     * Show top N categories
     */
    showTopN: number;
    /**
     * Group remaining into Other
     */
    showOther: boolean;
    /**
     * Show percentages in labels
     */
    showPercentages: boolean;
    /**
     * Show legend
     */
    showLegend: boolean;
    /**
     * Min percentage to show separately
     */
    minSlicePercentage: number;
  };
  /**
   * Optional plan ID for comparison
   */
  planId?: string;
}
/**
 * A mapping of material IDs to their respective states within the ABC system.
 */
export interface ABCMaterialsMap {
  [k: string]: ABCMaterialState;
}
/**
 * A mapping of recipes, representing the acyclic relationships among materials. abcAreAllocationMethodsHomogeneous requires no mixing of Allocation Methods.  A downstream material cannot have mixed upstream recipes.  An upstream material cannot have mixed downstream recipes.
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
  allocationMethod: ConsumptionAllocation;
  percentAllocations: PercentAllocations;
  priorityAllocations: PriorityAllocations;
  percentYield: PercentYield;
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
 * Constraints for percentage values, defining the valid range as 0% to 100%.
 */
export interface PercentValueConstraints {
  /**
   * During a particular period of time for this recipe, how much of the downstream consumption is allocated to the upstream material.  Format: 0-1 which correspond to 0%-100%.
   */
  timeDependentValue: number;
  [k: string]: unknown | undefined;
}
/**
 * Defines constraints for numbers to ensure they are non-negative, used in various contexts.
 */
export interface NonNegativeNumberConstraints {
  timeDependentValue: NonNegativeNumber;
  [k: string]: unknown | undefined;
}
