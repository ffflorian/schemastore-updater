/* eslint-disable */

/**
 * A preset category
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/preset.json
 *
 * @minItems 1
 *
 * This interface was referenced by `Presets`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export type PresetCategory = [string, ...string[]];

/**
 * Presets
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/preset.json
 */
export interface Presets {
  [k: string]: PresetCategory;
}
