/* eslint-disable */

/**
 * Version of the YAML file format, e.g. 19.0.0.
 */
export type Version = string;
/**
 * Type of the VT System Module, e.g. 1004.
 */
export type ModuleType = number;
/**
 * User defined channel name.
 */
export type Name = string;
/**
 * User defined comment.
 */
export type Comment = string;
/**
 * A flag indicating if the start state is actually applied.
 */
export type StartStateEnabled = boolean;
/**
 * Transmission cycle time of the measurement value (e.g. 10ms).
 */
export type CycleTime = string;
/**
 * Integration time of this value (e.g. 10ms).
 */
export type IntegrationTime = string;
/**
 * A list of active measurement values.
 */
export type ActiveValues = ModuleChannelActiveValue[];
/**
 * Value to set the start value to.
 */
export type Value = number | string;
/**
 * A list of start values.
 */
export type StartValues = StartValue[];
/**
 * A list of activated measurement values.
 */
export type ActiveValues1 = ChannelActiveValue[];
/**
 * Describes a single channel.
 */
export type Channel = VTSystemChannel[];
/**
 * The value that shall be constrained.
 */
export type Value1 = string;
/**
 * The channel number this constraint belongs to (1 ... n).
 */
export type Channel1 = number;
/**
 * The operation that is to be constrained.
 */
export type Operation = 'open' | 'close' | 'configured';
/**
 * The system variable that is to be evaluated.
 */
export type SystemVariable = string;
/**
 * The operator that is used for comparison.
 */
export type Operator =
  | 'less-than'
  | 'less-or-equal'
  | 'equal'
  | 'not-equal'
  | 'greater-than'
  | 'greater-or-equal'
  | 'open'
  | 'close'
  | 'forbidden'
  | 'configured';
/**
 * The operand that is used for comparison.
 */
export type Operand = number;
/**
 * List of constraint conditions.
 */
export type Conditions = Condition[];
/**
 * Describes the constraints for all channels of the module.
 */
export type Constraints = Constraint[];
/**
 * User defined text to show in the label.
 */
export type Text = string | number;
/**
 * Specifies the labels shown in the VT System Control Window (only for CANoe DE).
 */
export type GUILabels = GUILabel[];
/**
 * Unique module identifier.
 */
export type MDID = string;
/**
 * Unique module identifier.
 */
export type VDID = string;
/**
 * Interface version of the module's firmware.
 */
export type Interface = number;
/**
 * Identifiers the vendor of this VT System module.
 */
export type VendorID = number;
/**
 * VT2710: Supply voltage.
 */
export type SupplyVoltage = number;
/**
 * VT2710: Supply voltage for LVDS.
 */
export type SupplyVoltageForLVDS = number;
/**
 * VT2710: Enables the LVDS supply voltage.
 */
export type LVDSSupplyVoltageEnabled = boolean;
/**
 * VT2710: Sets the usage mode for LVDS connector 1.
 */
export type LVDSConnectorUsage1 = 'fpga' | 'canoe';
/**
 * VT2710: Sets the usage mode for LVDS connector 2.
 */
export type LVDSConnectorUsage2 = 'fpga' | 'canoe';
/**
 * Defines the supply mode for this VT2710 connector.
 */
export type SupplyMode = 'internal' | 'external';
/**
 * A flag indicating if the internal voltage is also sent to the external voltage pins.
 */
export type InternalToExternal = boolean;
/**
 * Direction of a DIO pin.
 */
export type DIODirection = 'input' | 'output' | 'mixed';
/**
 * Specifies the FPGA mode for a VT2710 pin.
 */
export type UserFPGAMode = 'din' | 'dout' | 'i2c' | 'rs232' | 'rs485';
/**
 * Function assignment for a VT2710 pin.
 */
export type UsedFor = 'spi' | 'i2c' | 'dio' | 'rs232' | 'rs485' | 'uart' | 'fpga';
/**
 * A list of pin configurations.
 */
export type Pins = Pin[];
/**
 * VT2710: List of connector descriptions.
 */
