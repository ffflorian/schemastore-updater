/* eslint-disable */

/**
 * The name of the tool to run.
 */
export type TheToolName =
  | 'apt-get-install'
  | 'azurecli-login'
  | 'choco-install'
  | 'choco-upgrade'
  | 'dotnet-restore'
  | 'dotnet-toolinstall'
  | 'enable-iis'
  | 'msi-install'
  | 'npm-install'
  | 'nuget-restore'
  | 'require-azureartifactscredentialprovider'
  | 'require-azurecli'
  | 'require-choco'
  | 'require-dotnetcoresdk'
  | 'require-dotnetframeworksdk'
  | 'require-gitsubmodule'
  | 'require-mssql'
  | 'require-nodejs'
  | 'require-npm'
  | 'require-nuget'
  | 'require-psmodule'
  | 'require-vcpkg'
  | 'require-vscomponent'
  | 'require-winget'
  | 'set-env'
  | 'vcpkg-install'
  | 'windowsfeature-disable'
  | 'windowsfeature-enable'
  | 'windowsfeature-list'
  | 'winget-install'
  | 'wsl-install';
/**
 * The input varies by tool. For example, the required version number, the package-id, the input source file or source directory.
 */
export type TheToolInput = string | null;
/**
 * Additional Options to be appended to the tool's command line.
 */
export type AdditionalOptions = string | null;
/**
 * Comments for this tool item. For documentation only; ignored by the tool.
 */
export type Comments = string | null;
/**
 * 'devinit.exe init' runs this list of tools sequentially. See also 'devinit.exe run'.
 */
export type TheListOfToolsToRun = RunObject[];
/**
 * Comments for this file. For documentation only; ignored by the tool.
 */
export type Comments1 = string | null;

export interface CodespacesDevInitConfiguration {
  $schema?: string;
  run: TheListOfToolsToRun;
  comments?: Comments1;
}
export interface RunObject {
  tool: TheToolName;
  input?: TheToolInput;
  additionalOptions?: AdditionalOptions;
  comments?: Comments;
}
