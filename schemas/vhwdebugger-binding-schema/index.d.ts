/* eslint-disable */

/**
 * Schema for the debugger configuration of the Vector CANoe hardware debugger binding
 */
export type VectorCANoeHardwareDebuggerBindingConfigurationSchema =
  DebuggerConfigurationVersion12 | DebuggerConfigurationVersion11 | DebuggerConfigurationVersion10;
/**
 * The version of the configuration. Controls what features are available
 */
export type Version = '1.2';
/**
 * The default debugger if a distributed object is not assigned explicitly. Must reference an element from the `debuggers` list
 */
export type DefaultDebugger = string;
export type DebuggerConnectionType = 'lauterbach';
/**
 * Connecting to the target on measurement start will cause a target reset. Must be supported by the target
 */
export type TargetReset = boolean;
/**
 * Connecting to the target on measurement start will start execution of the program. Must be supported by the target
 */
export type StartExecution = boolean;
/**
 * Automatically connects to the TRACE32 instance on measurement start.
 */
export type AutoConnect = boolean;
/**
 * The IP address of the node where the TRACE32 instance is running
 */
export type NodeAddress = string;
/**
 * The port on which the TRACE32 instance is listening.
 */
export type NodePort = number;
/**
 * The UDP package length. Must match the package length configured for the TRACE32 instance
 */
export type TRACE32PackageLength = number;
export type DebuggerConnectionType1 = 'isystem';
/**
 * Disables the polling of the winIDEA GUI. When set to `true`, it can reduce jitter when communicating with the SIL Adapter on the target. Makes interactive work with the GUI not possible
 */
export type DisableWinIDEAGUIPolling = boolean;
export type DebuggerConnectionType2 = 'tasking';
export type DebuggerConnectionType3 = 'gdb';
/**
 * Connecting to the target on measurement start will start execution of the program. Must always be true for GDB
 */
export type StartExecution3 = true;
/**
 * Absolute or relative path to the GDB client, which shall be used by CANoe. Path is relative to this configuration file. This is usually supplied with the compiler toolset
 */
export type GDBClient = string;
/**
 * Absolute or relative path to the symbol file, which shall be used by GDB. Path is relative to this configuration file. Symbol file must match to the binary running on the target
 */
export type GDBSymbolFile = string;
export type DebuggerConnectionType4 = 'segger-jlink';
/**
 * The hostname or IP address of the SEGGER J-Link debugger.
 */
export type DebuggerAddress = string;
/**
 * The port on which the SEGGER J-Link is listening. Using value 0 will use the default port.
 */
export type DebuggerPort = number;
/**
 * Absolute or relative path to the symbol file. Path is relative to this configuration file. Symbol file must match to the binary running on the target.
 */
export type SymbolFile = string;
/**
 * The device name of the target as specified by the list of supported devices on the SEGGER website. The device will be selected by executing the `device = ...` Command String. See [Supported Devices](https://www.segger.com/supported-devices) for more.
 */
export type Device = string;
/**
 * The target interface the SEGGER J-Link will use to connect to the device.
 */
export type TargetInterface = (SWDTargetInterface | JTAGTargetInterface) & string;
/**
 * Instructs the debugger to use the Serial Wire Debug (SWD) interface to connect to the device.
 */
export type SWDTargetInterface = 'SWD';
/**
 * Instructs the debugger to use the Joint Test Action Group (JTAG) interface to connect to the device.
 */
export type JTAGTargetInterface = 'JTAG';
/**
 * The speed at which the SEGGER J-Link will connect to the device over the target interface in kHz. The value 0 will instruct the SEGGER J-Link to autodetect the speed. The value 65535 will instruct the SEGGER J-Link to use adaptive clocking.
 */
export type TargetInterfaceSpeed = number;
/**
 * Absolute or relative path to the DLL file. Path is relative to this configuration file. If not present, an attempt to automatically find an installed JLink DLL is made. The bitness (32 / 64) of the selected DLL must match the runtime kernel bitness, otherwise loading the DLL will fail.
 */
export type PathToTheJLinkARMDllOrJLinkX64Dll = string;
/**
 * List of additional SEGGER J-Link command strings that are executed directly after the device is selected, but before the target interface and speed are selected. See [J-Link Command Strings](https://kb.segger.com/J-Link_Command_Strings) for the full list of supported command strings.
 */
export type AdditionalSEGGERJLinkCommandStrings = string[];
export type DebuggerConnectionType5 = 'segger-jlink';
/**
 * The serial number of the SEGGER J-Link debugger.
 */
export type SerialNumberOfTheDebugger = number;
/**
 * The serial number of the SEGGER J-Link debugger.
 */
export type SerialNumberOfTheDebugger1 = string;
/**
 * Using the value 'auto' will automatically select a debugger connected via USB. Automatic selection will fail if more than one debugger is connected.
 */
export type SerialNumberOfTheDebugger2 = 'auto';
/**
 * The target interface the SEGGER J-Link will use to connect to the device.
 */
