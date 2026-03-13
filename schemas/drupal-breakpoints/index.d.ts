/* eslint-disable */

export type AHumanReadableLabelForTheBreakpoint = string;
export type MediaQueryTextProper = string;
export type PositionalWeightOrderForTheBreakpoint = number;
export type SupportedPixelResolutionMultipliers = string[];
export type BreakpointGroup = string;

export interface JSONSchemaForDrupalBreakpointsFile {
  [k: string]:
    | {
        label?: AHumanReadableLabelForTheBreakpoint;
        mediaQuery?: MediaQueryTextProper;
        weight?: PositionalWeightOrderForTheBreakpoint;
        multipliers?: SupportedPixelResolutionMultipliers;
        group?: BreakpointGroup;
      }
    | undefined;
}
