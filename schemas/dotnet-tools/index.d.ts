/* eslint-disable */

/**
 * Specifies the version of the local tool manifest file format.
 */
export type NETToolsManifestVersion = number;
/**
 * Indicates whether this is the root manifest file. If true, dotnet will not continue to search parent directories for additional dotnet-tools.json files.
 */
export type RootTopMostManifestFileIndicator = boolean;
/**
 * Specifies the version of the NuGet package of the tool. If null, the latest version will be used.
 */
export type ToolNuGetVersion = string | null;
/**
 * Lists all of the available commands provided by this tool. The way to invoke a command depends on the naming format of its executable. If the command is in the format `dotnet-<toolName>`, it should be invoked using 'dotnet <toolName>'. If the command is in the format '<toolName>', it can be directly invoked using just '<toolName>'. If null, no specific commands are specified.
 */
export type AvailableToolCommands = ToolCommand[] | null;
/**
 * A command made available by this tool which can be invoked according to the naming convention of its executable. If the command is in the format `dotnet-<toolName>`, it should be invoked using 'dotnet <toolName>'. If the command is in the format '<toolName>', it can be directly invoked using just '<toolName>'. If null, no specific commands are specified.
 */
export type ToolCommand = string | null;

export interface HttpsJsonSchemastoreOrgDotnetToolsJson {
  version: NETToolsManifestVersion;
  isRoot: RootTopMostManifestFileIndicator;
  tools: LocalTools;
  [k: string]: unknown | undefined;
}
/**
 * Mappings of .NET CLI tools that are available locally for the project. Each entry specifies a tool accessible by its NuGet package ID.
 */
export interface LocalTools {
  [k: string]: ToolConfiguration;
}
/**
 * Represents a single .NET CLI tool with its specific settings and commands.
 *
 * This interface was referenced by `LocalTools`'s JSON-Schema definition
 * via the `patternProperty` "^.*$".
 */
export interface ToolConfiguration {
  version: ToolNuGetVersion;
  commands: AvailableToolCommands;
  [k: string]: unknown | undefined;
}
