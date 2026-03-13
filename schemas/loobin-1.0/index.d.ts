/* eslint-disable */

/**
 * Name of the LOOBin
 */
export type Name = string;
/**
 * Author of the LOOBin
 */
export type Author = string;
/**
 * A short description of the LOOBin.This will display in the LOOBin card list and the LOOBins website search results.
 */
export type ShortDescription = string;
/**
 * A full description of the LOOBin.This will display on the LOOBin's single page.
 */
export type FullDescription = string;
/**
 * Date the LOOBin was created
 */
export type Created = string;
export type Name1 = string;
export type Description = string;
export type Code = string;
export type Tactics = (
  | 'Reconnaissance'
  | 'Resource Development'
  | 'Initial Access'
  | 'Execution'
  | 'Persistence'
  | 'Privilege Escalation'
  | 'Defense Evasion'
  | 'Credential Access'
  | 'Discovery'
  | 'Lateral Movement'
  | 'Collection'
  | 'Exfiltration'
  | 'Command and Control'
  | 'Impact'
)[];
export type Tags = string[];
/**
 * A list of example use cases for the LOOBin
 */
export type ExampleUseCases = ExampleUseCase[];
/**
 * A list of paths to the LOOBin
 */
export type Paths = string[];
export type Name2 = string;
export type Url = string;
/**
 * A list of detections for the LOOBin
 */
export type Detections = Detection[];
export type Name3 = string;
export type Url1 = string;
/**
 * A list of useful resources for the LOOBin
 */
export type Resource = Resource1[];
/**
 * Acknowledgements for the LOOBin
 */
export type Acknowledgements = string[];

/**
 * LOOBin base class
 */
export interface LOOBin {
  name: Name;
  author: Author;
  short_description: ShortDescription;
  full_description: FullDescription;
  created: Created;
  example_use_cases: ExampleUseCases;
  paths: Paths;
  detections: Detections;
  resources?: Resource;
  acknowledgements?: Acknowledgements;
}
/**
 * Use case base class
 */
export interface ExampleUseCase {
  name: Name1;
  description: Description;
  code?: Code;
  tactics?: Tactics;
  tags?: Tags;
  [k: string]: unknown | undefined;
}
/**
 * Detection base class
 */
export interface Detection {
  name: Name2;
  url: Url;
  [k: string]: unknown | undefined;
}
/**
 * External reference base class
 */
export interface Resource1 {
  name: Name3;
  url: Url1;
  [k: string]: unknown | undefined;
}
