/* eslint-disable */

/**
 * Schema version for the venvironment.yaml configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '3.0.0';
/**
 * List of defines to be passed to CAPL, .NET, Python and VCDL.
 */
export type Full = string[];
/**
 * List of application models representing some program. Entries can be deactivated with when.
 */
export type ApplicationModels = ApplicationModel[];
/**
 * A network using the CAN or CAN FD protocol.
 */
export type CANOrCANFDNetwork =
  | {
      /**
       * A C-identifier for this element (case sensitive)
       */
      name: string;
      /**
       * Node is added to the environment only if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Reference to a database declared in the configuration file.
       */
      database: {
        [k: string]: unknown | undefined;
      } & string;
      /**
       * Defines the mapping of application channels to an underlying layer. Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
       */
      mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
      /**
       * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value "0" is not allowed.
       */
      'application-channel'?: number | string;
    }
  | {
      /**
       * A C-identifier for this element (case sensitive)
       */
      name: string;
      /**
       * Node is added to the environment only if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Reference to a database declared in the configuration file.
       */
      database: {
        [k: string]: unknown | undefined;
      } & string;
      /**
       * Defines the mapping of application channels to an underlying layer. Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
       */
      mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
      /**
       * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value "0" is not allowed.
       */
      'application-channel'?: number | string;
      'can-settings': CANNetworkSettings;
    }
  | {
      /**
       * A C-identifier for this element (case sensitive)
       */
      name: string;
      /**
       * Node is added to the environment only if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Reference to a database declared in the configuration file.
       */
      database: {
        [k: string]: unknown | undefined;
      } & string;
      /**
       * Defines the mapping of application channels to an underlying layer. Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
       */
      mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
      /**
       * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value "0" is not allowed.
       */
      'application-channel'?: number | string;
      'can-fd-settings': CANFDNetworkSettings;
    };
/**
 * Settings for the CAN FD network.
 */
export type CANFDNetworkSettings = (
  | {
      'arbitration-sample-point-in-percent': unknown;
      'data-sample-point-in-percent': unknown;
      'arbitration-bit-rate-k-bit-s': unknown;
      'data-bit-rate-k-bit-s': unknown;
      [k: string]: unknown | undefined;
    }
  | {
      'arbitration-sample-point-in-percent': unknown;
      'data-sample-point-in-percent': unknown;
      'arbitration-bit-rate-k-bit-s'?: never;
      'data-bit-rate-k-bit-s'?: never;
      [k: string]: unknown | undefined;
    }
  | {
      'arbitration-sample-point-in-percent'?: never;
      'data-sample-point-in-percent'?: never;
      'arbitration-bit-rate-k-bit-s': unknown;
      'data-bit-rate-k-bit-s': unknown;
      [k: string]: unknown | undefined;
    }
  | {
      'arbitration-sample-point-in-percent'?: never;
      'data-sample-point-in-percent'?: never;
      'arbitration-bit-rate-k-bit-s'?: never;
      'data-bit-rate-k-bit-s'?: never;
      [k: string]: unknown | undefined;
    }
) & {
  /**
   * Operation mode setting (iso or non-iso mode).
   */
  mode?: ('iso' | 'non-iso') | string;
  /**
   * Bit rate for the CAN FD arbitration phase in kbit/s.
   *  If this value is set, it has priority.
   *  If this value is not set, the arbitration bit rate is read from the database. If it is missing from the database, the default value is used.
   */
  'arbitration-bit-rate-k-bit-s'?: number | string;
  /**
   * Bit rate for the CAN FD data phase in kbit/s.
   *  If this value is set, it has priority.
   *  If this value is not set, the data bit rate is read from the database. If it is missing from the database, the default value is used.
   */
  'data-bit-rate-k-bit-s'?: number | string;
  /**
   * Sample point in percent.
   */
  'arbitration-sample-point-in-percent'?: number | string;
  /**
   * Sample point in percent.
   */
  'data-sample-point-in-percent'?: number | string;
};
/**
 * List of CAN and CAN FD networks. Entries can be deactivated with when.
 */
export type CANAndCANFDNetworks = CANOrCANFDNetwork[];
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
 * List of datasources. Entries can be deactivated with when.
 */
export type Datasources = Datasources1[];
/**
 * List of defines to be passed to CAPL, .NET, Python and VCDL. Entries can be deactivated with when.
 */
export type Defines = Define[];
/**
 * Diagnostic description with CDD.
 */
