/* eslint-disable */

/**
 * Used to validate Catapult Platform Support Pack (PSP) contents.yaml file, which provides an index of the files within the PSP
 */
export interface JSONSchemaForCatapultPSPContentsYamlFiles {
  /**
   * Catapult platform support file contents
   */
  platform: {
    /**
     * Platform/device vendor name
     */
    vendor: string;
    /**
     * Name of platform - used to identify platform in IDE
     */
    name: string;
    /**
     * Full description of support pack
     */
    description: string;
    /**
     * Value of the PLATFORM macro definition used during build
     */
    buildConfig: string;
    /**
     * Support pack version
     */
    version: string;
    /**
     * License text
     */
    license: string;
    documentationFile: SupportPackFile;
    coreDescriptionFile: SupportPackFile;
    peripheralRegisterDescriptionFile?: SupportPackFile;
    openOCDConfigurationFile?: SupportPackFile;
    /**
     * Launch configuration for platform
     */
    launchConfig: string;
    /**
     * String with additional gdb commands to run to initiate connection to target
     */
    gdbAutoRunCommandString?: string;
    /**
     * TCP/IP port number for OpenOCD connections.  Set to "auto" to automatically use any free port
     */
    networkPortNumberForOCDConnections?: string;
    /**
     * True only for FPGA platforms
     */
    isPlatformFPGA?: boolean;
    fpgaBitFile?: SupportPackFile;
    fpgaProgConfigFile?: SupportPackFile;
    /**
     * String with processor trace encoder settings required by the decoder
     */
    traceSettingsString?: string;
    libsDirectory?: SupportPackDirectory;
    headersDirectory?: SupportPackDirectory;
    /**
     * Hostname or IP address for debug connection to remote machines
     */
    remoteHost?: string;
    /**
     * Username for debug connection to remote machines
     */
    remoteUsername?: string;
  };
}
/**
 * Documentation file(s) - can be HTML or PDF
 */
export interface SupportPackFile {
  /**
   * builtin="true" means that a file path is relative to the platform directory within the SDK installation.builtin="false" means the file path is relative to the top level of the unzipped package
   */
  builtin: boolean;
  /**
   * file path within zip file
   */
  path: string;
}
/**
 * Directory containing library files for use with the platform
 */
export interface SupportPackDirectory {
  /**
   * directory path within zip file
   */
  path: string;
}
