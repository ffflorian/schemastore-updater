/* eslint-disable */

/**
 * Json schema version for the venvplus configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '1.0.0';
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
