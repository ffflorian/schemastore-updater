/* eslint-disable */

/**
 * Json schema version for the vEnvironment configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '1.0.0';
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
 * List of defines to be passed to capl / vcdl. Entries can be deactivated with when.
 */
export type Defines = Define[];
/**
 * A lists of system variables to be used by the simulation. Entries can be deactivated with when.
 */
export type SystemVariables = SystemVariables1[];
/**
 * List of network nodes represented by this application
 */
export type Full1 = Full2[];
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
 *
 * Items: A C-identifier for a referenced element (case sensitive)
 */
export type Full4 = ({
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
 * List of scenarios with the option to define / override variables or defines.
 */
export type Scenarios = Scenario[];

export interface VenvironmentSchema {
  version: Version;
  includes?: IncludeFiles;
  variables?: Variables;
  'application-models'?: ApplicationModels;
  datasources?: Datasources;
  defines?: Defines;
  'system-variables'?: SystemVariables;
  'simulation-nodes'?: SimulationNodes;
  databases?: Databases;
  'can-networks'?: CANNetworks;
  'canfd-networks'?: CANFDNetworks;
  scenarios?: Scenarios;
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
  'network-assignments': Full1;
  defines?: Full;
  /**
   * For assignment of modeling libraries to this simulation node
   *
   * Items: Absolute or relative path to a dll or vmodule file. Relative path specifications are resolved relative to the configuration file.
   */
  'modeling-libraries'?: ({
    [k: string]: unknown | undefined;
  } & string)[];
}
/**
 * A network node represented by this application.
 */
export interface Full2 {
  /**
   * For assignment of this NetworkNode to a Network.
   */
  network: string;
  /**
   * For assignment of modeling libraries to this NetworkNode
   *
   * Items: Absolute or relative path to a dll or vmodule file. Relative path specifications are resolved relative to the configuration file.
   */
  'modeling-libraries'?: ({
    [k: string]: unknown | undefined;
  } & string)[];
  'database-node'?: Full3;
  'lin-role'?: ('master' | 'slave' | 'config-tester') | ('master' | 'slave' | 'config-tester')[];
}
/**
 * Reference to a certain node from a database
 */
export interface Full3 {
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
  databases?: Full4;
  /**
   * Baudrate in Baud.
   */
  baudrate?: number | string;
  /**
   * Index of the Application Channel. Each busytype should provide consecutive indices. Starts counting at 1. Value between 1 and 255. Value '0' is not allowed. Caution: CAN and CANFD share the Application Channels!
   */
  'application-channel'?: number | string;
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
  databases?: Full4;
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
}
/**
 * A scenario with the option to define / override variables or defines
 */
export interface Scenario {
  name: string;
  variables?: Variables;
  defines?: Full;
}
