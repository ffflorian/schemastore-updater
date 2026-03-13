/* eslint-disable */

export type TheDrupalRootForThisSite = string;
export type TheFullyQualifiedDomainNameOfTheRemoteSystemHostingTheDrupalInstance = string;
/**
 * The value of uri should always be the same as when the site is being accessed from a web browser
 */
export type SiteURI = string;
export type TheUsernameToLogInAsWhenUsingSshOrRsync = string;
export type TheOperatingSystemOfTheRemoteServer = 'Windows' | 'Linux';
export type AdditionalCommandlineOptionsForTheSshCommandItself = string;
export type AFlagToForceDrushToAlwaysOrNeverCreateATty = boolean;
export type PathToTheRemoteDrushCommand = string;
export type AListOfPathsWhereDrushWillSearchForAliasFiles = string[];
export type TheNameOfTheContainerToRunOn = string;
export type VagrantTransport = null;

export interface JSONSchemaForDrushSiteAliases {
  [k: string]:
    | {
        root?: TheDrupalRootForThisSite;
        host?: TheFullyQualifiedDomainNameOfTheRemoteSystemHostingTheDrupalInstance;
        uri?: SiteURI;
        user?: TheUsernameToLogInAsWhenUsingSshOrRsync;
        os?: TheOperatingSystemOfTheRemoteServer;
        ssh?: ContainsSettingsUsedToControlHowSshCommandsAreGeneratedWhenRunningRemoteCommands;
        paths?: AliasesForCommonRsyncTargets;
        command?: ContainsOptionsForSpecificCommands;
        docker?: {
          service?: TheNameOfTheContainerToRunOn;
          exec?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        vagrant?: VagrantTransport;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface ContainsSettingsUsedToControlHowSshCommandsAreGeneratedWhenRunningRemoteCommands {
  options?: AdditionalCommandlineOptionsForTheSshCommandItself;
  tty?: AFlagToForceDrushToAlwaysOrNeverCreateATty;
  [k: string]: unknown | undefined;
}
export interface AliasesForCommonRsyncTargets {
  'drush-script'?: PathToTheRemoteDrushCommand;
  'alias-path'?: AListOfPathsWhereDrushWillSearchForAliasFiles;
  files?: string;
  [k: string]: string | undefined;
}
export interface ContainsOptionsForSpecificCommands {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
