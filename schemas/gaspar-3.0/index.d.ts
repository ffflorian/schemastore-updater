/* eslint-disable */

export type GasparConfig = {
  [k: string]: unknown | undefined;
} & {
  $schema?: string;
  Models?: Models;
  Controllers?: Controllers;
  GroupTypes?: GroupTypes;
  TypeTranslations?: OutputTypeTranslations;
  GlobalTypeTranslations?: GlobalTypeTranslations;
  /**
   * If the file output location cannot be found, you will get a build error; add "IgnoreMissingOutputLocations": true to skip the error. This is useful when you need to build in an environment where the output may not be available (e.g. docker); although it would usually be preferable to use dotnet build /p:RunGaspar=False in your scripts.
   */
  IgnoreMissingOutputLocations?: boolean;
  /**
   * Set this to true to export all objects irrespective if they have [ExportFor] or not.
   */
  IgnoreAnnotations?: boolean;
};
export type OutputDefinition = {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
};
export type OutputDefinition1 = {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
};

/**
 * Options for outputting Models and Enums
 */
export interface Models {
  /**
   * List of file locations containing the models or controllers you wish to translate. Optional, if not provided will use all .cs files in the project.
   */
  Include?: string[];
  /**
   * List of file locations to exclude from the Include list
   */
  Exclude?: string[];
  /**
   * Output options. You must supply at least one of these.
   *
   * @minItems 1
   */
  Output: [OutputDefinition, ...OutputDefinition[]];
  /**
   * Enums will be written with their value, either set directly or from an Attribute (e.g. [EnumMember(Value = "name")]).
   */
  UseEnumValue?: boolean;
  /**
   * For TypeScript, if true will export enums as types instead of TypeScript enums.
   */
  StringLiteralTypesInsteadOfEnums?: boolean;
}
/**
 * Options for outputting service communication contracts for Controllers
 */
export interface Controllers {
  /**
   * List of file locations containing the models or controllers you wish to translate. Optional, if not provided will use all .cs files in the project.
   */
  Include?: string[];
  /**
   * List of file locations to exclude from the Include list
   */
  Exclude?: string[];
  /**
   * Output options. You must supply at least one of these.
   *
   * @minItems 1
   */
  Output: [OutputDefinition1, ...OutputDefinition1[]];
  /**
   * Used to name exported items, can also be used in paths.
   */
  ServiceName: string;
  /**
   * Used by Ocelot Export, and can be used in paths. Typically set to 'http' or 'https'
   */
  ServiceHost?: string;
  /**
   * Used by Ocelot Export, and can be used in paths.
   */
  ServicePort?: number;
}
/**
 * Export names to run multiple outputs under a single name.  e.g. Specify a group type called 'App' and add 'Swift' and 'Kotlin'
 */
export interface GroupTypes {
  [k: string]: ('Angular' | 'CSharp' | 'Ocelot' | 'TypeScript' | 'Proto' | 'Python' | 'Swift' | 'Kotlin')[] | undefined;
}
/**
 * For TypeScript, Angular, Swift, Kotlin and Proto, you can override type names to objects each language will understand.
 */
export interface OutputTypeTranslations {
  [k: string]: TypeTranslations | undefined;
}
/**
 * Type names to override for the specified language.
 */
export interface TypeTranslations {
  [k: string]: string | undefined;
}
/**
 * For TypeScript, Angular, Swift, Kotlin and Proto, you can override type names to objects the exported language will understand.  These will apply equally to all exports, 'TypeTranslations' may be more useful
 */
export interface GlobalTypeTranslations {
  [k: string]: string | undefined;
}