export type TargetInterface1 = (SWDTargetInterface | JTAGTargetInterface) & string;
/**
 * The version of the configuration. Controls what features are available
 */
export type Version1 = '1.1';
export type DebuggerConnectionType7 = 'isystem';
export type DebuggerConnectionType8 = 'gdb';
/**
 * Connecting to the target on measurement start will start execution of the program. Must always be true for GDB
 */
export type StartExecution8 = true;
/**
 * The version of the configuration. Controls what features are available
 */
export type Version2 = '1.0';
export type DebuggerConnectionType10 = 'isystem';

/**
 * Debugger configuration for the Vector CANoe hardware debugger binding (version 1.2)
 */
export interface DebuggerConfigurationVersion12 {
  version: Version;
  'default-debugger'?: DefaultDebugger;
  debuggers: DebuggerConfigurations;
}
/**
 * List of all configured debuggers. The elements' key determines the name of the debugger
 */
export interface DebuggerConfigurations {
  /**
   * This interface was referenced by `DebuggerConfigurations`'s JSON-Schema definition
   * via the `patternProperty` "^[-_a-zA-Z0-9]+$".
   */
  [k: string]:
    | DebuggerConfigurationLauterbach
    | DEPRECATEDDebuggerConfigurationISYSTEM
    | DebuggerConfigurationTASKINGWinIDEA
    | DebuggerConfigurationGDB
    | DebuggerConfigurationSEGGERJLinkOverTCPIP
    | DebuggerConfigurationSEGGERJLinkOverUSB
    | undefined;
}
/**
 * Debugger Configuration for TRACE32 (Lauterbach)
 */
export interface DebuggerConfigurationLauterbach {
  type: DebuggerConnectionType;
  reset?: TargetReset;
  run?: StartExecution;
  'auto-connect'?: AutoConnect;
  node: NodeAddress;
  port: NodePort;
  lauterbach?: LauterbachTRACE32Settings;
}
/**
 * Debugger specific settings for TRACE32 (Lauterbach)
 */
export interface LauterbachTRACE32Settings {
  'pack-len'?: TRACE32PackageLength;
}
/**
 * DEPRECATED Debugger Configuration for winIDEA (iSYSTEM). Replaced by the 'Debugger Configuration (TASKING winIDEA)''.
 */
export interface DEPRECATEDDebuggerConfigurationISYSTEM {
  type: DebuggerConnectionType1;
  reset?: TargetReset;
  run?: StartExecution;
  'auto-connect'?: AutoConnect;
  node: NodeAddress;
  port: NodePort;
  isystem?: ISYSTEMWinIDEASettings;
}
/**
 * Debugger specific settings for winIDEA (iSYSTEM)
 */
export interface ISYSTEMWinIDEASettings {
  'disable-winidea-polling'?: DisableWinIDEAGUIPolling;
}
/**
 * Debugger Configuration for TASKING winIDEA
 */
export interface DebuggerConfigurationTASKINGWinIDEA {
  type: DebuggerConnectionType2;
  reset?: TargetReset;
  run?: StartExecution;
  'auto-connect'?: AutoConnect;
  node: NodeAddress;
  port: NodePort;
  tasking?: TASKINGWinIDEASettings;
}
/**
 * Debugger specific settings for TASKING winIDEA
 */
export interface TASKINGWinIDEASettings {
  'disable-winidea-polling'?: DisableWinIDEAGUIPolling;
}
/**
 * Debugger Configuration for GDB
 */
export interface DebuggerConfigurationGDB {
  type: DebuggerConnectionType3;
  reset?: TargetReset;
  run: StartExecution3;
  'auto-connect'?: AutoConnect;
  node: NodeAddress;
  port: NodePort;
  gdb: GDBSettings;
}
/**
 * Debugger specific settings for GDB
 */
export interface GDBSettings {
  'path-to-gdb-client': GDBClient;
  'path-to-symbol-file': GDBSymbolFile;
}
/**
 * Debugger Configuration for SEGGER J-Link over TCP/IP
 */
export interface DebuggerConfigurationSEGGERJLinkOverTCPIP {
  type: DebuggerConnectionType4;
  node: DebuggerAddress;
  port?: DebuggerPort;
  reset?: TargetReset;
  run?: StartExecution;
  'auto-connect'?: AutoConnect;
  'segger-jlink': SEGGERJLinkSettings;
}
/**
 * Debugger specific settings for SEGGER J-Link
 */
export interface SEGGERJLinkSettings {
  'path-to-symbol-file': SymbolFile;
  device: Device;
  'target-interface': TargetInterface;
  speed?: TargetInterfaceSpeed;
  'jlink-dll-path'?: PathToTheJLinkARMDllOrJLinkX64Dll;
  'jlink-commands'?: AdditionalSEGGERJLinkCommandStrings;
}
/**
 * Debugger Configuration for SEGGER J-Link over USB
 */
export interface DebuggerConfigurationSEGGERJLinkOverUSB {
  type: DebuggerConnectionType5;
  reset?: TargetReset;
  run?: StartExecution;
  'auto-connect'?: AutoConnect;
  'segger-jlink': SEGGERJLinkSettings1;
}
/**
 * Debugger specific settings for SEGGER J-Link
 */
