/* eslint-disable */

/**
 * Rule for a LOINC code, archetype, template.
 *
 * This interface was referenced by `RuleForALOINCCodeOrArchetype`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export type RuleCode =
  | {
      /**
       * Full URI for this rule.
       */
      uri?: string;
      /**
       * Name for this rule.
       */
      name?: string;
      /**
       * Description for this rule.
       */
      description?: string;
      /**
       * Keep the target elements for which there is not source data.
       */
      keep_missing_target_elements?: boolean;
      formats?: RuleFormats;
      map: MapValuesForElements;
      define?: Define;
      vars?: Vars;
    }
  | {
      /**
       * Full URI for this rule.
       */
      uri?: string;
      /**
       * Name for this rule.
       */
      name?: string;
      /**
       * Description for this rule.
       */
      description?: string;
      /**
       * Keep the target elements for which there is not source data.
       */
      keep_missing_target_elements?: boolean;
      set: SetValuesOfElements;
      define?: Define;
      vars?: Vars;
      choices?: Choices;
    };
/**
 * This interface was referenced by `ValueIntervals`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `ValueIntervals`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `ValueIntervals`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export type IntervalAsLowHighExample110 = string;
/**
 * List of keys to look for.
 */
export type OneOf = string[];
/**
 * Mapping format (e.g. FHIR).
 *
 * This interface was referenced by `MapFormats`'s JSON-Schema definition
 * via the `patternProperty` "^(fhir)$".
 */
export type ValuesOfElementsForTheFormat = MapFormat[];
export type MapValuesForElements = Map[];
/**
 * Define a list of choices from which a random item will be used.
 */
export type Choices = ChoicesMapEntry[];
export type SetValuesOfElements = Set[];

/**
 * Mapping for MapEHR.com v0.3.0
 */
export interface MapEHRMapping {
  define?: Define;
  vars?: Vars;
  rules?: Rules;
  /**
   * Keep the target elements for which there is not source data.
   */
  keep_missing_target_elements?: boolean;
}
/**
 * Define keys used in the rules. Example: weight: http://loinc.org/29463-7
 */
export interface Define {
  /**
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | undefined;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | undefined;
}
/**
 * Rules for LOINC codes, archetypes, templates.
 */
export interface Rules {
  [k: string]: RuleForALOINCCodeOrArchetype | undefined;
}
/**
 * Rules for a LOINC codes, archetypes, templates.
 *
 * This interface was referenced by `Rules`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface RuleForALOINCCodeOrArchetype {
  [k: string]: RuleCode | undefined;
}
/**
 * Models for formats from/to which to map values.
 */
export interface RuleFormats {
  [k: string]: RuleFormat | undefined;
}
/**
 * Mapping format (e.g. FHIR).
 *
 * This interface was referenced by `RuleFormats`'s JSON-Schema definition
 * via the `patternProperty` "^(fhir)$".
 */
export interface RuleFormat {
  /**
   * Full URI for the model in this format.
   */
  uri?: string;
  /**
   * Name for the model in this format.
   */
  name?: string;
  /**
   * Description for the model in this format.
   */
  description?: string;
  /**
   * Resource name for the model in this format.
   */
  resource?: string;
}
export interface Map {
  /**
   * Used to specify an RM attribute.
   */
  attribute?: string;
  /**
   * Used to specify an ADL path.
   */
  path?: string;
  element?: AnRMElement;
  elements?: Elements;
  formats?: MapFormats;
  define?: Define;
  vars?: Vars;
}
/**
 * An RM element.
 */
export interface AnRMElement {
  /**
   * Used to specify an RM attribute.
   */
  attribute?: string;
  /**
   * Used to specify an ADL path.
   */
  path?: string;
  elements?: Elements;
  /**
   * Value of the element. Can use formulas.
   */
  value?: string;
  /**
   * RM type of the element.
   */
  value_type?: string;
  /**
   * Value interval.
   */
  value_interval?: string;
  value_intervals?: ValueIntervals;
  /**
   * The name of the key in the choices to use for this element.
   */
  choice_key?: string;
  interpretation_interval?: InterpretationInterval;
  interpretation_intervals?: InterpretationIntervals;
}
/**
 * RM elements.
 */
export interface Elements {
  /**
   * This interface was referenced by `Elements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: AnRMElement | null | undefined;
}
/**
 * Value intervals for each key (e.g. units).
 */
export interface ValueIntervals {
  [k: string]: IntervalAsLowHighExample110 | undefined;
}
/**
 * Interpretation interval for the value.
 */
export interface InterpretationInterval {
  /**
   * Low value of the interpretation interval.
   */
  low: number;
  /**
   * High value of the interpretation interval.
   */
  high: number;
}
/**
 * Interpretation intervals for each key (e.g. units).
 */
export interface InterpretationIntervals {
  [k: string]: InterpretationInterval | undefined;
}
/**
 * Define formats from/to which the data will be mapped.
 */
export interface MapFormats {
  [k: string]: ValuesOfElementsForTheFormat | undefined;
}
export interface MapFormat {
  /**
   * Used to specify an attribute to the element.
   */
  attribute?: string;
  /**
   * Used to specify a path to the element.
   */
  path?: string;
  element?: MapFormatElement;
  elements?: MapFormatElements;
  define?: Define;
  vars?: Vars;
}
/**
 * Format element.
 */
export interface MapFormatElement {
  /**
   * Used to specify an attribute.
   */
  attribute?: string;
  /**
   * Used to specify a path.
   */
  path?: string;
  elements?: MapFormatElements;
  one_of?: OneOf;
}
/**
 * Format elements.
 */
export interface MapFormatElements {
  /**
   * This interface was referenced by `MapFormatElements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `MapFormatElements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: MapFormatElement | null | undefined;
}
export interface Set {
  /**
   * Used to specify an RM attribute.
   */
  attribute?: string;
  /**
   * Used to specify an ADL path.
   */
  path?: string;
  attributes?: Attributes;
  element?: AnRMElement;
  elements?: Elements;
  define?: Define;
  vars?: Vars;
  choices?: Choices;
  value_intervals?: ValueIntervals;
  interpretation_intervals?: InterpretationIntervals;
}
/**
 * RM type attributes.
 */
export interface Attributes {
  [k: string]: Attribute | undefined;
}
/**
 * An RM type attributes.
 *
 * This interface was referenced by `Attributes`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Attribute {
  attributes?: Attributes;
  elements?: Elements;
  define?: Define;
  vars?: Vars;
  choices?: Choices;
  /**
   * Value of the attribute. Can use formulas.
   */
  value?: string;
  /**
   * RM type of the attribute.
   */
  value_type?: string;
  /**
   * Value interval.
   */
  value_interval?: string;
  value_intervals?: ValueIntervals;
  /**
   * The name of the key in the choices to use for this attribute.
   */
  choice_key?: string;
  interpretation_interval?: InterpretationInterval;
  interpretation_intervals?: InterpretationIntervals;
}
export interface ChoicesMapEntry {
  /**
   * This interface was referenced by `ChoicesMapEntry`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: boolean | number | string | ChoicesMapEntry | undefined;
}
