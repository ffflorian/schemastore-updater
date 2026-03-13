/* eslint-disable */

export type TheMigrationIDMachineName = string;
export type TheHumanReadableLabelForTheMigration = string;
export type WhetherTheMigrationIsAuditable = boolean;
export type ListOfTagsUsedByThePluginManagerForFiltering = string[];
export type DeriverClass = string;
export type SourcePluginID = string;
export type DestinationPluginID = string | null;
export type ListOfMigrationIDsThatMustBeRunBeforeThisMigration = string[];
export type ListOfMigrationIDsThatIfTheyExistMustBeRunBefore = string[];
export type ListOfPluginProviders = string[];
export type ClassForMigrationImplementation = string | null;

export interface JSONSchemaForDrupalMigrationFiles {
  id?: TheMigrationIDMachineName;
  label?: TheHumanReadableLabelForTheMigration;
  audit?: WhetherTheMigrationIsAuditable;
  migration_tags?: ListOfTagsUsedByThePluginManagerForFiltering;
  deriver?: DeriverClass;
  source?: TheSourcePluginConfiguration;
  process?: TheConfigurationDescribingTheProcessPlugins;
  destination?: TheDestinationPluginConfiguration;
  migration_dependencies?: MigrationsToRunBeforeThisMigration;
  dependencies?: TheMigrationSDependencies;
  provider?: ListOfPluginProviders;
  class?: ClassForMigrationImplementation;
  [k: string]: unknown | undefined;
}
export interface TheSourcePluginConfiguration {
  plugin: SourcePluginID;
  [k: string]: unknown | undefined;
}
export interface TheConfigurationDescribingTheProcessPlugins {
  [k: string]: unknown | undefined;
}
export interface TheDestinationPluginConfiguration {
  plugin: DestinationPluginID;
  [k: string]: unknown | undefined;
}
export interface MigrationsToRunBeforeThisMigration {
  required?: ListOfMigrationIDsThatMustBeRunBeforeThisMigration;
  optional?: ListOfMigrationIDsThatIfTheyExistMustBeRunBefore;
  [k: string]: unknown | undefined;
}
export interface TheMigrationSDependencies {
  config?: string[];
  module?: string[];
  theme?: string[];
  content?: string[];
  enforced?: {
    config?: string[];
    module?: string[];
    theme?: string[];
    content?: string[];
  };
}
