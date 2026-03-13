/* eslint-disable */

/**
 * If specified, the settings in this file extends settings in a base file similar to tsconfig.json
 * You can also use Sergen defaults by specifying this like "defaults@9.0.0"
 */
export type Extends = (string | ('defaults@9.0.0' | 'defaults@6.6.0')) & string;
/**
 * End of line character to use in generated files. If not specified, it will be auto detected from the environment. It is recommended to have "lf" for multi platform projects
 */
export type EndOfLine = 'LF' | 'CRLF';
/**
 * Dialect
 */
export type Dialect = (
  | (
      | 'SqlServer'
      | 'SqlServer2012'
      | 'SqlServer2008'
      | 'SqlServer2005'
      | 'SqlServer2000'
      | 'Sqlite'
      | 'Postgres'
      | 'Oracle'
      | 'Oracle12c'
      | 'MySql'
      | 'Firebird'
    )
  | string
) &
  string;
/**
 * Generated table information
 */
export type Tables = Table[];
/**
 * List of connections. It is only needed when it is desired to work / generated code based on a connection string that is not in appsettings.json
 */
export type Connections = Connection[];
/**
 * List of base row classes to be used instead of Row. They are matched by list of base properties
 */
export type BaseRowClasses = BaseRowClass[];
/**
 * The set of foreign fields to generate, default is NameOnly.
 *
 * None: Don't generate any foreign view fields except the ones explicitly included via IncludeForeignFields
 * All: Generate all the foreign view fields, except ones excluded explicitly via RemoveForeignFields
 * NameOnly: Don't generate any foreign view fields except the Name property of the target row and ones explicitly included via IncludeForeignFields
 */
export type ForeignFieldSelection = 'None' | 'All' | 'NameOnly';
/**
 * Initial type of project. Available options are "Community" e.g. Serene, "Premium" e.g. StartSharp
 */
export type InitialType = 'Community' | 'Premium';
/**
 * Version this project is created from. Used to determine which migrations should be applied to project (starting from)
 */
export type InitialVersion = string;
/**
 * List of already applied upgrades if any
 */
export type AppliedUpgrades = string[];

/**
 * Serenity code generator (sergen) configuration
 */
