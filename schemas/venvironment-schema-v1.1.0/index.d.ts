/* eslint-disable */

/**
 * Json schema version for the vEnvironment configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '1.1.0';
/**
 * Global settings for all scenarios.
 */
export type GlobalSettings = {
  'ethernet-settings'?: GlobalSettingsForEthernet;
  'time-scaling-factor'?: unknown;
  /**
   * Time source for the simulation.
   */
  'time-source'?: string | 'internal-realtime' | 'external-software' | 'internal-scaled';
};
/**
 * Include a different file (similar to #include of the c preprocessor). The order of includes does not matter. Circular / multiple includes are resolved correctly.
 */
export type IncludeFiles = string | string[];
/**
 * This variable can be used in any other node and overwritten by a scenario.
 */
export type Variable =
  | {
      name?: string;
      'from-environment'?: boolean;
      value: string | number | boolean;
    }
  | {
      name?: string;
      'from-environment'?: boolean;
      value?: number;
      type: 'int';
      options?: number[];
    }
  | {
      name?: string;
      'from-environment'?: boolean;
      value?: number;
      type: 'uint';
      options?: number[];
    }
  | {
      name?: string;
      'from-environment'?: boolean;
      value?: string;
      type: 'string' | 'path';
      options?: string[];
    }
  | {
      name?: string;
      'from-environment'?: boolean;
      value?: boolean;
      type: 'bool';
      options?: boolean[];
    }
  | {
      name?: string;
      'from-environment'?: boolean;
      value?: number;
      type: 'float';
      options?: number[];
    };
/**
 * List of variables to be used in this configuration file.
 */
export type Variables = Variable[];
/**
 * List of defines to be passed to capl / vcdl.
 *
 * Items: Define to be passed to capl / vcdl.
 */
export type Full = string[];
/**
 * List of application models representing some program. Entries can be deactivated with when.
 */
export type ApplicationModels = ApplicationModel[];
/**
 * Represents a functional mockup unit used in a scenario
 */
export type FunctionalMockupUnit =
  | {
      /**
       * Declares when to add this node.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a source file of a functional mockup unit (.fmu). Relative path specifications are resolved relative to the defining configuration file.
       */
      'file-path': {
        [k: string]: unknown | undefined;
      } & string;
      /**
       * step size in seconds
       */
      'stepsize-in-sec': number | string;
      /**
       * Are the debug outputs on
       */
      'debug-output'?: boolean | string;
    }
  | {
      /**
       * Declares when to add this node.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a source file of a functional mockup unit (.fmu). Relative path specifications are resolved relative to the defining configuration file.
       */
      'file-path': {
        [k: string]: unknown | undefined;
      } & string;
      /**
       * step size in seconds
       */
      'stepsize-in-sec': number | string;
      /**
       * Are the debug outputs on
       */
      'debug-output'?: boolean | string;
      'active-model-variables': ActiveModelVariables;
    }
  | {
      /**
       * Declares when to add this node.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a source file of a functional mockup unit (.fmu). Relative path specifications are resolved relative to the defining configuration file.
       */
      'file-path': {
        [k: string]: unknown | undefined;
      } & string;
      /**
       * step size in seconds
       */
      'stepsize-in-sec': number | string;
      /**
       * Are the debug outputs on
       */
      'debug-output'?: boolean | string;
      'inactive-model-variables': InactiveModelVariables;
    };
/**
 * List of the FMU variables which should be exported
 */
export type ActiveModelVariables = string[];
/**
 * List of the FMU variables which should be excluded from the export
 */
export type InactiveModelVariables = string[];
/**
 * List of functional mockup units. Entries can be deactivated with when.
 */
export type FunctionalMockupUnits = FunctionalMockupUnit[];
/**
 * List of defines to be passed to capl / vcdl. Entries can be deactivated with when.
 */
export type Defines = Define[];
/**
 * A lists of system variables to be used by the simulation. Entries can be deactivated with when.
 */
export type SystemVariables = SystemVariables1[];
/**
 * List of XCP configuration files (entries can be deactivated with when)
 */
