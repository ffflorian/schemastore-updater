/* eslint-disable */

/**
 * Json schema version for the venvplus configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '1.1.0';
/**
 * The explicitly mapped channels. Overwrites the default mapping for the source.
 */
export type ExplicitMappings = (
  MapSourceChannel | MapSourceChannel1 | MapSourceNetwork | IgnoreSourceChannel | IgnoreSourceNetwork
)[];
/**
 * List of channel mappings.
 */
export type ChannelMappings = ChannelMapping[];

export interface VenvplusSchema {
  version: Version;
  'offline-config'?: OfflineConfig;
  'runtime-settings'?: RuntimeSettings;
}
/**
 * Settings for offline mode
 */
export interface OfflineConfig {
  /**
   * List of offline source files. A reference to a channel mapping set can be specified.
   */
  'source-files': Full[];
  /**
   * Processing sequence of the offline sources.
   * "timestamp-only": The offline sources are processed according to their timestamp, date and time are irrelevant.
   * "date-and-time": The offline sources are processed according to date/time and the time stamp. Only available if all sources have absolute time stamps.
   * "source-file-sequence": The offline sources are replayed in the order in which they are given in "source-files".
   */
  'processing-sequence'?: 'timestamp-only' | 'date-and-time' | 'source-file-sequence';
  'channel-mappings'?: ChannelMappings;
  /**
   * Reference to a channel mapping set used for all source files, except if set explicitly in "source-files".
   */
  'default-channel-mapping'?: string;
}
export interface Full {
  'file-path':
    | ({
        [k: string]: unknown | undefined;
      } & string)
    | ({
        [k: string]: unknown | undefined;
      } & string)[];
  /**
   * Name of a channel mapping set defined in "channel-mapping".
   */
  'channel-mapping'?: string;
}
/**
 * A channel mapping for one or more offline sources.
 */
export interface ChannelMapping {
  /**
   * A C-identifier for this element (case sensitive).
   */
  name: string;
  /**
   * The default mapping of a channel if not explicitly mapped.
   */
  'default-mapping'?: 'as-in-original' | 'ignore-all';
  mappings?: ExplicitMappings;
}
/**
 * Mapping from application channel of the replay file to a target network.
 */
export interface MapSourceChannel {
  /**
   * The source application channel for a given network type from the replayed file.
   */
  'source-channel': string;
  /**
   * The target network name.
   */
  'target-network': string;
}
/**
 * The source application channel for a given network type from the replayed file.
 */
export interface MapSourceChannel1 {
  /**
   * The source bus type and application channel from the replayed file.
   */
  'source-channel': string;
  /**
   * The target network name.
   */
  'target-network': string;
  /**
   * Target port (applies to Ethernet networks only).
   */
  'target-port'?: string;
}
/**
 * Mapping from a named source network of the replay file to a named target network.
 */
export interface MapSourceNetwork {
  /**
   * The source network name. Only works if the replay file was created by CANoe and contains the relevant metadata.
   */
  'source-network': string;
  /**
   * The target network name.
   */
  'target-network': string;
  /**
   * Target port (applies to Ethernet networks only).
   */
  'target-port'?: string;
}
/**
 * Ignores an application channel of the replay file.
 */
export interface IgnoreSourceChannel {
  /**
   * The ignored source channel
   */
  'ignore-source-channel': string;
}
/**
 * Ignores a named source network of the replay file.
 */
export interface IgnoreSourceNetwork {
  /**
   * The ignored source network name. Only works if the replay file was created by CANoe and contains the relevant metadata.
   */
  'ignore-source-network': string;
}
/**
 * Settings that change the runtime behavior of CANoe SE.
 */
export interface RuntimeSettings {
  fdx?: FDXSettings;
  python?: PythonSettings;
  'sil-kit'?: SILKitSettings;
  'vector-hardware-manager'?: VectorHardwareManagerSettings;
  'vt-system'?: VTSystemSettings;
  xil?: XILAPISettings;
}
/**
 * Settings that change the behavior of FDX.
 * Requires that FDX is configured in the environment.
 * Cannot be used in offline mode.
 */
export interface FDXSettings {
  /**
   * Overrides the UDP or TCP port for the FDX protocol.
   */
  port: number;
}
/**
 * Settings that change the behavior of Python.
 */
export interface PythonSettings {
  /**
   * Select a virtual environment folder. The path includes the directory of the virtual environment.
   */
  'virtual-environment-path': string;
}
/**
 * Settings that change the behavior of SIL Kit.
 * Requires that SIL Kit is configured in the environment.
 * Cannot be used in offline mode.
 */
export interface SILKitSettings {
  /**
   * Absolute or relative path to a SIL Kit config file (.yaml/.json). Relative path specifications are resolved relative to the configuration file.
   */
  'config-file-path'?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Maximum waiting time for the other simulation participants. Valid only when "time-source" is set to "external-sil-kit" in the environment.
   */
  'life-cycle-event-timeout-in-sec'?: number;
}
/**
 * Settings that change the interaction between CANoe SE and the Vector Hardware Manager.
 */
export interface VectorHardwareManagerSettings {
  /**
   * CANoe SE will start with this application name. The application name is used for channel assignment in the Vector Hardware Manager.
   */
  'application-name': string;
  /**
   * List of ethernet network names to which a prefix should be added in a environment when it is opened.
   * The prefix consists of the application name with a separating "_" which will be added to the network names.
   * If this property is not present, all ethernet networks receive the prefix.
   *
   * @minItems 1
   */
  'prefixed-ethernet-networks'?: [string, ...string[]];
}
/**
 * Settings that change VT System.
 * Requires that a VT System is configured in the environment.
 * Cannot be used in offline mode.
 */
export interface VTSystemSettings {
  /**
   * The name of the network adapter which should be used by the VT System.
   */
  'adapter-name': string;
}
/**
 * Settings that change the behavior of the XIL API server.
 * Cannot be used in offline mode.
 */
export interface XILAPISettings {
  /**
   * Overrides the TCP port to be used by the XIL API
   */
  port: number;
}
