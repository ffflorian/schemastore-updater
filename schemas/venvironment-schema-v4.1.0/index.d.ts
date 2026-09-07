/* eslint-disable */

/**
 * Schema version for the venvironment.yaml configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '4.1.0';
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
       * A unique name that can be used to reference this CAN/CAN FD network in the configuration file or in programming APIs such as CAPL.
       * Must be a C-identifier (case sensitive).
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
       * Defines the mapping of the network to an underlying layer.
       * Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
       * The supported options depend on the time-source.
       * "internal-realtime" and "external-software" are supporting "internal-simulator" and "external-sil-kit".
       * "internal-scaled" only supports "internal-simulator".
       * "external-hardware" supports all mappings.
       */
      mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
      /**
       * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value "0" is not allowed.
       */
      'application-channel'?: number | string;
    }
  | {
      /**
       * A unique name that can be used to reference this CAN/CAN FD network in the configuration file or in programming APIs such as CAPL.
       * Must be a C-identifier (case sensitive).
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
       * Defines the mapping of the network to an underlying layer.
       * Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
       * The supported options depend on the time-source.
       * "internal-realtime" and "external-software" are supporting "internal-simulator" and "external-sil-kit".
       * "internal-scaled" only supports "internal-simulator".
       * "external-hardware" supports all mappings.
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
       * A unique name that can be used to reference this CAN/CAN FD network in the configuration file or in programming APIs such as CAPL.
       * Must be a C-identifier (case sensitive).
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
       * Defines the mapping of the network to an underlying layer.
       * Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
       * The supported options depend on the time-source.
       * "internal-realtime" and "external-software" are supporting "internal-simulator" and "external-sil-kit".
       * "internal-scaled" only supports "internal-simulator".
       * "external-hardware" supports all mappings.
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
 * Additional diagnostic descriptions used to extend a so called master description.
 */
export type AdditionalDescriptions = {
  /**
   * A unique name that can be used to reference this diagnostic description in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
   */
  name: string;
  /**
   * Absolute or relative path to a diagnostic description file (.cdd/.mdx/.pdx). Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * The variant determines which services and parameters are available for diagnostics and communication.
   */
  variant: {
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
  /**
   * If a diagnostic description file contains more than one ECU definition, the ECU identifier selects the one to utilize. Note that this setting is optional for diagnostic description files containing only one ECU definition.
   */
  'ecu-identifier'?: {
    [k: string]: unknown | undefined;
  } & string;
}[];
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
      /**
       * A unique name that can be used to reference this IPv4 address in the configuration file.
       * Must be a C-identifier (case sensitive).
       */
      name?: string;
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
       * A unique name that can be used to reference this IPv4 address in the configuration file.
       * Must be a C-identifier (case sensitive).
       */
      name?: string;
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
  /**
   * A unique name that can be used to reference this IPv6 address in the configuration file.
   * Must be a C-identifier (case sensitive).
   */
  name?: string;
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
export type Full8 = {
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
 * List of FMU model variables to be considered during the simulation.
 */
export type ActiveModelVariables = string[];
/**
 * List of FMU model variables to be ignored during the simulation.
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
   * This property is only evaluated if "time-source" is set to "internal-scaled". If a number is provided, the measurement is slowed-down by this factor. For scaling factors between zero and one, the simulation is accelerated accordingly. For example, if you enter the value 0.1 the measurement is accelerated by a factor of 10.
   * "as-fast-as-possible": Run the simulation as fast as possible. The simulation speed is not constant and depends on the performance of the computer and the load that is provoked by the simulation.
   */
  'time-scaling-factor'?: number | 'as-fast-as-possible' | string;
  /**
   * Time source for the simulation.
   * If this property is set, "default-network-mapping" is also required.
   * "internal-realtime": The time response of the measurement (time basis) is controlled internally.
   * "internal-scaled": The simulation speed is provided through the property "time-scaling-factor".
   * "external-software": The time response of the measurement (time basis) is controlled by an external program which is not Vector SIL Kit.
   * "external-sil-kit" : The time response of the measurement (time basis) is controlled by Vector SIL Kit.
   * "external-hardware": The time response of the measurement (time basis) is controlled by external hardware.
   */
  'time-source'?:
    ('internal-realtime' | 'internal-scaled' | 'external-software' | 'external-sil-kit' | 'external-hardware') | string;
  /**
   * Defines the default network mapping to an underlying layer.
   * Connects the networks either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
   * This value can be overwritten on network level. If "time-source" is set, this property is also required.
   * The supported options depend on the time-source.
   * "internal-realtime", "external-software" and "external-sil-kit" are supporting "internal-simulator" and "external-sil-kit".
   * "internal-scaled" only supports "internal-simulator".
   * "external-hardware" supports all mappings.
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
export type LoggingBlock =
  | {
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
      'logging-events'?: Full9;
      advanced?: Full10;
    }
  | {
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
      'logging-events'?: Full9;
      advanced?: Full10;
      'toggle-trigger': Full11;
    }
  | {
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
      'logging-events'?: Full9;
      advanced?: Full10;
      'test-trigger': Full12;
    };
/**
 * List of event types to be logged.
 */
export type Full9 = (
  | ('application-layer' | 'bus' | 'diagnostic' | 'internal' | 'statistic' | 'system-variable' | 'test' | 'trigger')
  | string
)[];
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
 * Mappings connecting CANoe and SIL Kit networks of type CAN or Ethernet.
 */
export type HybdridNetworkMappings = HybdridNetworkMapping[];
/**
 * List of networks this node is assigned to.
 */
export type Full13 = Full14[];
/**
 * List of simulation nodes. Entries can be deactivated with when.
 */
export type SimulationNodes = SimulationNode[];
/**
 * List of symbol mapping files. Please ensure that the mappings are valid for the environment. No symbol validation will be performed. Entries can be deactivated with when.
 */
export type SymbolMappings = SystemVariables[];
/**
 * A list of system variable files. Entries can be deactivated with when.
 */
export type SystemVariables1 = SystemVariables2[];
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
  'symbol-mappings'?: SymbolMappings;
  'system-variables'?: SystemVariables1;
  'user-files'?: UserFiles;
  variables?: Variables;
  'vio-system'?: VIOSystem;
  'vt-system'?: VTSystem;
  'xcp-configuration-files'?: XCPFiles;
  xil?: XILAPISettings;
}
/**
 * Describes an application model (.can/.canencr/.cs/.sln/.py/.vmodule/.dll (dotnet assembly)). Also supports local defines.
 */
export interface ApplicationModel {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to an application model (.can/.canencr/.cs/.sln/.py/.vmodule/.dll (dotnet assembly)). Relative path specifications are resolved relative to the configuration file.
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
   * A unique name that can be used to reference this CAN replay block in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
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
  'target-network': {
    [k: string]: unknown | undefined;
  } & string;
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
  'target-network': {
    [k: string]: unknown | undefined;
  } & string;
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
   * A unique name that can be used to reference this database in the configuration file.
   * Must be a C-identifier (case sensitive).
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
 * Diagnostic description with CDD, MDX or PDX.
 */
export interface DiagnosticDescription1 {
  /**
   * A unique name that can be used to reference this diagnostic description in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
   */
  name: string;
  /**
   * If a diagnostic description file contains more than one ECU definition, the ECU identifier selects the one to utilize. Note that this setting is optional for diagnostic description files containing only one ECU definition.
   */
  'ecu-identifier'?: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a diagnostic description file (.cdd/.mdx/.pdx). Relative path specifications are resolved relative to the configuration file.
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
  interface: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * The variant determines which services and parameters are available for diagnostics and communication.
   */
  variant: {
    [k: string]: unknown | undefined;
  } & string;
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
  /**
   * The seed-and-key file is used to unlock the ECU from CAPL, test units and test modules.
   */
  'seed-and-key-library-path'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  'communication-parameters'?: CommunicationsParametersForDiagnostics;
  'doip-settings'?: DoIPSettings;
  'flexray-settings'?: FlexRaySettings;
  'lin-settings'?: LINSettings;
  'additional-diag-descriptions'?: AdditionalDescriptions;
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
  addressing?: DoIPAddressing;
}
/**
 * Addressing parameter in conformance with the DoIP protocol.
 */
export interface DoIPAddressing {
  /**
   * Logical address of the ECU for functional diagnostic requests.
   */
  'logical-ecu-address-func'?: string | number;
  /**
   * Logical address of the ECU for physical diagnostic requests.
   */
  'logical-ecu-address-phys'?: string | number;
  /**
   * Defines the tester address. Messages from the tester will contain this address as source address within the message header.
   */
  'logical-tester-address'?: string | number;
  /**
   * The logical address of the DoIP gateway.
   */
  'logical-gateway-address'?: string | number;
}
/**
 * Settings related to diagnostics of FlexRay clusters.
 */
export interface FlexRaySettings {
  /**
   * Database node selected for communication.
   */
  'database-node': {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * The following protocol types can be selected:
   *  "iso-10681-2"
   *  "autosar-2-x"
   *  "autosar-3-x"
   */
  'transport-protocol-type'?: string;
  /**
   * List of appropriate PDUs from the database for requests and responses used by the diagnostic implementation. Only PDUs with service types "TPL", "DIAG-REQUEST", DIAG-RESPONSE" or "DIAG-STATE" are available.
   */
  'tester-pdus-phys'?: string[];
  /**
   * List of appropriate PDUs from the database for requests and responses used by the diagnostic implementation. Only PDUs with service types "TPL", "DIAG-REQUEST", DIAG-RESPONSE" or "DIAG-STATE" are available.
   */
  'tester-pdus-func'?: string[];
  /**
   * List of appropriate PDUs from the database for requests and responses used by the diagnostic implementation. Only PDUs with service types "TPL", "DIAG-REQUEST", DIAG-RESPONSE" or "DIAG-STATE" are available.
   */
  'ecu-pdus'?: string[];
}
/**
 * Settings related to diagnostics of LIN buses.
 */
export interface LINSettings {
  /**
   * Database node selected for communication.
   */
  'database-node': {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Scheduling of master request and slave response frames.
   *  "selected-scheduling": The currently running schedule table is used.
   *  "diagnostics-only": Switching between master request and slave response tables found in ldf file.
   *  "interleaved": Between every segment of a request or response the table, which was running before, is run once.
   * "direct-sending": The master request header is generated automatically, independent of the scheduling.
   */
  'scheduling-mode'?: 'selected-scheduling' | 'diagnostics-only' | 'interleaved' | 'direct-sending' | string;
}
/**
 * A network using the Ethernet protocol.
 */
export interface EthernetNetwork {
  /**
   * A unique name that can be used to reference this ethernet network in the configuration file or in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
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
  'global-tcp-ip-stack-adapter'?: Full2;
  'test-tcp-ip-stack-adapter'?: Full6;
  /**
   * Defines the mapping of the network to an underlying layer.
   * Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
   * The supported options depend on the time-source.
   * "internal-realtime" and "external-software" are supporting "internal-simulator" and "external-sil-kit".
   * "internal-scaled" only supports "internal-simulator".
   * "external-hardware" supports all mappings.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
  /**
   * Index of the application channel. Each bus type should provide consecutive indices. Starts counting at 1. Value between 1 and 32. Value "0" is not allowed.
   */
  'application-channel'?: string | number;
  /**
   * A List of measurement ports whose data you want to measure (e.g. for logging).
   */
  'measurement-ports'?: ({
    [k: string]: unknown | undefined;
  } & string)[];
}
/**
 * Address configuration for the global TCP/IP stack. This setting is relevant if global-settings/ethernet/global-tcp-ip-stack/selected-stack is set to "canoe".
 */
export interface Full2 {
  /**
   * MAC address of the current TCP/IP stack (cannot be a multicast address).
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
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': ('dhcp' | 'link-local') | string;
      }
    | {
        addresses: Full3;
        /**
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'dhcp' | string;
      }
    | {
        addresses: Full4;
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
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
        /**
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': ('dhcp' | 'link-local') | string;
      }
    | {
        addresses: Full3;
        /**
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'dhcp' | string;
      }
    | {
        addresses: Full4;
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
}
/**
 * Address configuration for the test TCP/IP stack. This setting is relevant if global-settings/ethernet/test-tcp-ip-stack/selected-stack is set to "individual".
 */
export interface Full6 {
  /**
   * MAC address of the current TCP/IP stack (cannot be a multicast address).
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
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': ('dhcp' | 'link-local') | string;
      }
    | {
        addresses: Full3;
        /**
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'dhcp' | string;
      }
    | {
        addresses: Full4;
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  vlans?: Full5;
}
/**
 * A replay block for the Ethernet protocol.
 */
export interface EthernetReplayBlock {
  /**
   * A unique name that can be used to reference this ethernet replay block in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
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
   * A unique name that can be used to reference this FlexRay cluster in the configuration file or in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
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
   * Defines the mapping of the network to an underlying layer.
   * Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
   * The supported options depend on the time-source.
   * "internal-realtime" and "external-software" are supporting "internal-simulator" and "external-sil-kit".
   * "internal-scaled" only supports "internal-simulator".
   * "external-hardware" supports all mappings.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
  'key-slot-configuration'?: Full7;
  /**
   * The operation mode of VN Interface.
   * "synchronous": In synchronous cc state frames can be sent and received.
   * "asynchronous": In all bus phases frames and symbols can be received. Sending is not possible.
   * "mixed": In asynchronous cc phase frames and symbols can be received. In synchronous cc state frames can can be sent and received.
   */
  mode?: ('synchronous' | 'asynchronous' | 'mixed') | string;
  /**
   * Restart of the communication controller when synchronisation is lost.
   */
  'automatic-restart'?: boolean | string;
  /**
   * Send Wakeup Pattern at measurement start. If true database settings are used
   */
  'send-wakeup-pattern'?: boolean | string;
}
/**
 * Via the key slot configuration it is possible to transmit two start-up/sync frames. Thus an external start-up node is not required for the start-up of a FlexRay cluster.
 */
export interface Full7 {
  'slot-1'?: Full8;
  'slot-2'?: Full8;
}
/**
 * A replay block for the FlexRay protocol.
 */
export interface FlexRayReplayBlock {
  /**
   * A unique name that can be used to reference this FlexRay replay block in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
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
  python?: GlobalSettingsForPython;
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
  'global-tcp-ip-stack'?:
    | {
        /**
         * If set to "operating-system", the machine configuration is used. If set to "canoe", a custom configuration can be provided, which can be configured at ethernet-networks[]/global-tcp-ip-stack-adapter.
         */
        'selected-stack': 'operating-system';
      }
    | {
        /**
         * If set to "operating-system", the machine configuration is used. If set to "canoe", a custom configuration can be provided, which can be configured at ethernet-networks[]/global-tcp-ip-stack-adapter.
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
  /**
   * Configuration for the test TCP/IP stack. If individual configuration a port labeled "TestStack" is created automatically.
   */
  'test-tcp-ip-stack'?:
    | {
        /**
         * If a linked database contains a stack configuration, it is preferred over other configurations. If set to "operating-system", the machine configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires global-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
         *  If set to "individual", a custom configuration can be provided at ethernet-networks[]/test-tcp-ip-stack-adapter.
         */
        'selected-stack': 'operating-system' | 'canoe';
        /**
         * The name of the test stack, used as name of the test port.
         * Must be a C-identifier.
         */
        name?: string;
      }
    | {
        /**
         * If a linked database contains a stack configuration, it is preferred over other configurations. If set to "operating-system", the machine configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires global-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
         *  If set to "individual", a custom configuration can be provided at ethernet-networks[]/test-tcp-ip-stack-adapter.
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
        /**
         * The name of the test stack, used as name of the test port.
         * Must be a C-identifier.
         */
        name?: string;
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
  /**
   * If active, FlexRay network management frames whose slot cycles overlap are split into several frames. If necessary, new frames/PDUs are created and optimally distributed to the free slot cycles found in the schedule table.
   */
  'split-overlapping-nm-flexray-frames'?: string | boolean;
}
/**
 * Global settings for .NET
 */
export interface GlobalSettingsForNET {
  /**
   * This setting can be used to specify that certain namespaces should be generated for all .NET symbols (regardless of their uniqueness). The options "use-node" and "use-frame" are only relevant for signals. If no value is given, the namespaces for signals are automatically generated so that each class is unique. For each frame, a class is generated in the namespace "NetworkDB.Frames".
   *
   * @minItems 1
   */
  'database-namespace-generation'?: [
    ('use-network' | 'use-database' | 'use-frame' | 'use-node') | string,
    ...(('use-network' | 'use-database' | 'use-frame' | 'use-node') | string)[]
  ];
  /**
   * The .NET target version.
   */
  'target-version'?: ('dotnet-8' | 'dotnet-4.7') | string;
}
/**
 * Global settings for Python
 */
export interface GlobalSettingsForPython {
  /**
   * The Python interpreter version. If no interpreter is specified, one is selected automatically. Version greater than or equal to 3.10.0 are supported.
   */
  interpreter?: string;
}
/**
 * A network using the LIN protocol.
 */
export interface LINNetwork {
  /**
   * A unique name that can be used to reference this LIN network in the configuration file or in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
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
   * Defines the mapping of the network to an underlying layer.
   * Connects the network either to simulated network ("internal-simulator"), hardware ("external-hardware") or to SIL Kit ("external-sil-kit").
   * The supported options depend on the time-source.
   * "internal-realtime" and "external-software" are supporting "internal-simulator" and "external-sil-kit".
   * "internal-scaled" only supports "internal-simulator".
   * "external-hardware" supports all mappings.
   */
  mapping?: ('internal-simulator' | 'external-sil-kit' | 'external-hardware') | string;
  /**
   * Working mode of the LIN interface.
   *  "commander": the LIN network interface is able to output message headers on the network.
   * "responder": the LIN network interface responds to received LIN headers if a response to the LIN ID contained within the header has been configured.
   *  "commander-no-resistor": commander but with disabled resistor.
   */
  mode?: ('commander' | 'responder' | 'commander-no-resistor') | string;
}
/**
 * A replay block for the LIN protocol.
 */
export interface LINReplayBlock {
  /**
   * A unique name that can be used to reference this LIN replay block in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
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
export interface Full10 {
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
export interface Full11 {
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
export interface Full12 {
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
  /**
   * The ID of the assigned security profile to the test Ethernet stack.
   */
  'test-stack-profile-id'?: string | number;
}
/**
 * Assignment of a security profile to a network.
 */
export interface NetworkSecurityProfileAssignment {
  /**
   * The name of the network to which the security profile shall be assigned.
   */
  network: {
    [k: string]: unknown | undefined;
  } & string;
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
  'simulation-node': {
    [k: string]: unknown | undefined;
  } & string;
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
  'hybrid-networks'?: HybdridNetworkMappings;
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
   * Time length of a single simulation step. Valid only when "time-source" is set to "external-sil-kit".
   */
  'simulation-step-in-micro-sec'?: number | string;
  /**
   * Maximum waiting time for the other simulation participants. Valid only when "time-source" is set to "external-sil-kit".
   */
  'life-cycle-event-timeout-in-sec'?: number | string;
}
/**
 * A mapping connecting a CANoe and a SIL Kit network of type CAN or Ethernet.
 */
export interface HybdridNetworkMapping {
  /**
   * Name of a CAN or Ethernet network describing a CANoe network.
   * Must be a C-identifier (case sensitive).
   */
  network: {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Name of a CAN or Ethernet network describing a SIL Kit network.
   * Must be a C-identifier (case sensitive).
   */
  'sil-kit-network': {
    [k: string]: unknown | undefined;
  } & string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
}
/**
 * Represents a simulation node.
 */
export interface SimulationNode {
  /**
   * A unique name that can be used to reference this simulation node block in programming APIs such as CAPL.
   * Must be a C-identifier (case sensitive).
   */
  name: string;
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a program (.can/.canencr/.cs/.sln/.dll). Relative path specifications are resolved relative to the configuration file.
   */
  'file-path'?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  'network-assignments': Full13;
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
         * If a linked database contains a stack configuration, it is preferred over other configurations. If set to "operating-system", the machine configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires global-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
         *  If set to "individual", a custom configuration can be provided at network-assignments[]/tcp-ip-stack-adapter.
         */
        'selected-stack': 'operating-system' | 'canoe';
      }
    | {
        /**
         * If a linked database contains a stack configuration, it is preferred over other configurations. If set to "operating-system", the machine configuration is used.
         *  If set to "canoe", the configuration on the global level is used (this requires global-settings/ethernet/tcp-ip-stack/selected-stack to be set to "canoe").
         *  If set to "individual", a custom configuration can be provided at network-assignments[]/tcp-ip-stack-adapter.
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
 * Assigns the simulation node to a network declared in the configuration file. For an Ethernet network a TCP/IP stack can be provided.
 */
export interface Full14 {
  /**
   * Assigns the simulation node to a network declared in the configuration file.
   */
  network: {
    [k: string]: unknown | undefined;
  } & string;
  'tcp-ip-stack-adapter'?: Full15;
}
/**
 * Address configuration for the associated tcp-ip-stack. Is overwritten by a configuration from a linked database.
 */
export interface Full15 {
  /**
   * MAC address of the current TCP/IP stack (cannot be a multicast address).
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
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': ('dhcp' | 'link-local') | string;
      }
    | {
        addresses: Full3;
        /**
         * A unique name that can be used to reference this IPv4 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property, "dhcp" for automatic configuration or "link-local" to provide a link-local address according to RFC3927.
         */
        'address-configuration': 'static' | string;
      };
  /**
   * Configurations for IPv6.
   */
  'ipv6-settings'?:
    | {
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'dhcp' | string;
      }
    | {
        addresses: Full4;
        /**
         * A unique name that can be used to reference this IPv6 setting in the configuration file.
         * Must be a C-identifier (case sensitive).
         */
        name?: string;
        /**
         * Defines how the addresses are configured. Use "static" to configure them manually with the "addresses" property or use "dhcp" for automatic configuration.
         */
        'address-configuration': 'static' | string;
      };
  vlans?: Full5;
}
/**
 * Describes a symbol mapping file (.vmap). Please ensure that the mappings are valid for the environment. No symbol validation will be performed.
 */
export interface SystemVariables {
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
 * Describes a system variable file (.vsysvar/.xml).
 */
export interface SystemVariables2 {
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
 * VT System settings. Entry can be deactivated with when.
 */
export interface VTSystem {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * Absolute or relative path to a VT System configuration file (.vtcfg). Relative path specifications are resolved relative to the configuration file.
   */
  'file-path': (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  ) &
    string;
  /**
   * Absolute or relative path to the folder containing the VT System module description files. Relative path specifications are resolved relative to the configuration file.
   */
  'module-description-folder': string;
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
/**
 * Enables the XIL API server. Entry can be deactivated with when.
 */
export interface XILAPISettings {
  /**
   * Node is added to the environment only if the specified condition is true.
   */
  when?: string | boolean;
  /**
   * TCP port to be used for the XIL API, usually set to "3030" for CANoe
   */
  port: number | string;
}
