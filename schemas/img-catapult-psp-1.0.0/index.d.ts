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
    coreDescriptionFile: SupportPackFile1;
    peripheralRegisterDescriptionFile?: SupportPackFile2;
    openOCDConfigurationFile?: SupportPackFile3;
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
    fpgaBitFile?: SupportPackFile4;
    fpgaProgConfigFile?: SupportPackFile5;
    /**
     * String with processor trace encoder settings required by the decoder
     */
    traceSettingsString?: string;
    libsDirectory?: SupportPackDirectory;
    headersDirectory?: SupportPackDirectory1;
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
 * File containing description of core using IMG proprietary YAML format
 */
export interface SupportPackFile1 {
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
 * File containing peripheral register information using CMSIS SVD XML format (see https://www.keil.com/pack/doc/CMSIS/SVD/html/svd_Format_pg.html)
 */
export interface SupportPackFile2 {
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
 * File containing OpenOCD configuration (see https://openocd.org/doc-release/html/Config-File-Guidelines.html#Config-File-Guidelines)
 */
export interface SupportPackFile3 {
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
 * Bitfile for programming FPGA
 */
export interface SupportPackFile4 {
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
 * OpenOCD config file for programming FPGA
 */
export interface SupportPackFile5 {
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
/**
 * Directory containing header files for use with the platform
 */
export interface SupportPackDirectory1 {
  /**
   * directory path within zip file
   */
  path: string;
}