export type XCPFiles = XCPFiles1[];
export type Ipv4WithSubnet =
  | {
      /**
       * IPv4 address
       */
      address: (
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string;
      /**
       * Subnet mask of an IPv4 Address
       */
      'subnet-mask': (
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string;
    }
  | {
      /**
       * IPv4 address
       */
      address: (
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string;
      /**
       * Subnet prefix of an IPv4 Address
       */
      'subnet-prefix-length': number | string;
    };
/**
 * List of IPv4 addresses with their subnet definition
 */
export type Full6 = Ipv4WithSubnet[];
/**
 * List of IPv6 addresses with their subnet definition
 */
export type Full7 = {
  /**
   * IPv6 address
   */
  address: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Subnetprefix of an IPv6 Address
   */
  'subnet-prefix-length': number | string;
}[];
/**
 * A list of VLANs with their relevant settings.
 *
 * @maxItems 4094
 */
export type Full8 = VlanSettings[];
/**
 * List of network nodes represented by this application
 */
export type Full2 = Full3[];
/**
 * A list of simulation nodes used in a simulation. Entries can be deactivated with when.
 */
export type SimulationNodes = SimulationNode[];
/**
 * List of databases. Entries can be deactivated with when.
 */
export type Databases = Database[];
/**
 * A list of C-identifiers for referenced elements (case sensitive)
 */
export type Full9 = ({
  [k: string]: unknown | undefined;
} & string)[];
/**
 * List of CAN networks. Entries can be deactivated with when.
 */
export type CANNetworks = CANNetwork[];
/**
 * List of CANFD networks. Entries can be deactivated with when.
 */
export type CANFDNetworks = CANFDNetwork[];
/**
 * List of Ethernet networks. Entries can be deactivated with when.
 */
export type CANNetworks1 = EthernetNetwork[];
/**
 * The explicitly mapped channels. Overwrites the default mapping for the source.
 */
export type ExplicitMappings = (MapSourceChannel | MapSourceNetwork | IgnoreSourceChannel | IgnoreSourceNetwork)[];
/**
 * List of CAN replay blocks. Entries can be deactivated with when.
 */
export type CANReplayBlocks = CANReplayBlock[];
/**
 * List of ethernet replay blocks. Entries can be deactivated with when.
 */
export type EthernetReplayBlocks = EthernetReplayBlock[];
/**
 * List of scenarios with the option to define / override variables or defines.
 */
export type Scenarios = Scenario[];

export interface VenvironmentSchema {
  version: Version;
  'global-settings'?: GlobalSettings;
  includes?: IncludeFiles;
  variables?: Variables;
  'application-models'?: ApplicationModels;
  datasources?: Datasources;
  'functional-mockup-units'?: FunctionalMockupUnits;
  'sil-kit'?: SILKit;
  defines?: Defines;
  'system-variables'?: SystemVariables;
  'xcp-configuration-files'?: XCPFiles;
  logging?: LoggingBlock;
  'simulation-nodes'?: SimulationNodes;
  databases?: Databases;
  'can-networks'?: CANNetworks;
  'canfd-networks'?: CANFDNetworks;
  'ethernet-networks'?: CANNetworks1;
  'can-replay-blocks'?: CANReplayBlocks;
  'ethernet-replay-blocks'?: EthernetReplayBlocks;
  scenarios?: Scenarios;
}
export interface GlobalSettingsForEthernet {
  /**
   * Mode of the underlying Ethernet bus. Classic approach is the 'Channel-based' setup.       More recent and recommended mode is the switched 'Network-based' mode (port based).
   */
  'access-mode'?: string | ('network-based' | 'channel-based');
  /**
   * Specifies how signals are updated on Network-based access. Will be ignored on Channel-based setups. Always: Events of all ports are used to update a signal without qualified ethernet port. rx-only: Only packets received by the interface are used, which leads to less duplicated updates. never: Signals without qualified ethernet ports are not updated.
   */
  'signal-updates'?: string | 'always' | 'rx-only' | 'never';
  /**
   * Global configuration for the TCP/IP stack.
   */
  'tcp-ip-stack'?:
    | {
        /**
         * If set to operating-system, the machines configuration is used. If set to canoe, a custom configuration can be provided
         */
        'selected-stack': 'operating-system';
      }
    | {
        /**
         * If set to operating-system, the machines configuration is used. If set to canoe, a custom configuration can be provided
         */
        'selected-stack': 'canoe' | string;
        /**
         * Activates TCP Routing
         */
        'activate-routing'?: boolean | string;
        /**
         * Activates the TCP Delayed Ack Option.
         */
        'tcp-delayed-ack'?: string | boolean;
        /**
         * Timestamp Option for TCP (RFC1323).
         */
        'timestamp-option-RFC1323'?: string | boolean;
        /**
         * Time To Live.
         */
        ttl?: number | string;
        /**
         * IPv4-Address of the Gateway
         */
        'ipv4-gateway'?:
          | string
          | ((
              | {
                  [k: string]: unknown | undefined;
                }
              | string
            ) &
              string);
        /**
         * IPv6-Address of the Gateway
         */
        'ipv6-gateway'?:
          | string
          | ((
              | {
                  [k: string]: unknown | undefined;
                }
              | string
            ) &
              string);
      };
}
/**
 * Represents an application used in a scenario
 */
export interface ApplicationModel {
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a source file of an application model (can/cs/sln/py/vmodule). Relative path specifications are resolved relative to the defining configuration file.
   */
  'file-path': {
    [k: string]: unknown | undefined;
  } & string;
  defines?: Full;
}
/**
 * The definition of datasources used by application models. Input files can be deactivated with when.
 */
export interface Datasources {
  'input-files'?: {
    /**
     * Declares when to add this node.
     */
    when?: string | boolean;
    'file-path':
      | ({
          [k: string]: unknown | undefined;
        } & string)
      | ({
          [k: string]: unknown | undefined;
        } & string)[];
  }[];
}
/**
 * SIL Kit settings. Entry can be deactivated with when.
 */
export interface SILKit {
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  /**
   * registry URI
   */
  'registry-uri'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Name used by CANoe4SW to join a simulation as a participant at the start of a measurement.
   */
  'participant-name': string;
  /**
   * Absolute or relative path to a SIL Kit config file (.yaml or .json). Relative path specifications are resolved relative to the configuration file.
   */
  'config-file-path'?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Time length of a single simulation step. Valid only for the time-source "external-software". Default: 100 us.
   */
  'simulation-step-in-micro-sec'?: number | string;
  /**
   * Maximum waiting time for the other simulation participants. Valid only for the time-source "external-software". Default: 30s.
   */
  'life-cycle-event-timeout-in-sec'?: number | string;
}
/**
 * Defines to be passed to capl / vcdl.
 */
export interface Define {
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  define: string | Full;
}
/**
 * Absolute or relative path to an external file containing system variables. Relative path specifications are resolved relative to the defining configuration file.
 */
export interface SystemVariables1 {
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  'file-path':
    | ({
        [k: string]: unknown | undefined;
      } & string)
    | ({
        [k: string]: unknown | undefined;
      } & string)[];
}
/**
 * Absolute or relative path to an external xcpcfg file. Relative path specifications are resolved relative to the defining configuration file.
 */
export interface XCPFiles1 {
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  'file-path':
    | ({
        [k: string]: unknown | undefined;
      } & string)
    | ({
        [k: string]: unknown | undefined;
      } & string)[];
}
/**
 * Configuration of the standalone logging block.
 */
export interface LoggingBlock {
  /**
   * Name of a blf file, supporting the field codes: {ComputerName}, {LocalTime}, {MeasurementIndex}, {MeasurementStart}, {IncSize|001|100MB} and {IncTime|001|01h00m}.
   */
  'file-name': {
    [k: string]: unknown | undefined;
  } & string;
  'logging-events'?: (('bus' | 'diagnostic' | 'internal' | 'statistic' | 'system-variable' | 'test') | string)[];
  advanced?: Full1;
}
/**
 * Advanced logging configurations
 */
export interface Full1 {
  'warn-overwritten-log-file'?: boolean | string;
  'show-error-on-data-loss'?: boolean | string;
}
/**
 * Represents a simulation node used in a simulation
 */
export interface SimulationNode {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a source file of a simulation node.  Relative path specifications are resolved relative to the defining configuration file.
   */
  'file-path'?: {
    [k: string]: unknown | undefined;
  } & string;
  'network-assignments': Full2;
  defines?: Full;
  /**
   * For assignment of modeling libraries to this simulation node
   *
   * Items: Absolute or relative path to a vmodule file. Relative path specifications are resolved relative to the configuration file.
   */
  'modeling-libraries'?: ({
    [k: string]: unknown | undefined;
  } & string)[];
  /**
   * Simulation node configuration for the TCP/IP stack.
   */
  'tcp-ip-stack'?:
    | {
        /**
         * If set to operating-system, the machines configuration is used.
         *  If set to canoe, the configuration on the global level is used (this requires globals-settings/ethernet-settings/tcp-ip-stack/selected-stack to be set to canoe).
         *  If set to individual, a custom configuration can be provided
         */
        'selected-stack': 'operating-system' | 'canoe';
      }
    | {
        /**
         * If set to operating-system, the machines configuration is used.
         *  If set to canoe, the configuration on the global level is used (this requires globals-settings/ethernet-settings/tcp-ip-stack/selected-stack to be set to canoe).
         *  If set to individual, a custom configuration can be provided
         */
        'selected-stack': 'individual' | string;
        /**
         * Activates TCP Routing
         */
        'activate-routing'?: boolean | string;
        /**
         * Activates the TCP Delayed Ack Option.
         */
        'tcp-delayed-ack'?: string | boolean;
        /**
         * Timestamp Option for TCP (RFC1323).
         */
        'timestamp-option-RFC1323'?: string | boolean;
        /**
         * Time To Live.
         */
        ttl?: number | string;
        /**
         * IPv4-Address of the Gateway
         */
        'ipv4-gateway'?:
          | string
          | ((
              | {
                  [k: string]: unknown | undefined;
                }
              | string
            ) &
              string);
        /**
         * IPv6-Address of the Gateway
         */
        'ipv6-gateway'?:
          | string
          | ((
              | {
                  [k: string]: unknown | undefined;
                }
              | string
            ) &
              string);
      };
}
/**
 * A network node represented by this application.
 */
export interface Full3 {
  /**
   * For assignment of this NetworkNode to a Network.
   */
  network: {
    [k: string]: unknown | undefined;
  } & string;
  'database-node'?: Full4;
  'lin-role'?: ('master' | 'slave' | 'config-tester') | ('master' | 'slave' | 'config-tester')[];
  'tcp-ip-stack-adapter'?: Full5;
}
/**
 * Reference to a certain node from a database
 */
export interface Full4 {
  /**
   * The node from the database
   */
  node: string;
  /**
   * The database
   */
  database: {
    [k: string]: unknown | undefined;
  } & string;
}
/**
 * Address configuration for an TCP/IP stack.
 */
export interface Full5 {
  /**
   * MAC-Address of the current TcpIpStack. (Can't be a multicast address.)
   */
  'mac-address'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Maximum Transmission Unit.
   */
  mtu?: number | string;
  /**
   * Configurations for IPv4.
   */
  'ipv4-settings'?:
    | {
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full6;
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full7;
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  vlans?: Full8;
}
/**
 * Defines a VLAN with its relevant settings.
 */
export interface VlanSettings {
  /**
   * Id of the current VLAN.
   */
  id: number | string;
  /**
   * Priority of the current VLAN.
   */
  priority: number | string;
  /**
   * Configurations for IPv4.
   */
  'ipv4-settings'?:
    | {
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full6;
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full7;
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
}
/**
 * Absolute or relative path to an external database file (.dbc / .ldf / ...). Relative path specifications are resolved relative to the defining configuration file.
 */
export interface Database {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  'network-name'?: string;
  'file-path': {
    [k: string]: unknown | undefined;
  } & string;
}
/**
 * A Network using the CAN protocol taking part in a simulation.
 */
export interface CANNetwork {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  databases?: Full9;
  /**
   * Baudrate in Baud.
   */
  baudrate?: number | string;
  /**
   * Index of the Application Channel. Each busytype should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value '0' is not allowed. Caution: CAN and CANFD share the Application Channels!
   */
  'application-channel'?: number | string;
  /**
   * Define the mapping of application channels to an underlying layer
   */
  mapping?: string | 'internal-simulator' | 'external-sil-kit';
}
/**
 * A Network using the CANFD protocol taking part in a simulation.
 */
export interface CANFDNetwork {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  databases?: Full9;
  /**
   * Operation Mode setting (iso or non-iso Mode).
   */
  mode?: ('iso' | 'non-iso') | string;
  /**
   * Baudrate for the arbitration phase of CAN FD in Baud.
   */
  'arbitration-baudrate'?: number | string;
  /**
   * Baudrate for the data phase of CAN FD in Baud.
   */
  'data-baudrate'?: number | string;
  /**
   * Index of the Application Channel. Each busytype should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value '0' is not allowed. Caution: CAN and CANFD share the Application Channels!
   */
  'application-channel'?: number | string;
  /**
   * Define the mapping of application channels to an underlying layer
   */
  mapping?: string | 'internal-simulator' | 'external-sil-kit';
}
/**
 * A Network using the Ethernet protocol taking part in a simulation.
 */
export interface EthernetNetwork {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  databases?: Full9;
  'tcp-ip-stack-adapter'?: Full5;
  /**
   * Define the mapping of application channels to an underlying layer
   */
  mapping?: string | 'internal-simulator' | 'external-sil-kit';
  /**
   * Index of the Application Channel. Each busytype should provide consecutive indices. Starts counting at 1. Value between 1 and 32. Value '0' is not allowed.
   */
  'application-channel'?: string | number;
}
/**
 * A replay block for the CAN protocol.
 */
export interface CANReplayBlock {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a replay file. Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Replay starts with measurement start
   */
  'replay-on-measurement-start'?: boolean | string;
  /**
   * Send system variable values.
   */
  'send-system-variables'?: boolean | string;
  'start-timing-condition'?: TimingConditions;
  'channel-mapping'?: ChannelMapping;
  /**
   * Replay the tx messages.
   */
  'send-tx-messages'?: boolean | string;
  /**
   * Replay the rx messages.
   */
  'send-rx-messages'?: boolean | string;
}
/**
 * Timing conditions for a replay block.
 */
export interface TimingConditions {
  /**
   * The condition when the replay shall start.
   */
  condition?: 'immediately' | 'first-event-time' | 'delayed' | string;
  /**
   * The delay in ms if the condition 'delayed' is selected. No effect otherwise.
   */
  'delay-ms'?: number | string;
}
/**
 * The channel mapping for a replay block.
 */
export interface ChannelMapping {
  /**
   * The default mapping of a channel if it is not explicitly mapped.
   */
  'default-mapping'?: 'as-in-original' | 'ignore-all' | string;
  mappings?: ExplicitMappings;
}
/**
 * Mapping from application channel of the replay file to a target network.
 */
export interface MapSourceChannel {
  /**
   * The source application channel from the replayed file.
   */
  'source-channel': number | string;
  /**
   * The target network name.
   */
  'target-network': string;
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
}
/**
 * Ignores an application channel of the replay file.
 */
export interface IgnoreSourceChannel {
  /**
   * The ignored source channel.
   */
  'ignore-source-channel': number | string;
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
 * A replay block for the ethernet protocol.
 */
export interface EthernetReplayBlock {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Declares when to add this node.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a replay file. Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Replay starts with measurement start
   */
  'replay-on-measurement-start'?: boolean | string;
  /**
   * Send system variable values.
   */
  'send-system-variables'?: boolean | string;
  'start-timing-condition'?: TimingConditions;
  'channel-mapping'?: ChannelMapping;
}
/**
 * A scenario with the option to define / override variables or defines
 */
export interface Scenario {
  name: string;
  variables?: Variables;
  defines?: Full;
}
