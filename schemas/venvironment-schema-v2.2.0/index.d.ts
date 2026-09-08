/* eslint-disable */

/**
 * Json schema version for the vEnvironment configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '2.2.0';
/**
 * List of defines to be passed to capl / vcdl.
 */
export type Full = string[];
/**
 * List of application models representing some program. Entries can be deactivated with when.
 */
export type ApplicationModels = ApplicationModel[];
/**
 * A Network using the CANFD protocol taking part in a simulation.
 */
export type CANFDNetwork = (
  | {
      'arbitration-baudrate': unknown;
      'data-baudrate': unknown;
      [k: string]: unknown | undefined;
    }
  | {
      'arbitration-baudrate'?: never;
      'data-baudrate'?: never;
      [k: string]: unknown | undefined;
    }
) & {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Operation Mode setting (iso or non-iso Mode).
   */
  mode?: ('iso' | 'non-iso') | string;
  /**
   * Baudrate for the arbitration phase of CAN FD in Baud.
   *  If this value is set, it has priority.
   *  If this value is not set, the baudrate is read from the database. If the baudrate is missing from the database, the default value is used.
   */
  'arbitration-baudrate'?: number | string;
  /**
   * Baudrate for the data phase of CAN FD.
   *  If this value is set, it has priority.
   *  If this value is not set, the baudrate is read from the database. If the baudrate is missing from the database, the default value is used.
   */
  'data-baudrate'?: number | string;
  /**
   * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value '0' is not allowed. Caution: CAN and CANFD share the application channels!
   */
  'application-channel'?: number | string;
  /**
   * Define the mapping of application channels to an underlying layer. Connect the network either to simulated network ("internal-simulator") or to SIL Kit ("external-sil-kit").
   * The default value is derived from global-settings/default-network-mapping.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit') | string;
};
/**
 * List of CANFD networks. Entries can be deactivated with when.
 */
export type CANFDNetworks = CANFDNetwork[];
/**
 * List of CAN networks. Entries can be deactivated with when.
 */
export type CANNetworks = CANNetwork[];
/**
 * The explicitly mapped channels. Overwrites the default mapping for the source.
 */
export type ExplicitMappings = (MapSourceChannel | MapSourceNetwork | IgnoreSourceChannel | IgnoreSourceNetwork)[];
/**
 * List of CAN replay blocks. Entries can be deactivated with when.
 */
export type CANReplayBlocks = CANReplayBlock[];
/**
 * List of databases. Entries can be deactivated with when.
 */
export type Databases = Database[];
/**
 * List of defines to be passed to capl / vcdl. Entries can be deactivated with when.
 */
export type Defines = Define[];
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
export type Full2 = Ipv4WithSubnet[];
/**
 * List of IPv6 addresses with their subnet definition
 */
export type Full3 = {
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
export type Full4 = VlanSettings[];
/**
 * List of Ethernet networks. Entries can be deactivated with when.
 */
export type CANNetworks1 = EthernetNetwork[];
/**
 * List of ethernet replay blocks. Entries can be deactivated with when.
 */
export type EthernetReplayBlocks = EthernetReplayBlock[];
/**
 * Configuration of a key slot node.
 */
export type Full6 = {
  /**
   * Key slot operating modes.
   * "automatic": The key slot is possibly active. Any active frame in the Tx buffer will be selected for this key slot, if marked as start-up and/or sync frame.
   * "off": The key slot is not used.
   * "manual":Explicit definition of the key slot properties.  If set to "manual" the properties "usage", "slot", "mask" and "leading-cold-start" are mandatory.
   */
  mode: 'automatic' | 'off' | 'manual' | string;
  /**
   * The frame in this slot can be send as start-up or only as sync frame. Only allowed if property "mode" is set to "manual".
   */
  usage?: ('startup' | 'sync') | string;
  /**
   * Explicit slot number of the static segment that will be used as the key slot. Only allowed if property "mode" is set to "manual".
   */
  slot?: number | string;
  /**
   * Explicit channel mask used for the key slot. Only allowed if property "mode" is set to "manual".
   */
  mask?: ('A' | 'B' | 'AB') | string;
  /**
   * If deactivated the key slot can only act as a following start-up or integrating sync frame. Only allowed if property "mode" is set to "manual".
   */
  'leading-cold-start'?: boolean | string;
};
/**
 * List of FlexRay clusters. Entries can be deactivated with when.
 */
export type FlexRayClusters = FlexRayCluster[];
/**
 * The explicitly mapped channels. Overwrites the default mapping for the source.
 */
export type ExplicitMappings1 = (MapSourceNetwork1 | MapSourceChannel1)[];
/**
 * List of FlexRay replay blocks. Entries can be deactivated with when.
 */
export type FlexRayReplayBlocks = FlexRayReplayBlock[];
/**
 * Represents a functional mockup unit used in a scenario.
 */
export type FunctionalMockupUnit =
  | {
      /**
       * Only add this node to the environment if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a source file of a functional mockup unit (.fmu). Relative path specifications are resolved relative to the defining configuration file.
       */
      'file-path': (
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string;
      /**
       * Step size in seconds.
       */
      'stepsize-in-sec': number | string;
      /**
       * Is the debug output active.
       */
      'debug-output'?: boolean | string;
    }
  | {
      /**
       * Only add this node to the environment if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a source file of a functional mockup unit (.fmu). Relative path specifications are resolved relative to the defining configuration file.
       */
      'file-path': (
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string;
      /**
       * Step size in seconds.
       */
      'stepsize-in-sec': number | string;
      /**
       * Is the debug output active.
       */
      'debug-output'?: boolean | string;
      'active-model-variables': ActiveModelVariables;
    }
  | {
      /**
       * Only add this node to the environment if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a source file of a functional mockup unit (.fmu). Relative path specifications are resolved relative to the defining configuration file.
       */
      'file-path': (
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string;
      /**
       * Step size in seconds.
       */
      'stepsize-in-sec': number | string;
      /**
       * Is the debug output active.
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
 * Global settings for all scenarios.
 */
export type GlobalSettings = {
  ethernet?: GlobalSettingsForEthernet;
  flexray?: GlobalSettingsForFlexRay;
  database?: GlobalSettingsForDatabase;
  /**
   * User defined settings for namespace generation in the .Net typelib. Default complies with the setting "Automatic Qualification". With this setting the namespaces for signals are automatically generated so that each class is unique. For each frame a class is generated in the namespace "NetworkDB.Frames".
   *
   * @minItems 1
   */
  'database-dotnet-namespace-generation'?: [
    ('use-network' | 'use-database' | 'use-frame' | 'use-node') | string,
    ...(('use-network' | 'use-database' | 'use-frame' | 'use-node') | string)[]
  ];
  /**
   * If a number is provided, the measurement is slowed-down by this factor. For scaling factors between zero and one, the simulation is accelerated accordingly. For example, if you enter the value 0.1 the measurement is accelerated by a factor of 10.
   * "as-fast-as-possible": Run the simulation as fast as possible. The simulation speed is not constant and depends on the performance of the computer and the load that is provoked by the simulation. The property "time-scaling-factor" is mandatory if "time-source" is set to "internal-scaled" and is forbidden otherwise.
   */
  'time-scaling-factor'?: number | 'as-fast-as-possible' | string;
  /**
   * Time source for the simulation. Operate without hardware and simulate all buses completely.
   * "internal-realtime": The time response of the measurement (time basis) is controlled internally.
   * "internal-scaled": The simulation speed is provided through the property "time-scaling-factor".
   * "external-software": The time response of the measurement (time basis) is controlled by an external program. The property "time-scaling-factor" is mandatory if "time-source" is set to "internal-scaled" and is forbidden otherwise.
   */
  'time-source'?: ('internal-realtime' | 'internal-scaled' | 'external-software') | string;
  /**
   * Define the default network mapping. This value can be overwritten on network level. The available options depend on the time-source.
   * "internal-realtime" and "external-software"" are supporting "internal-simulator" and "external-sil-kit".
   * "internal-scaled" only supports "internal-simulator".
   */
  'default-network-mapping'?: ('internal-simulator' | 'external-sil-kit') | string;
};
/**
 * These settings control the interpretation of frames and PDUs of FlexRay configurations with channels A and B.
 */
export type GlobalSettingsForFlexRay = {
  /**
   * If active, PDUs on both channels will be configured with channel mask 'AB' and channel postfixes (e.g. xy_Ch_A, xy_Ch_B) will be created for ambiguous objects. If this property is provided "postfixes-for-ambiguous-pdus-on-channel" is forbidden.
   */
  'enable-dual-channel-support'?: string | boolean;
  /**
   * Definition of postfix settings if dual channel support is not activated. If this property is provided "enable-dual-channel-support" is forbidden.
   */
  'postfixes-for-ambiguous-pdus-on-channel'?: ('A' | 'B' | 'A&B' | 'no-postfixes') | string;
};
/**
 * Include a different file (similar to #include of the c preprocessor). The order of includes does not matter. Circular / multiple includes are resolved correctly.
 */
export type IncludeFiles = string | string[];
/**
 * List of LIN networks. Entries can be deactivated with when.
 */
export type LINNetworks = LINNetwork[];
/**
 * List of LIN replay blocks. Entries can be deactivated with when.
 */
export type LINReplayBlocks = LINReplayBlock[];
/**
 * Lists of programming modules to be used by the simulation. Entries can be deactivated with when.
 */
export type ProgrammingModules = ProgrammingModules1[];
/**
 * This variable can be used in any other node and overwritten by a scenario.
 */
export type Variable =
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Take the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type implicit type (string, number or bool).
       */
      value: string | number | boolean;
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Take the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type integer.
       */
      value?: number;
      type: 'int';
      options?: number[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Take the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type unsigned integer.
       */
      value?: number;
      type: 'uint';
      options?: number[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Take the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type string or path.
       */
      value?: string;
      type: 'string' | 'path';
      options?: string[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Take the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type bool.
       */
      value?: boolean;
      type: 'bool';
      options?: boolean[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Take the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type float.
       */
      value?: number;
      type: 'float';
      options?: number[];
    };
/**
 * List of variables to be used in this configuration file.
 */
export type Variables = Variable[];
/**
 * List of scenarios with the option to define or override variables and defines.
 */
export type Scenarios = Scenario[];
/**
 * List with security profile to network assignments. The Security profile is used for SecOC, Diagnostics and Backend Access.
 */
export type NetworkSecurityProfileAssignments = NetworkSecurityProfileAssignment[];
/**
 * List with security profile to ethernet stack assignments. The security profile is used for TLS and IPSec.
 */
export type EthernetStackSecurityProfileAssignments = EthernetStackSecurityProfileAssignment[];
/**
 * List of networks represented by this application.
 */
export type Full8 = Full9[];
/**
 * A list of simulation nodes used in a simulation. Entries can be deactivated with when.
 */
export type SimulationNodes = SimulationNode[];
/**
 * A list of system variables to be used by the simulation. Entries can be deactivated with when.
 */
export type SystemVariables = SystemVariables1[];
/**
 * List of user files. Entries can be deactivated with when.
 */
export type UserFiles = UserFiles1[];
/**
 * List of XCP configuration files (entries can be deactivated with when)
 */
export type XCPFiles = XCPFiles1[];

export interface VenvironmentSchema {
  version: Version;
  'application-models'?: ApplicationModels;
  'canfd-networks'?: CANFDNetworks;
  'can-networks'?: CANNetworks;
  'can-replay-blocks'?: CANReplayBlocks;
  databases?: Databases;
  datasources?: Datasources;
  defines?: Defines;
  'ethernet-networks'?: CANNetworks1;
  'ethernet-replay-blocks'?: EthernetReplayBlocks;
  fdx?: FDX;
  'flexray-clusters'?: FlexRayClusters;
  'flexray-replay-blocks'?: FlexRayReplayBlocks;
  'functional-mockup-units'?: FunctionalMockupUnits;
  'global-settings'?: GlobalSettings;
  includes?: IncludeFiles;
  'lin-networks'?: LINNetworks;
  'lin-replay-blocks'?: LINReplayBlocks;
  logging?: LoggingBlock;
  'programming-modules'?: ProgrammingModules;
  scenarios?: Scenarios;
  security?: Security;
  'sil-kit'?: SILKit;
  'simulation-nodes'?: SimulationNodes;
  'system-variables'?: SystemVariables;
  'user-files'?: UserFiles;
  variables?: Variables;
  'xcp-configuration-files'?: XCPFiles;
}
/**
 * Represents an application used in a scenario.
 */
export interface ApplicationModel {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a source file of an application model (can/canencr/cs/sln/py/vmodule). Relative path specifications are resolved relative to the defining configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  defines?: Full;
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
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Baudrate of this CAN bus.
   *  If this value is set, it has priority.
   *  If this value is not set, the baudrate is read from the database. If the baudrate is missing from the database, the default value is used.
   */
  baudrate?: number | string;
  /**
   * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value '0' is not allowed. Caution: CAN and CANFD share the application channels!
   */
  'application-channel'?: number | string;
  /**
   * Define the mapping of application channels to an underlying layer. Connect the network either to simulated network ("internal-simulator") or to SIL Kit ("external-sil-kit").
   * The default value is derived from global-settings/default-network-mapping.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit') | string;
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
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a replay file. Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Replay starts with measurement start.
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
  'delay-ms'?: string | number;
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
  'source-channel': string | number;
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
  'ignore-source-channel': string | number;
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
 * Absolute or relative path to an external database file (.dbc / .ldf / ...). Relative path specifications are resolved relative to the defining configuration file.
 */
export interface Database {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Select a network from the database (cluster name if .arxml). If selected, 'name' must match 'network-name'.
   */
  'network-name'?: string;
  /**
   * Absolute or relative path to an external database file (.arxml/.dbc/.ldf). Relative path specifications are resolved relative to the YAML configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
}
/**
 * The definition of datasources used by application models. Input files can be deactivated with when.
 */
export interface Datasources {
  'input-files'?: {
    /**
     * Only add this node to the environment if the specified condition is true.
     */
    when?: string | boolean;
    'file-path':
      | ((
          | {
              [k: string]: unknown | undefined;
            }
          | string
        ) &
          string)
      | ((
          | {
              [k: string]: unknown | undefined;
            }
          | string
        ) &
          string)[];
    defines?: Full;
  }[];
}
/**
 * Defines to be passed to capl / vcdl.
 */
export interface Define {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  define: string | Full;
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
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database?: {
    [k: string]: unknown | undefined;
  } & string;
  'tcp-ip-stack-adapter'?: Full1;
  /**
   * Define the mapping of application channels to an underlying layer. Connect the network either to simulated network ("internal-simulator") or to SIL Kit ("external-sil-kit").
   * The default value is derived from global-settings/default-network-mapping.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit') | string;
  /**
   * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 32. Value '0' is not allowed.
   */
  'application-channel'?: string | number;
  /**
   * A List if measurement ports whose data you want to measure (e.g. for logging).
   */
  'measurement-ports'?: ({
    [k: string]: unknown | undefined;
  } & string)[];
}
/**
 * Address configuration for an TCP/IP stack.
 */
export interface Full1 {
  /**
   * MAC-Address of the current TcpIpStack (cannot be a multicast address)
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
        addresses: Full2;
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
        addresses: Full3;
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  vlans?: Full4;
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
        addresses: Full2;
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
        addresses: Full3;
        /**
         * Defines how the addresses are configured. Use 'static' to configure them manually with the 'addresses' property or use 'dhcp' for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
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
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a replay file. Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Replay starts with measurement start.
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
 * FDX settings. Entry can be deactivated with when.
 */
export interface FDX {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Protocol to be used as transport layer for the FDX protocol
   */
  'transport-layer': ('udp/ipv4' | 'udp/ipv6' | 'tcp/ipv4' | 'tcp/ipv6') | string;
  /**
   * UDP or TCP port to be used for the FDX protocol
   */
  port: number | string;
  /**
   * List of XML files that describe which signals or variables are to be exchanged and the manner in which this is to occur (e.g., with regard to grouping). Each entry can be deactivated with when.
   */
  'description-files'?: {
    /**
     * Only add this node to the environment if the specified condition is true.
     */
    when?: string | boolean;
    /**
     * Absolute or relative path to a FDX description file. Relative path specifications are resolved relative to the configuration file.
     */
    'file-path': (
      | {
          [k: string]: unknown | undefined;
        }
      | string
    ) &
      string;
  }[];
}
/**
 * A cluster using the FlexRay protocol taking part in a simulation.
 */
export interface FlexRayCluster {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Index of the Application Channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 32. Value '0' is not allowed.
   */
  'application-channel'?: number | string;
  /**
   * Define the mapping of application channels to an underlying layer. Connect the network either to simulated network ("internal-simulator") or to SIL Kit ("external-sil-kit").
   * The default value is derived from global-settings/default-network-mapping.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit') | string;
  'key-slot-configuration'?: Full5;
}
/**
 * Via the key slot configuration it is possible to transmit two start-up/sync frames. Thus an external start-up node is not required for the start-up of a flexray cluster.
 */
export interface Full5 {
  'slot-1'?: Full6;
  'slot-2'?: Full6;
}
/**
 * A replay block for the FlexRay protocol.
 */
export interface FlexRayReplayBlock {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a replay file. Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Name of the FlexRay cluster, this replay node is attached to.
   */
  network: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Replay starts with measurement start.
   */
  'replay-on-measurement-start'?: boolean | string;
  'channel-mapping'?: ChannelMapping1;
  /**
   * List of nodes, whose transmitted messages should be replayed from the logging file. If not set, all are active by default.
   */
  'replay-nodes'?: ({
    [k: string]: unknown | undefined;
  } & string)[];
}
/**
 * The channel mapping for a FlexRay replay block.
 */
export interface ChannelMapping1 {
  /**
   * The default mapping of a channel if it is not explicitly mapped.
   */
  'default-mapping'?: 'as-in-original' | 'ignore-all' | string;
  mappings?: ExplicitMappings1;
}
/**
 * Mapping of a named source network from the replay file to the network this node is linked to.
 */
export interface MapSourceNetwork1 {
  /**
   * The source network name. Only works if the replay file was created by CANoe and contains the relevant metadata.
   */
  'source-network': string;
}
/**
 * Mapping of an application channel from the replay file to the network this node is linked to.
 */
export interface MapSourceChannel1 {
  /**
   * The source application channel from the replayed file.
   */
  'source-channel': string | number;
}
export interface GlobalSettingsForEthernet {
  /**
   * Mode of the underlying Ethernet bus. Classic approach is the 'Channel-based' setup. More recent and recommended mode is the switched 'Network-based' mode (port based).
   */
  'access-mode'?: ('network-based' | 'channel-based') | string;
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
         * If set to "operating-system", the machines configuration is used. If set to "canoe", a custom configuration can be provided
         */
        'selected-stack': 'operating-system';
      }
    | {
        /**
         * If set to "operating-system", the machines configuration is used. If set to "canoe", a custom configuration can be provided
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
export interface GlobalSettingsForDatabase {
  /**
   * Configure the PDU layer in relation to AUTOSAR databases.
   * 'no-pdus' : Creation of frames only
   * 'from-autosar-4.0' : Creation of AUTOSAR PDUs for AUTOSAR DBs >= 4.0
   * 'from-autosar-4.2' : Creation of AUTOSAR PDUs for AUTOSAR DBs >= 4.2
   */
  'autosar-pdu-layer'?: ('no-pdus' | 'from-autosar-4.0' | 'from-autosar-4.2') | string;
  /**
   * Control naming of text table entries and influence signal qualification. Use text from COMPU-CONST nodes or SHORT-LABEL nodes.
   */
  'autosar-text-table-entries'?: ('compu-const' | 'short-label') | string;
  /**
   * Control the generation of services for SOME/IP PDUs without service context.
   */
  'some-ip-pdus-without-service-context'?: ('ignore' | 'generate-service') | string;
}
/**
 * A network using the LIN protocol taking part in a simulation.
 */
export interface LINNetwork {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 64. Value '0' is not allowed.
   */
  'application-channel'?: number | string;
  /**
   * Define the mapping of application channels to an underlying layer. Connect the network either to simulated network ("internal-simulator") or to SIL Kit ("external-sil-kit").
   * The default value is derived from global-settings/default-network-mapping.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit') | string;
  /**
   * Working mode of the LIN interface.
   *  "commander": the LIN network interface is able to output message headers on the network.
   *  "responder": the LIN network interface responds to received LIN headers if a response to the LIN ID contained within the header has been configured.
   */
  mode?: ('commander' | 'responder') | string;
}
/**
 * A replay block for the LIN protocol.
 */
export interface LINReplayBlock {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a replay file. Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Replay starts with measurement start.
   */
  'replay-on-measurement-start'?: boolean | string;
  /**
   * Send system variable values.
   */
  'send-system-variables'?: boolean | string;
  'start-timing-condition'?: TimingConditions;
  'channel-mapping'?: ChannelMapping;
  /**
   * Select events to be replayed.
   * 'all-responses': replay all the responses.
   * 'master-responses-only': replay the responses only for frames published by the Master node.
   * 'master-requests-only': replay only 0x3c responses.
   * 'no-headers': disable replay of the LIN frame headers.
   */
  'replay-mode'?: ('all-responses' | 'master-responses-only' | 'master-requests-only' | 'no-headers') | string;
  /**
   * Select which events from rx-responses, tx-responses and wakeup-signals are replayed. If not set, the default value depends on the value of replay-mode.
   *  For 'all-responses' or 'master-responses-only': all events are sent.
   *  For 'master-requests-only': only wakeup-events are sent.
   *  For 'no-headers': none of the events are sent.
   */
  'send-events'?: (('tx-responses' | 'rx-responses' | 'wakeup-signals') | string)[];
}
/**
 * Configuration of the logging for the environment.
 */
export interface LoggingBlock {
  /**
   * Name of a blf file, supporting the field codes: {ComputerName}, {LocalTime}, {MeasurementIndex}, {MeasurementStart}, {IncSize|001|100MB} and {IncTime|001|01h00m}.
   */
  'file-name': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * List of event types to be logged.
   */
  'logging-events'?: (
    ('application-layer' | 'bus' | 'diagnostic' | 'internal' | 'statistic' | 'system-variable' | 'test') | string
  )[];
  advanced?: Full7;
}
/**
 * Advanced logging configurations.
 */
export interface Full7 {
  /**
   * Specify whether a warning is shown at the start of measurement before overwriting an existing logging file.
   */
  'warn-overwritten-log-file'?: boolean | string;
  /**
   * Specify whether an error is shown after the measurement if data loss occurred during the measurement. Lines in the logging file marked with a * as a special symbol have corrupted lines around them.
   */
  'show-error-on-data-loss'?: boolean | string;
}
/**
 * Programming modules file paths (capl-library or c-library). Entry can be deactivated with when.
 */
export interface ProgrammingModules1 {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a CAPL library. Relative path specifications are resolved relative to the configuration file.
   */
  'capl-library-path'?:
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)[];
  /**
   * Absolute or relative path to a C-library. Relative path specifications are resolved relative to the configuration file.
   */
  'c-library-path'?:
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)[];
}
/**
 * A scenario with the option to define or override variables and defines.
 */
export interface Scenario {
  /**
   * Name of the scenario
   */
  name: string;
  variables?: Variables;
  defines?: Full;
}
/**
 * Security settings
 */
export interface Security {
  'network-profile-assignments'?: NetworkSecurityProfileAssignments;
  'stack-profile-assignments'?: EthernetStackSecurityProfileAssignments;
  /**
   * The ID of the assigned security profile to the OS ethernet stack.
   */
  'operating-system-stack-profile-id'?: string | number;
  /**
   * The ID of the assigned security profile to the shared CANoe ethernet stack.
   */
  'shared-canoe-stack-profile-id'?: string | number;
}
/**
 * Assignment of a security profile to a network.
 */
export interface NetworkSecurityProfileAssignment {
  /**
   * The name of the network to which the security profile shall be assigned.
   */
  network: string;
  /**
   * The ID of the assigned security profile.
   */
  'profile-id': string | number;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
}
/**
 * Assignment of a security profile to an ethernet stack.
 */
export interface EthernetStackSecurityProfileAssignment {
  /**
   * The name of the simulation node. The security profile will be assigned to the ethernet stack of the simulation node.
   */
  'simulation-node': string;
  /**
   * The ID of the assigned security profile.
   */
  'profile-id': string | number;
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
}
/**
 * SIL Kit settings. Entry can be deactivated with when.
 */
export interface SILKit {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * The URI of the registry.
   */
  'registry-uri'?: string;
  /**
   * Name used by the simulation tool to join a simulation as a participant at the start of a measurement.
   */
  'participant-name': string;
  /**
   * Absolute or relative path to a SIL Kit config file (.yaml or .json). Relative path specifications are resolved relative to the configuration file.
   */
  'config-file-path'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Time length of a single simulation step. Valid only for the time-source "external-software".
   */
  'simulation-step-in-micro-sec'?: number | string;
  /**
   * Maximum waiting time for the other simulation participants. Valid only for the time-source "external-software".
   */
  'life-cycle-event-timeout-in-sec'?: number | string;
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
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a source file of a simulation node. Relative path specifications are resolved relative to the defining configuration file.
   */
  'file-path'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  'network-assignments': Full8;
  defines?: Full;
  /**
   * Use to assign explicitly a database node to a simulation node. If not set, the simulation-node name will be used as database-node. To deactivate automatic assignment, it should be set to false.
   */
  'database-node'?: boolean | string;
  /**
   * A list of vmodule modeling libraries to assign to the simulation node.
   *
   * Items: Absolute or relative path to a vmodule modeling library. Relative path specifications are resolved relative to the configuration file.
   */
  'modeling-libraries'?: ((
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string)[];
  /**
   * Simulation node configuration for the TCP/IP stack.
   */
  'tcp-ip-stack'?:
    | {
        /**
         * If set to "operating-system", the machines configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires globals-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
         *  If set to "individual", a custom configuration can be provided.
         */
        'selected-stack': 'operating-system' | 'canoe';
      }
    | {
        /**
         * If set to "operating-system", the machines configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires globals-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
         *  If set to "individual", a custom configuration can be provided.
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
export interface Full9 {
  /**
   * Assign the simulation node to a network.
   */
  network: {
    [k: string]: unknown | undefined;
  } & string;
  'tcp-ip-stack-adapter'?: Full1;
}
/**
 * Absolute or relative path to an external file containing system variables. Relative path specifications are resolved relative to the defining configuration file.
 */
export interface SystemVariables1 {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to an external file containing system variables. Relative path specifications are resolved relative to the defining configuration file.
   */
  'file-path':
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)[];
}
/**
 * Absolute or relative path to user files that can be read/written by CAPL/.NET Scripts. Relative path specifications are resolved relative to the defining configuration file.
 */
export interface UserFiles1 {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to an user file. Relative path specifications are resolved relative to the defining configuration file.
   */
  'file-path': string | string[];
}
/**
 * Absolute or relative path to an external xcpcfg file. Relative path specifications are resolved relative to the defining configuration file.
 */
export interface XCPFiles1 {
  /**
   * Only add this node to the environment if the specified condition is true.
   */
  when?: string | boolean;
  'file-path':
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)
    | ((
        | {
            [k: string]: unknown | undefined;
          }
        | string
      ) &
        string)[];
}