export interface SerenityCodeGeneratorSergenConfiguration {
  Extends?: Extends;
  /**
   * The root namespace for the target project. It is recommended to have this in sergen.json. If not there, it will be auto calculated from root namespace in CSPROJ file, or derived from project file name by removing .Web suffix. Generated code will be placed under this namespace and project's own types are assumed to be under this namespace as well
   */
  RootNamespace?: string;
  /**
   * If true, generated code will declare and use jFKTable type of constants for expressions in entities
   */
  DeclareJoinConstants?: boolean;
  /**
   * If true, it allows the use of [GenerateFields] attributes on rows, which automatically generates the fields using a source generator. This should only be used when Serenity.Pro.Coder is enabled in the project
   */
  EnableGenerateFields?: boolean;
  /**
   * If true, it allows the use of [GenerateInterface] attributes on handlers, which automatically generates the interface using a source generator. This should only be used when Serenity.Pro.Coder is enabled in the project
   */
  EnableGenerateInterface?: boolean;
  /**
   * If true, enables RowTemplate class generation. This should only be used when Serenity.Pro.Coder is enabled in the project. Has no effect when EnableGenerateFields is true. EnableGenerateFields should be preferred over this as RowTemplate might cause some issues
   */
  EnableRowTemplates?: boolean;
  EndOfLine?: EndOfLine;
  /**
   * If true, generated code will use file scoped namespaces
   */
  FileScopedNamespaces?: boolean;
  /**
   * If true, generated code will parse global usings from the current project. Default is true
   */
  ParseGlobalUsings?: boolean;
  /**
   * If specified, generated code will assume these usings are in global using scope
   */
  IncludeGlobalUsings?: string[];
  /**
   * If specified, generated code will assume these usings are not in global using scope even if they are in global using scope
   */
  ExcludeGlobalUsings?: string[];
  /**
   * If true, the default schema name, e.g. "dbo" for SQL Server won't be emitted in generated field expressions in Row.cs files. This is true by default only for MySql as in MySql schema names are actually database names
   */
  OmitDefaultSchema?: boolean;
  /**
   * If true, instead of using [Expression] attributes for foreign view fields, it will use Origin(nameof(jFK), nameof(FKRow.ViewField)) if the FKRow is already generated in the project. It will also use ForeignKey(typeof(FKRow)) type of foreign keys instead of strings
   */
  UseOriginAttribute?: boolean;
  /**
   * If true, generated table options like Identity, Module etc. will be saved to the Connections array in sergen.json after code generation. Default is true
   */
  SaveGeneratedTables?: boolean;
  ClientTypes?: ClientTypes;
  MVC?: MVC;
  ServerTypings?: ServerTypings;
  Restore?: Restore;
  TSBuild?: TSBuild;
  Connections?: Connections;
  /**
   * @deprecated
   * Deprecated. Path to KDiff3 executable. If not specified, it will be auto detected from the environment
   */
  KDiff3Path?: string;
  /**
   * @deprecated
   * Deprecated. Full path to TypeScript compiler. It is assumed to be in path if not specified
   */
  TSCPath?: string;
  BaseRowClasses?: BaseRowClasses;
  ForeignFieldSelection?: ForeignFieldSelection;
  /**
   * A list of foreign fields to include in generated code. This could be used to include some additional fields This could be used to include some additional fields. Not so useful if ForeignFieldSelection is All
   */
  IncludeForeignFields?: string[];
  /**
   * A list of foreign fields to omit from generated code. This could be used to disable generating code for join fields like CreatedBy, ModifiedBy etc, so properties like CustomerCreatedBy, CustomerModifiedBy etc. won't be generated in OrderRow. Not so useful if ForeignFieldSelection is None or NameOnly
   */
  RemoveForeignFields?: string[];
  /**
   * The location of custom templates folder. The files in this folder will override the default scriban templates in Sergen. You may also include additional files to be generated. Their names must match the names at
   * https://github.com/serenity-is/Serenity/tree/master/src/codegenerator/Templates
   * You may also include additional files to be generated
   */
  CustomTemplates?: string;
  CustomGenerate?: CustomGenerate;
  CustomSettings?: CustomSettings;
  /**
   * The list of appsettings.json files in order. Default is appsettings.json, appsettings.machine.json
   */
  AppSettingFiles?: string[];
  UpgradeInfo?: UpgradeInfo;
}
/**
 * Client types code generation related configuration
 */
export interface ClientTypes {
  /**
   * The output directory for generated client types .cs files
   */
  OutDir?: string;
  /**
   * If false, the client types source generator in Serenity.Pro.Coder will be disabled
   */
  SourceGenerator?: boolean;
}
/**
 * MVC (e.g. view locations) related configuration
 */
export interface MVC {
  /**
   * @deprecated
   * Deprecated, Sergen will always use the root namespace to avoid class name clashes
   */
  UseRootNamespace?: boolean;
  /**
   * If true, use namespace {RootNamespace}.MVC instead of a MVC class inside the RootNamespace.
   * ESM helpers will also be generated in this namespace. Default is false.
   * This is useful if to avoid class name clashes with referenced projects.
   * E.g. when add Serenity.Extensions to global usings, its MVC class would
   * clash with the MVC class generated for the current project,
   * sometimes causing issues in Razor views without a @namespace directive.
   * So this is recommended for feature projects like Serenity.Extensions
   */
  AsNamespace?: boolean;
  /**
   * If true, Use internal instead of public for generated top level class (MVC/ESM)
   */
  InternalAccess?: boolean;
  /**
   * The output directory for MVC.cs
   */
  OutDir?: string;
  /**
   * View paths to search for, defaults to "Modules" and "Views". "ProjectName" is used instead of "Modules" if Razor SDK is used for the project, e.g. a Razor class library
   */
  SearchViewPaths?: string[];
  /**
   * Strip view paths from generated files. Defaults to "Modules", "Views". E.g. a subclass for Modules and Views won't be generated
   */
  StripViewPaths?: string[];
  /**
   * If false, the view paths source generator in Serenity.Pro.Coder will be disabled
   */
  SourceGenerator?: boolean;
}
/**
 * Server typings code generation related configuration
 */