export type Connectors = Connector[];
/**
 * VT5201: smart charging mode for this module.
 */
export type SmartChargingMode = 'evse' | 'ev' | 'legacy';
/**
 * VT6306: Type of piggy to use.
 */
export type PiggyType = 'none' | 'psi5-sent' | 'eth-100-base-t1' | 'eth-1000-base-t1';
/**
 * List of VT System Modules.
 */
export type Modules = VTSystemModule[];
/**
 * Flag to invert the rendering order of racks in the GUI.
 */
export type FlipRackOrder = boolean;
/**
 * Internal configuration string.
 */
export type SerializedConfig = string;

/**
 * VT System Configuration.
 */
export interface VTSystemConfiguration {
  version: Version;
  modules?: Modules;
  'vts-control-window'?: VTSystemControlWindow;
}
/**
 * Describes a VT System module.
 */
export interface VTSystemModule {
  type: ModuleType;
  'module-channel': ModuleChannel;
  channels?: Channel;
  constraints?: Constraints;
  'gui-labels'?: GUILabels;
  mdid?: MDID;
  vdid?: VDID;
  interface?: Interface;
  'vendor-id'?: VendorID;
  'module-specific-settings'?: ModuleSpecificSettings;
}
/**
 * Describes the module channel of a VT System Module.
 */
export interface ModuleChannel {
  name: Name;
  comment?: Comment;
  'start-state-enabled'?: StartStateEnabled;
  'active-values'?: ActiveValues;
  'start-values'?: StartValues;
}
/**
 * Describes a active measurement value on a module channel.
 */
export interface ModuleChannelActiveValue {
  name: Name;
  'cycle-time'?: CycleTime;
  'integration-time'?: IntegrationTime;
}
/**
 * Describes a start value setting.
 */
export interface StartValue {
  name: Name;
  value: Value;
}
/**
 * Describes a channel of a VT System module.
 */
export interface VTSystemChannel {
  name: Name;
  'active-values'?: ActiveValues1;
  'start-values'?: StartValues;
  comment?: Comment;
  'start-state-enabled'?: StartStateEnabled;
}
/**
 * Active measurement value on a channel.
 */
export interface ChannelActiveValue {
  name: Name;
  'cycle-time'?: CycleTime;
  'integration-time'?: IntegrationTime;
}
/**
 * Describes a constraint.
 */
export interface Constraint {
  value: Value1;
  channel: Channel1;
  conditions: Conditions;
}
/**
 * Describes a constraint condition.
 */
export interface Condition {
  operation?: Operation;
  sysvar?: SystemVariable;
  operator: Operator;
  operand?: Operand;
}
/**
 * Describes a label in the VT System Control Window (only CANoe DE).
 */
export interface GUILabel {
  name: Name;
  text: Text;
}
/**
 * Additional settings, which are required for certain modules only.
 */
export interface ModuleSpecificSettings {
  'supply-voltage'?: SupplyVoltage;
  'supply-voltage-lvds'?: SupplyVoltageForLVDS;
  'supply-voltage-lvds-enabled'?: LVDSSupplyVoltageEnabled;
  'lvds-connector-usage-1'?: LVDSConnectorUsage1;
  'lvds-connector-usage-2'?: LVDSConnectorUsage2;
  connectors?: Connectors;
  'smart-charging-mode'?: SmartChargingMode;
  'piggy-type'?: PiggyType;
}
/**
 * Configures a VT2710 connector.
 */
export interface Connector {
  'supply-mode': SupplyMode;
  'int-to-ext': InternalToExternal;
  pins: Pins;
}
/**
 * Contains settings for a VT2710 pin.
 */
export interface Pin {
  'dio-direction': DIODirection;
  'user-fpga-mode': UserFPGAMode;
  'used-for': UsedFor;
}
/**
 * Section with internal settings for the VT System Control Window (only CANoe DE).
 */
export interface VTSystemControlWindow {
  'flip-rack-order': FlipRackOrder;
  'serialized-config': SerializedConfig;
}