export interface SEGGERJLinkSettings1 {
  'serial-number': SerialNumberOfTheDebugger | SerialNumberOfTheDebugger1 | SerialNumberOfTheDebugger2;
  'path-to-symbol-file': SymbolFile;
  device: Device;
  'target-interface': TargetInterface1;
  speed?: TargetInterfaceSpeed;
  'jlink-dll-path'?: PathToTheJLinkARMDllOrJLinkX64Dll;
  'jlink-commands'?: AdditionalSEGGERJLinkCommandStrings;
}
/**
 * Debugger configuration for the Vector CANoe hardware debugger binding (version 1.1)
 */
export interface DebuggerConfigurationVersion11 {
  version: Version1;
  'default-debugger'?: DefaultDebugger;
  debuggers: DebuggerConfigurations1;
}
/**
 * List of all configured debuggers. The elements' key determines the name of the debugger
 */
export interface DebuggerConfigurations1 {
  /**
   * This interface was referenced by `DebuggerConfigurations1`'s JSON-Schema definition
   * via the `patternProperty` "^[-_a-zA-Z0-9]+$".
   */
  [k: string]:
    DebuggerConfigurationLauterbach1 | DebuggerConfigurationISYSTEMTASKING | DebuggerConfigurationGDB1 | undefined;
}
/**
 * Debugger Configuration for TRACE32 (Lauterbach)
 */
export interface DebuggerConfigurationLauterbach1 {
  type: DebuggerConnectionType;
  reset?: TargetReset;
  run?: StartExecution;
  'auto-connect'?: AutoConnect;
  node: NodeAddress;
  port: NodePort;
  lauterbach?: LauterbachTRACE32Settings1;
}
/**
 * Debugger specific settings for TRACE32 (Lauterbach)
 */
export interface LauterbachTRACE32Settings1 {
  'pack-len'?: TRACE32PackageLength;
}
/**
 * Debugger Configuration for WinIDEA (iSYSTEM / TASKING)
 */
export interface DebuggerConfigurationISYSTEMTASKING {
  type: DebuggerConnectionType7;
  reset?: TargetReset;
  run?: StartExecution;
  'auto-connect'?: AutoConnect;
  node: NodeAddress;
  port: NodePort;
  isystem?: ISYSTEMTASKINGWinIDEASettings;
}
/**
 * Debugger specific settings for winIDEA (iSYSTEM / TASKING)
 */
export interface ISYSTEMTASKINGWinIDEASettings {
  'disable-winidea-polling'?: DisableWinIDEAGUIPolling;
}
/**
 * Debugger Configuration for GDB
 */
export interface DebuggerConfigurationGDB1 {
  type: DebuggerConnectionType8;
  reset?: TargetReset;
  run: StartExecution8;
  'auto-connect'?: AutoConnect;
  node: NodeAddress;
  port: NodePort;
  gdb: GDBSettings1;
}
/**
 * Debugger specific settings for GDB
 */
export interface GDBSettings1 {
  'path-to-gdb-client': GDBClient;
  'path-to-symbol-file': GDBSymbolFile;
}
/**
 * Debugger configuration for the Vector CANoe hardware debugger binding (version 1.0)
 */
export interface DebuggerConfigurationVersion10 {
  version: Version2;
  'default-debugger'?: DefaultDebugger;
  debuggers: DebuggerConfigurations2;
}
/**
 * List of all configured debuggers. The elements' key determines the name of the debugger
 */
export interface DebuggerConfigurations2 {
  /**
   * This interface was referenced by `DebuggerConfigurations2`'s JSON-Schema definition
   * via the `patternProperty` "^[-_a-zA-Z0-9]+$".
   */
  [k: string]: DebuggerConfigurationLauterbach2 | DebuggerConfigurationISYSTEM | undefined;
}
/**
 * Debugger Configuration for TRACE32 (Lauterbach)
 */
export interface DebuggerConfigurationLauterbach2 {
  type: DebuggerConnectionType;
  reset?: TargetReset;
  run?: StartExecution;
  node: NodeAddress;
  port: NodePort;
  lauterbach?: LauterbachTRACE32Settings2;
}
/**
 * Debugger specific settings for TRACE32 (Lauterbach)
 */
export interface LauterbachTRACE32Settings2 {
  'pack-len'?: TRACE32PackageLength;
}
/**
 * Debugger Configuration for WinIDEA (iSYSTEM / TASKING)
 */
export interface DebuggerConfigurationISYSTEM {
  type: DebuggerConnectionType10;
  reset?: TargetReset;
  run?: StartExecution;
  node: NodeAddress;
  port: NodePort;
  isystem?: ISYSTEMTASKINGWinIDEASettings1;
}
/**
 * Debugger specific settings for winIDEA (iSYSTEM / TASKING)
 */
export interface ISYSTEMTASKINGWinIDEASettings1 {
  'disable-winidea-polling'?: DisableWinIDEAGUIPolling;
}
