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
      define?: Define3;
      vars?: Vars3;
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
      define?: Define6;
      vars?: Vars6;
      choices?: Choices2;
    };
/**
 * This interface was referenced by `ValueIntervals`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `ValueIntervals1`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `ValueIntervals2`'s JSON-Schema definition
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
/**
 * Define a list of choices from which a random item will be used.
 */
export type Choices1 = ChoicesMapEntry[];
export type SetValuesOfElements = Set[];
/**
 * Define a list of choices from which a random item will be used.
 */
export type Choices2 = ChoicesMapEntry[];

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
   * This interface was referenced by `Define1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Rules for LOINC codes, archetypes, templates.
 */
export interface Rules {
  [k: string]: RuleForALOINCCodeOrArchetype;
}
/**
 * Rules for a LOINC codes, archetypes, templates.
 *
 * This interface was referenced by `Rules`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface RuleForALOINCCodeOrArchetype {
  [k: string]: RuleCode;
}
/**
 * Models for formats from/to which to map values.
 */
export interface RuleFormats {
  [k: string]: RuleFormat;
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
  elements?: Elements1;
  formats?: MapFormats;
  define?: Define2;
  vars?: Vars2;
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
   * This interface was referenced by `Elements1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: AnRMElement1 | null;
}
/**
 * An RM element.
 */
export interface AnRMElement1 {
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
 * Value intervals for each key (e.g. units).
 */
export interface ValueIntervals {
  [k: string]: IntervalAsLowHighExample110;
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
  [k: string]: InterpretationInterval1;
}
/**
 * This interface was referenced by `InterpretationIntervals`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `InterpretationIntervals1`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `InterpretationIntervals2`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface InterpretationInterval1 {
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
 * RM elements.
 */
export interface Elements1 {
  /**
   * This interface was referenced by `Elements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: AnRMElement1 | null;
}
/**
 * Define formats from/to which the data will be mapped.
 */
export interface MapFormats {
  [k: string]: ValuesOfElementsForTheFormat;
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
  elements?: MapFormatElements1;
  define?: Define1;
  vars?: Vars1;
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
   * This interface was referenced by `MapFormatElements1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: MapFormatElement1 | null;
}
/**
 * Format element.
 */
export interface MapFormatElement1 {
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
export interface MapFormatElements1 {
  /**
   * This interface was referenced by `MapFormatElements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `MapFormatElements1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: MapFormatElement1 | null;
}
/**
 * Define keys used in the rules. Example: weight: http://loinc.org/29463-7
 */
export interface Define1 {
  /**
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars1 {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define keys used in the rules. Example: weight: http://loinc.org/29463-7
 */
export interface Define2 {
  /**
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars2 {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define keys used in the rules. Example: weight: http://loinc.org/29463-7
 */
export interface Define3 {
  /**
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars3 {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
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
  element?: AnRMElement2;
  elements?: Elements3;
  define?: Define5;
  vars?: Vars5;
  choices?: Choices1;
  value_intervals?: ValueIntervals2;
  interpretation_intervals?: InterpretationIntervals2;
}
/**
 * RM type attributes.
 */
export interface Attributes {
  [k: string]: Attribute;
}
/**
 * An RM type attributes.
 *
 * This interface was referenced by `Attributes`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Attribute {
  attributes?: Attributes1;
  elements?: Elements2;
  define?: Define4;
  vars?: Vars4;
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
  value_intervals?: ValueIntervals1;
  /**
   * The name of the key in the choices to use for this attribute.
   */
  choice_key?: string;
  interpretation_interval?: InterpretationInterval2;
  interpretation_intervals?: InterpretationIntervals1;
}
/**
 * RM type attributes.
 */
export interface Attributes1 {
  [k: string]: Attribute;
}
/**
 * RM elements for the RM type attribute.
 */
export interface Elements2 {
  /**
   * This interface was referenced by `Elements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: AnRMElement1 | null;
}
/**
 * Define keys used in the rules. Example: weight: http://loinc.org/29463-7
 */
export interface Define4 {
  /**
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars4 {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
export interface ChoicesMapEntry {
  /**
   * This interface was referenced by `ChoicesMapEntry`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: boolean | number | string | ChoicesMapEntry;
}
/**
 * Value intervals for each key (e.g. units).
 */
export interface ValueIntervals1 {
  [k: string]: IntervalAsLowHighExample110;
}
/**
 * Interpretation interval for the value.
 */
export interface InterpretationInterval2 {
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
export interface InterpretationIntervals1 {
  [k: string]: InterpretationInterval1;
}
/**
 * An RM element.
 */
export interface AnRMElement2 {
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
export interface Elements3 {
  /**
   * This interface was referenced by `Elements`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Elements3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: AnRMElement1 | null;
}
/**
 * Define keys used in the rules. Example: weight: http://loinc.org/29463-7
 */
export interface Define5 {
  /**
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars5 {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Value intervals for each key (e.g. units).
 */
export interface ValueIntervals2 {
  [k: string]: IntervalAsLowHighExample110;
}
/**
 * Interpretation intervals for each key (e.g. units).
 */
export interface InterpretationIntervals2 {
  [k: string]: InterpretationInterval1;
}
/**
 * Define keys used in the rules. Example: weight: http://loinc.org/29463-7
 */
export interface Define6 {
  /**
   * This interface was referenced by `Define`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Define6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
/**
 * Define variables used in the rules. Example: default_bmi: randomNormalDistribution((27.6863+25.4960)/2, sqrt(18.65))
 */
export interface Vars6 {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars1`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars2`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars3`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   *
   * This interface was referenced by `Vars6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string;
}