export type DiagnosticDescription = DiagnosticDescription1[];
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
      name?: {
        [k: string]: unknown | undefined;
      } & string;
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
      name?: {
        [k: string]: unknown | undefined;
      } & string;
      /**
       * Subnet prefix of an IPv4 Address
       */
      'subnet-prefix-length': number | string;
    };
/**
 * List of IPv4 addresses with their subnet definition
 */
export type Full3 = Ipv4WithSubnet[];
/**
 * List of IPv6 addresses with their subnet definition
 */
export type Full4 = {
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
  name?: {
    [k: string]: unknown | undefined;
  } & string;
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
export type Full5 = VlanSettings[];
/**
 * List of Ethernet networks. Entries can be deactivated with when.
 */
export type CANNetworks = EthernetNetwork[];
/**
 * List of Ethernet replay blocks. Entries can be deactivated with when.
 */
export type EthernetReplayBlocks = EthernetReplayBlock[];
/**
 * Configuration of a key slot node.
 */
export type Full7 = {
  /**
   * Key slot operating modes.
   * "automatic": the key slot is possibly active. Any active frame in the Tx buffer will be selected for this key slot, if marked as start-up and/or sync frame.
   * "deactivated": the key slot is not used.
   * "manual": explicit definition of the key slot properties.  If set to "manual" the properties "usage", "slot", "mask" and "leading-cold-start" are mandatory.
   */
  mode: 'automatic' | 'deactivated' | 'manual' | string;
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
 * Defines a functional mockup unit (.fmu). By default, all the fmu variables are activated.
 */
export type FunctionalMockupUnit =
  | {
      /**
       * Node is added to the environment only if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a functional mockup unit file (.fmu). Relative path specifications are resolved relative to the configuration file.
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
       * Node is added to the environment only if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a functional mockup unit file (.fmu). Relative path specifications are resolved relative to the configuration file.
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
       * Node is added to the environment only if the specified condition is true.
       */
      when?: string | boolean;
      /**
       * Absolute or relative path to a functional mockup unit file (.fmu). Relative path specifications are resolved relative to the configuration file.
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
 * Global settings for FlexRay controlling the interpretation of frames and PDUs of FlexRay configurations with channels A and B.
 */
export type GlobalSettingsForFlexRay = {
  /**
   * If active, PDUs on both channels will be configured with channel mask "AB" and channel postfixes (e.g. xy_Ch_A, xy_Ch_B) will be created for ambiguous objects. If this property is provided "postfixes-for-ambiguous-pdus-on-channel" is forbidden.
   */
  'enable-dual-channel-support'?: string | boolean;
  /**
   * Definition of postfix settings if dual channel support is not activated. If this property is provided "enable-dual-channel-support" is forbidden.
   */
  'postfixes-for-ambiguous-pdus-on-channel'?: ('A' | 'B' | 'A&B' | 'no-postfixes') | string;
};
/**
 * Global settings for the simulation working mode.
 */
export type GlobalSettingsForTheSimulationWorkingMode = {
  /**
   * If a number is provided, the measurement is slowed-down by this factor. For scaling factors between zero and one, the simulation is accelerated accordingly. For example, if you enter the value 0.1 the measurement is accelerated by a factor of 10.
   * "as-fast-as-possible": Run the simulation as fast as possible. The simulation speed is not constant and depends on the performance of the computer and the load that is provoked by the simulation. The property "time-scaling-factor" is mandatory if "time-source" is set to "internal-scaled" and is forbidden otherwise.
   */
  'time-scaling-factor'?: number | 'as-fast-as-possible' | string;
  /**
   * Time source for the simulation. Operate without hardware and simulate all buses completely.
   * If this property is set, "default-network-mapping" is also required.
   * "internal-realtime": The time response of the measurement (time basis) is controlled internally.
   * "internal-scaled": The simulation speed is provided through the property "time-scaling-factor".
   * "external-software": The time response of the measurement (time basis) is controlled by an external program.
   * "external-hardware": The time response of the measurement (time basis) is controlled by external hardware.
   * The property "time-scaling-factor" is mandatory if "time-source" is set to "internal-scaled" and is forbidden otherwise.
   */
  'time-source'?: ('internal-realtime' | 'internal-scaled' | 'external-software' | 'external-hardware') | string;
  /**
   * Defines the default network mapping. This value can be overwritten on network level.
   * If "time-source" is set, this property is also required.
   * The available options depend on the time-source.
   * "internal-realtime" and "external-software" are supporting "internal-simulator" and "external-sil-kit".
   * "internal-scaled" only supports "internal-simulator".
   */
  'default-network-mapping'?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
};
/**
 * Include a different file (similar to #include of the c preprocessor). The order of includes does not matter. Circular/multiple includes are resolved correctly.
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
 * Configuration of the logging.
 */
export type LoggingBlock = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Name of a .blf file, supporting the field codes: {ComputerName}, {LocalTime}, {MeasurementIndex}, {MeasurementStart}, {IncSize|001|100MB}, {IncTime|001|01h00m}, {IncTrigger|001}, {TriggerCondition} and {IncTrigger|001}_{TriggerCondition}
   */
  'file-name': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * List of event types to be logged.
   */
  'logging-events'?: (
    ('application-layer' | 'bus' | 'diagnostic' | 'internal' | 'statistic' | 'system-variable' | 'test') | string
  )[];
  advanced?: Full8;
  'toggle-trigger'?: Full9;
  'test-trigger'?: Full10;
};
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
       * Takes the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of implicit type (string, number or bool)
       */
      value: string | number | boolean;
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Takes the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type integer
       */
      value?: number;
      type: 'int';
      /**
       * List of possible values for the variable
       */
      options?: number[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Takes the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type unsigned integer
       */
      value?: number;
      type: 'uint';
      /**
       * List of possible values for the variable
       */
      options?: number[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Takes the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type string or path
       */
      value?: string;
      type: 'string' | 'path';
      /**
       * List of possible values for the variable
       */
      options?: string[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Takes the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type bool
       */
      value?: boolean;
      type: 'bool';
      /**
       * List of possible values for the variable
       */
      options?: boolean[];
    }
  | {
      /**
       * A C-identifier for this variable (case sensitive).
       */
      name: string;
      /**
       * Takes the value from a system environment variable.
       */
      'from-environment'?: boolean;
      /**
       * Variable of type float
       */
      value?: number;
      type: 'float';
      /**
       * List of possible values for the variable
       */
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
 * List with security profile to network assignments. The security profile is used for SecOC, Diagnostics and Backend Access.
 */
export type NetworkSecurityProfileAssignments = NetworkSecurityProfileAssignment[];
/**
 * List with security profile to Ethernet stack assignments. The security profile is used for TLS and IPSec.
 */
export type EthernetStackSecurityProfileAssignments = EthernetStackSecurityProfileAssignment[];
/**
 * List of networks this node is assigned to.
 */
export type Full11 = Full12[];
/**
 * List of simulation nodes. Entries can be deactivated with when.
 */
export type SimulationNodes = SimulationNode[];
/**
 * A list of system variable files. Entries can be deactivated with when.
 */
export type SystemVariables = SystemVariables1[];
/**
 * List of user files. Entries can be deactivated with when.
 */
export type UserFiles = UserFiles1[];
/**
 * List of XCP configuration files. Entries can be deactivated with when.
 */
export type XCPFiles = XCPFiles1[];

export interface VenvironmentSchema {
  version: Version;
  'application-models'?: ApplicationModels;
  'can-networks'?: CANAndCANFDNetworks;
  'can-replay-blocks'?: CANReplayBlocks;
  databases?: Databases;
  datasources?: Datasources;
  defines?: Defines;
  'diag-descriptions'?: DiagnosticDescription;
  'ethernet-networks'?: CANNetworks;
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
  'vio-system'?: VIOSystem;
  'xcp-configuration-files'?: XCPFiles;
}
/**
 * Describes an application model (.can/.canencr/.cs/.sln/.py/.vmodule). Also supports local defines.
 */
export interface ApplicationModel {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to an application model (.can/.canencr/.cs/.sln/.py/.vmodule). Relative path specifications are resolved relative to the configuration file.
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
 * Settings for the CAN network.
 */
export interface CANNetworkSettings {
  /**
   * Bit rate of the CAN bus in kbit/s.
   *  If this value is set, it has priority.
   *  If this value is not set, the bit rate is read from the database. If it is missing from the database, the default value is used.
   */
  'bit-rate-k-bit-s'?: number | string;
  /**
   * Sample point in percent.
   */
  'sample-point-in-percent'?: number | string;
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
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a logging file (.blf). Relative path specifications are resolved relative to the configuration file.
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
   * Sends the system variable values.
   */
  'send-system-variables'?: boolean | string;
  'start-timing-condition'?: TimingConditions;
  'channel-mapping'?: ChannelMapping;
  /**
   * Sends the tx messages.
   */
  'send-tx-messages'?: boolean | string;
  /**
   * Sends the rx messages.
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
   * The delay in ms if the condition "delayed" is selected. No effect otherwise.
   */
  'delay-ms'?: string | number;
}
/**
 * The channel mapping for a replay block.
 */
export interface ChannelMapping {
  /**
   * The default mapping of a channel if not explicitly mapped.
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
 * Describes a .arxml/.dbc/.ldf. A network from the database can be selected implicitly via "name" or explicitly via "network-name".
 */
export interface Database {
  /**
   * Name of the database. It implicitly selects a network if the names are matching. Must be a C-identifier (case sensitive)
   */
  name: string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Selects a network from the database (cluster if .arxml). Overrides the selection of the name property.
   */
  'network-name'?: string;
  /**
   * Absolute or relative path to a .arxml/.dbc/.ldf. Relative path specifications are resolved relative to the configuration file.
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
 * Defines datasources used by the application models (.vcdl/.vcodm). Input files can be deactivated with when.
 */
export interface Datasources1 {
  /**
   * Node is added to the environment only if the specified condition is true.
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
}
/**
 * Defines to be passed to CAPL, .NET, Python and VCDL.
 */
export interface Define {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  define: string | Full;
}
/**
 * Diagnostic description with CDD or PDX.
 */
export interface DiagnosticDescription1 {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  'ecu-identifier'?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a diagnostic description file (.cdd/.pdx). Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Interfaces in diagnostic description files define the communication parameters for accessing an ECU. Additional default interfaces are offered.
   */
  interface: string;
  /**
   * The variant determines which services and parameters are available for diagnostics and communication.
   */
  variant: string;
  /**
   * Name of the network this diagnostic description is attached to.
   */
  'network-assignment': {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * A diagnostic description file can contain several language versions of which one has to be selected. Note, that some diagnostic descriptions only support one single language.
   */
  language?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  'communication-parameters'?: CommunicationsParametersForDiagnostics;
  'doip-settings'?: DoIPSettings;
}
/**
 * Parameters from diagnostic description for transport and diagnostic layer.
 */
export interface CommunicationsParametersForDiagnostics {
  /**
   * StMin (separation time) defines the minimum time gap between consecutive frames which are to be sent from the Ecu to the Tester.
   */
  'st-min'?: number;
  /**
   * Time between functionally addressed TesterPresent (0x3E) request messages transmitted by the client to keep a diagnostic session other than the defaultSession active in multiple servers (functional communication) or maximum time between physically transmitted request messages to a single server (physical communication).
   * Alias: tester-present-time
   */
  's3-client'?: number;
  /**
   * Time for the server to keep a diagnostic session other than the defaultSession active while not receiving any diagnostic request message.
   * Alias: tester-present-time-ecu
   */
  's3-server'?: number;
  /**
   * Timeout for the client to wait after the successful transmission of a request message for the start of incoming response messages.
   * Alias: p2-max
   */
  'p2-client'?: number;
  /**
   * Enhanced timeout for the client to wait after the reception of a negative response message with negative response code 0x78 for the start of incoming response messages.
   * Alias: p2-star
   */
  'p2-ex-client'?: number;
  /**
   * Performance requirement for the server to start with the response message after the reception of a request message.
   * Alias: p2-max-ecu
   */
  'p2-server'?: number;
  /**
   * Performance requirement for the server to start with the response message after the transmission of a negative response message with negative response code 0x78 (enhanced response timing).
   * Alias: p2-star-ecu
   */
  'p2-ex-server'?: number;
  /**
   * Timeout for the client to wait after the successful transmission of a request message for the end of complete response messages.
   * Alias: p6-max
   */
  'p6-client'?: number;
  /**
   * Enhanced timeout for the client to wait after the reception of a negative response message with negative response code 0x78 for the end of complete response messages.
   * Alias: p6-star
   */
  'p6-ex-client'?: number;
}
/**
 * Settings related to diagnostics over IP.
 */
export interface DoIPSettings {
  /**
   * Behavior of the diagnostic tester for encrypted communication via TLS.
   *  "deactivated": The tester does not use TLS even if a security profile for TLS is configured.
   *  "routing-activation": The tester at first tries to set up an unencrypted TCP connection. If not successful, the tester tries to connect via TLS.
   *  "secure-connection-only": The tester at first tries to set up an unencrypted TCP connection. On success the tester stops communication.
   * "direct-connection": The tester directly tries to connect to the ECU via TLS.
   */
  'tls-mode'?: 'deactivated' | 'routing-activation' | 'secure-connection-only' | 'direct-connection' | string;
  /**
   * TLS client name.
   */
  'tls-client'?: string;
  /**
   * The "name" of an ip-setting or an ip-address declared in this environment, referencing a local network interface or IP address via which CANoe or a simulated tester shall communicate.
   */
  'tcp-ip-stack-adapter'?: {
    [k: string]: unknown | undefined;
  } & string;
}
/**
 * A network using the Ethernet protocol.
 */
export interface EthernetNetwork {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database?: {
    [k: string]: unknown | undefined;
  } & string;
  'tcp-ip-stack-adapter'?: Full2;
  /**
   * Defines the mapping of application channels to an underlying layer. Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
   */
  mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
  /**
   * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 32. Value "0" is not allowed.
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
export interface Full2 {
  /**
   * MAC-Address of the current TCP/IP stack (cannot be a multicast address).
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
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full3;
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full4;
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  vlans?: Full5;
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
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full3;
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': ('dhcp' | 'linked-local') | string;
      }
    | {
        addresses: Full4;
        name?: {
          [k: string]: unknown | undefined;
        } & string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
}
/**
 * A replay block for the Ethernet protocol.
 */
export interface EthernetReplayBlock {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a logging file (.blf). Relative path specifications are resolved relative to the configuration file.
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
   * Sends the system variable values.
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
   * Node is added to the environment only if the specified condition is true.
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
   * List of FDX description files (.xml) that describe which signals or variables are to be exchanged and the manner in which this is to occur (e.g., with regard to grouping).
   */
  'description-files'?: {
    /**
     * Node is added to the environment only if the specified condition is true.
     */
    when?: string | boolean;
    /**
     * Absolute or relative path to a FDX description file (.xml). Relative path specifications are resolved relative to the configuration file.
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
 * A cluster using the FlexRay protocol.
 */
export interface FlexRayCluster {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Index of the Application Channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 32. Value "0" is not allowed.
   */
  'application-channel'?: number | string;
  /**
   * Defines the mapping of application channels to an underlying layer. Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
   */
  mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
  'key-slot-configuration'?: Full6;
}
/**
 * Via the key slot configuration it is possible to transmit two start-up/sync frames. Thus an external start-up node is not required for the start-up of a FlexRay cluster.
 */
export interface Full6 {
  'slot-1'?: Full7;
  'slot-2'?: Full7;
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
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a logging file (.blf). Relative path specifications are resolved relative to the configuration file.
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
   * The default mapping of a channel if not explicitly mapped.
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
/**
 * Global settings for all scenarios.
 */
export interface GlobalSettings {
  ethernet?: GlobalSettingsForEthernet;
  flexray?: GlobalSettingsForFlexRay;
  database?: GlobalSettingsForDatabase;
  dotnet?: GlobalSettingsForNET;
  'working-mode'?: GlobalSettingsForTheSimulationWorkingMode;
}
/**
 * Global settings for Ethernet.
 */
export interface GlobalSettingsForEthernet {
  /**
   * Mode of the underlying Ethernet bus. Classic approach is the "channel-based" setup. More recent and recommended mode is the switched "network-based" mode (port based).
   */
  'access-mode'?: ('network-based' | 'channel-based') | string;
  /**
   * Specifies how signals are updated on Network-based access. Will be ignored on channel-based setups. "always": events of all ports are used to update a signal without qualified Ethernet port. "rx-only": only packets received by the interface are used, which leads to less duplicated updates. "never": signals without qualified Ethernet ports are not updated.
   */
  'signal-updates'?: string | 'always' | 'rx-only' | 'never';
  /**
   * Global configuration for the TCP/IP stack.
   */
  'tcp-ip-stack'?:
    | {
        /**
         * If set to "operating-system", the machine configuration is used. If set to "canoe", a custom configuration can be provided.
         */
        'selected-stack': 'operating-system';
      }
    | {
        /**
         * If set to "operating-system", the machine configuration is used. If set to "canoe", a custom configuration can be provided.
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
/**
 * Global settings for database.
 */
export interface GlobalSettingsForDatabase {
  /**
   * Configures the PDU layer in relation to AUTOSAR databases.
   * "no-pdus" : Creation of frames only
   * "from-autosar-4.0" : Creation of AUTOSAR PDUs for AUTOSAR DBs >= 4.0
   * "from-autosar-4.2" : Creation of AUTOSAR PDUs for AUTOSAR DBs >= 4.2
   */
  'autosar-pdu-layer'?: ('no-pdus' | 'from-autosar-4.0' | 'from-autosar-4.2') | string;
  /**
   * Controls naming of text table entries and influences signal qualification.
   * "compu-const": uses text from COMPU-CONST nodes.
   *  "short-label": uses text from SHORT-LABEL nodes.
   */
  'autosar-text-table-entries'?: ('compu-const' | 'short-label') | string;
  /**
   * Controls the generation of services for SOME/IP PDUs without service context.
   */
  'some-ip-pdus-without-service-context'?: ('ignore' | 'generate-service') | string;
  /**
   * Generates application layer objects for the specified network types.
   *
   * @minItems 0
   */
  'use-application-layer-objects'?: ('ethernet' | string)[];
}
/**
 * Global settings for .NET
 */
export interface GlobalSettingsForNET {
  /**
   * User defined settings for namespace generation in the .Net typelib. Default complies with the setting "Automatic Qualification". With this setting the namespaces for signals are automatically generated so that each class is unique. For each frame a class is generated in the namespace "NetworkDB.Frames".
   *
   * @minItems 1
   */
  'database-namespace-generation'?: [
    ('use-network' | 'use-database' | 'use-frame' | 'use-node') | string,
    ...(('use-network' | 'use-database' | 'use-frame' | 'use-node') | string)[]
  ];
}
/**
 * A network using the LIN protocol.
 */
export interface LINNetwork {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Reference to a database declared in the configuration file.
   */
  database?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value "0" is not allowed.
   */
  'application-channel'?: number | string;
  /**
   * Defines the mapping of application channels to an underlying layer. Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
   */
  mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
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
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a logging file (.blf). Relative path specifications are resolved relative to the configuration file.
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
   * Sends the system variable values.
   */
  'send-system-variables'?: boolean | string;
  'start-timing-condition'?: TimingConditions;
  'channel-mapping'?: ChannelMapping;
  /**
   * Selects events to be replayed.
   * "all-responses": replay all the responses.
   * "master-responses-only": replay the responses only for frames published by the Master node.
   * "master-requests-only": replay only 0x3c responses.
   * "no-headers": disable replay of the LIN frame headers.
   */
  'replay-mode'?: ('all-responses' | 'master-responses-only' | 'master-requests-only' | 'no-headers') | string;
  /**
   * Selects which events from "rx-responses", "tx-responses" and "wakeup-signals" are replayed. If not set, the default value depends on the value of replay-mode.
   *  For "all-responses" or "master-responses-only": all events are sent.
   *  For "master-requests-only": only wakeup-events are sent.
   *  For "no-headers": none of the events are sent.
   */
  'send-events'?: (('tx-responses' | 'rx-responses' | 'wakeup-signals') | string)[];
}
/**
 * Advanced logging configurations.
 */
export interface Full8 {
  /**
   * Specifies whether a warning is shown at the start of measurement before overwriting an existing logging file.
   */
  'warn-overwritten-log-file'?: boolean | string;
  /**
   * Specifies whether an error is shown after the measurement if data loss occurred during the measurement. Lines in the logging file marked with a * as a special symbol have corrupted lines around them.
   */
  'show-error-on-data-loss'?: boolean | string;
}
/**
 * Toggle trigger settings. The user can control the start and stop of logging. For example via CAPL.
 *  Must not be used together with "test-trigger".
 */
export interface Full9 {
  /**
   * Time before triggering that should also be logged.
   */
  'pre-trigger-time-ms'?: number | string;
  /**
   * Time after the triggered stopped that should also be logged.
   */
  'post-trigger-time-ms'?: number | string;
  /**
   * Event buffer size for events pre-trigger-time-ms
   */
  'buffer-size'?: number | string;
}
/**
 * Test trigger settings. The execution period of test elements controls the start and stop of logging.
 */
export interface Full10 {
  /**
   * Scope of the test trigger, for each a logging file is created.
   */
  scope: ('test-unit' | 'test-implementation-entity' | 'test-case') | string;
  /**
   * List of test verdicts for which logging files will remain stored.
   */
  verdict?: (('none' | 'pass' | 'inconclusive' | 'fail' | 'error-in-test-system') | string)[];
  /**
   * Time before triggering that should also be logged.
   */
  'pre-trigger-time-ms'?: number | string;
  /**
   * Time after the triggered stopped that should also be logged.
   */
  'post-trigger-time-ms'?: number | string;
  /**
   * Event buffer size for events pre-trigger-time-ms
   */
  'buffer-size'?: number | string;
}
/**
 * Describes a CAPL or C library (.vmodule).
 */
export interface ProgrammingModules1 {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a CAPL library (.vmodule). Relative path specifications are resolved relative to the configuration file.
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
   * Absolute or relative path to a C-library (.vmodule). Relative path specifications are resolved relative to the configuration file.
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
   * The ID of the assigned security profile to the OS Ethernet stack.
   */
  'operating-system-stack-profile-id'?: string | number;
  /**
   * The ID of the assigned security profile to the shared CANoe Ethernet stack.
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
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
}
/**
 * Assignment of a security profile to an Ethernet stack.
 */
export interface EthernetStackSecurityProfileAssignment {
  /**
   * The name of the simulation node. The security profile will be assigned to the Ethernet stack of the simulation node.
   */
  'simulation-node': string;
  /**
   * The ID of the assigned security profile.
   */
  'profile-id': string | number;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
}
/**
 * SIL Kit settings. Entry can be deactivated with when.
 */
export interface SILKit {
  /**
   * Node is added to the environment only if the specified condition is true.
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
   * Absolute or relative path to a SIL Kit config file (.yaml/.json). Relative path specifications are resolved relative to the configuration file.
   */
  'config-file-path'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Time length of a single simulation step. Valid only when "time-source" is set to "external-software".
   */
  'simulation-step-in-micro-sec'?: number | string;
  /**
   * Maximum waiting time for the other simulation participants. Valid only when "time-source" is set to "external-software".
   */
  'life-cycle-event-timeout-in-sec'?: number | string;
}
/**
 * Represents a simulation node.
 */
export interface SimulationNode {
  /**
   * A C-identifier for this element (case sensitive)
   */
  name: string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a program (.can/.canencr/.cs/.sln). Relative path specifications are resolved relative to the configuration file.
   */
  'file-path'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  'network-assignments': Full11;
  defines?: Full;
  /**
   * Assigns explicitly a database node to a simulation node. If not set, the simulation-node name will be used as database-node. To deactivate automatic assignment, it should be set to false.
   */
  'database-node'?: boolean | string;
  /**
   * A list of .vmodule modeling libraries to assign to the simulation node.
   *
   * Items: Absolute or relative path to a .vmodule file. Relative paths are resolved relative to the configuration file.
   *  If no modeling library is found in the working directory, it is searched in the global modeling libraries.
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
         * If set to "operating-system", the machine configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires global-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
         *  If set to "individual", a custom configuration can be provided.
         */
        'selected-stack': 'operating-system' | 'canoe';
      }
    | {
        /**
         * If set to "operating-system", the machine configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires global-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
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
 * Assign node to a network. For an Ethernet network a TCP/IP stack can be provided.
 */
export interface Full12 {
  /**
   * Assign the simulation node to a network.
   */
  network: {
    [k: string]: unknown | undefined;
  } & string;
  'tcp-ip-stack-adapter'?: Full2;
}
/**
 * Describes a system variable file (.vsysvar/.xml).
 */
export interface SystemVariables1 {
  /**
   * Node is added to the environment only if the specified condition is true.
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
/**
 * Describes a user file that can be read/written by CAPL/.NET scripts.
 */
export interface UserFiles1 {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a user file. Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': string | string[];
}
/**
 * VIO System settings. Entry can be deactivated with when.
 */
export interface VIOSystem {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a VIO System configuration file (.viocfg). Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Absolute or relative path to the folder containing the Card Capability Description files (.ccd) of the I/O cards. Relative path specifications are resolved relative to the configuration file.
   */
  'ccd-folder': string;
}
/**
 * Describes a XCP configuration file (.xcp.yaml/.xcpcfg).
 */
export interface XCPFiles1 {
  /**
   * Node is added to the environment only if the specified condition is true.
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