export interface ServerTypings {
  /**
   * Assemblies for server typings generation. Specify only if Sergen can't auto determine your project output file
   */
  Assemblies?: string[];
  /**
   * The output directory for generated server typings files. Not used for modules
   */
  OutDir?: string;
  /**
   * If true, local texts will be generated
   */
  LocalTexts?: boolean;
  /**
   * If true, module re-exports will be generated. Defaults to true
   */
  ModuleReExports?: boolean;
  /**
   * @deprecated
   * Deprecated as only ES modules style code generation is supported now. If true, module typings will be generated. Defaults to true if you have "module" defined in tsconfig.json
   */
  ModuleTypings?: boolean;
  /**
   * @deprecated
   * Deprecated as only ES modules style code generation is supported now. If true, namespace typings will be generated. Defaults to true if you don't have "module" defined in tsconfig.json
   */
  NamespaceTypings?: boolean;
  /**
   * If true, generated typings will use relative paths instead of paths from tsconfig.json, e.g. "../ServerTypes/" instead of "@/ServerTypes/"
   */
  PreferRelativePaths?: boolean;
  /**
   * If false, the server typings source generator in Serenity.Pro.Coder will be disabled
   */
  SourceGenerator?: boolean;
}
/**
 * @deprecated
 * Deprecated as Sergen no longer supports restoring static content. Sergen restore command related configuration
 */
export interface Restore {
  /**
   * List of files (git ignore like) to include while restoring
   */
  Include?: string[];
  /**
   * List of files (git ignore like) to exclude while restoring
   */
  Exclude?: string[];
  /**
   * Set false to disable namespace typings restore to typings/ folder
   */
  Typings?: boolean;
}
export interface TSBuild {
  /**
   * List of entry point globs, default is "Modules/** /*Page.ts", "Modules/** /*Page.tsx", "Modules/** /ScriptInit.ts", "Modules/** /*.mts"
   */
  EntryPoints?: string[];
  /**
   * Should the list of entry points, e.g. ESM be generated, only available with Serenity.Pro.Coder
   */
  SourceGenerator?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Connection information
 */
export interface Connection {
  /**
   * Key of connection
   */
  Key: string;
  /**
   * Connection string
   */
  ConnectionString?: string;
  /**
   * Provider name
   */
  ProviderName?: string;
  Dialect?: Dialect;
  Tables?: Tables;
}
export interface Table {
  /**
   * Table name
   */
  Tablename: string;
  /**
   * Row identifier without Row suffix
   */
  Identifier: string;
  /**
   * Module name
   */
  Module: string;
  /**
   * Permission key
   */
  PermissionKey: string;
}
export interface BaseRowClass {
  /**
   * The class name
   */
  ClassName: string;
  /**
   * The base class fields that should exists in a table for this base class to be used
   */
  Fields: string[];
}
/**
 * The relative paths of custom generated files
 */
export interface CustomGenerate {
  [k: string]: string | undefined;
}
/**
 * Custom settings to be passed to and used in custom templates
 */
export interface CustomSettings {
  [k: string]: unknown | undefined;
}
/**
 * The upgrade / migration related information used by stargen to determine the base version of template used, and already applied upgrades
 */
export interface UpgradeInfo {
  InitialType?: InitialType;
  InitialVersion?: InitialVersion;
  AppliedUpgrades?: AppliedUpgrades;
}
