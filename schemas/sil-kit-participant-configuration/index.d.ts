/* eslint-disable */

/**
 * Free text commenting on or summarizing this configuration. Optional
 */
export type Description = string;
/**
 * Names of trace sinks to use
 */
export type UseTraceSinks = unknown[];
/**
 * Name of the network. Optional; Defaults to the endpoint name
 */
export type Network = string;
export type FlexrayTxBufferConfigurations = {
  /**
   * Channel(s)
   */
  channels?: 'A' | 'B' | 'AB' | 'None';
  /**
   * The slot Id of frame
   */
  slotId?: number;
  /**
   * Base offset for cycle multiplexing (values 0 - 63)
   */
  offset?: number;
  /**
   * Repetition for cycle multiplexing (values 1, 2, 4, 8, 16, 32, 64)
   */
  repetition?: number;
  /**
   * Set the PPindicator
   */
  PPindicator?: boolean;
  /**
   * Header CRC, 11 bits
   */
  headerCrc?: number;
  /**
   * SingleShot or Continuous transmission mode
   */
  transmissionMode?: 'SingleShot' | 'Continuous';
  [k: string]: unknown | undefined;
}[];
/**
 * Reconfigures the FlexrayControllers of the participant
 */
export type FlexrayControllers = FlexrayController[];
/**
 * Name of the endpoint
 */
export type Name = string;
/**
 * Name of the RPC function called by RpcClients on RpcServers
 */
export type RpcFunctionName = string;

/**
 * JSON schema for SIL Kit Participant configuration files
 */
export interface HttpsJsonSchemastoreOrgSilKitParticipantConfigurationJson {
  /**
   * The schema file
   */
  $schema?: string;
  /**
   * Version of the schema used to validate this document
   */
  schemaVersion?: number | string;
  Description?: Description;
  /**
   * Name of the participant
   */
  ParticipantName?: string;
  /**
   * Reconfigures the CanControllers of the participant
   */
  CanControllers?: {
    /**
     * Name of the endpoint
     */
    Name: string;
    /**
     * Name of the network. Optional; Defaults to the endpoint name
     */
    Network?: string;
    UseTraceSinks?: UseTraceSinks;
    Replay?: Replay;
  }[];
  /**
   * Reconfigures the LinControllers of the participant
   */
  LinControllers?: {
    /**
     * Name of the endpoint
     */
    Name: string;
    /**
     * Name of the network. Optional; Defaults to the endpoint name
     */
    Network?: string;
    UseTraceSinks?: UseTraceSinks;
    Replay?: Replay;
  }[];
  FlexrayControllers?: FlexrayControllers;
  /**
   * Reconfigures the EthernetControllers of the participant
   */
  EthernetControllers?: {
    /**
     * Name of the endpoint
     */
    Name: string;
    Network?: Network;
    UseTraceSinks?: UseTraceSinks;
    Replay?: Replay;
  }[];
  /**
   * Reconfigures the DataPublishers of the participant
   */
  DataPublishers?: {
    /**
     * Name of the endpoint
     */
    Name: string;
    /**
     * Name of the communication channel between DataPublisher and DataSubscribers
     */
    Topic?: string;
    UseTraceSinks?: UseTraceSinks;
  }[];
  /**
   * Reconfigures the DataSubscribers of the participant
   */
  DataSubscribers?: {
    /**
     * Name of the endpoint
     */
    Name: string;
    /**
     * Name of the communication channel between DataPublisher and DataSubscribers
     */
    Topic?: string;
    UseTraceSinks?: UseTraceSinks;
  }[];
  /**
   * Reconfigures the RpcClients of the participant
   */
  RpcClients?: {
    Name: Name;
    FunctionName?: RpcFunctionName;
    UseTraceSinks?: UseTraceSinks;
  }[];
  /**
   * Reconfigures the RpcServers of the participant
   */
  RpcServers?: {
    /**
     * Name of the endpoint
     */
    Name: string;
    /**
     * Name of the RPC function called by RpcClients on RpcServers
     */
    FunctionName?: string;
    UseTraceSinks?: UseTraceSinks;
  }[];
  Logging?: Logging;
  /**
   * Node to configure properties to determine the health status of the simulation
   */
  HealthCheck?: {
    /**
     * If a simulation step is not finished before this limit, a warning is logged. Optional; Unit is in milliseconds
     */
    SoftResponseTimeout?: number;
    /**
     * If a simulation step is not finished before this limit, the participant enters error state. Optional; Unit is in milliseconds
     */
    HardResponseTimeout?: number;
  };
  /**
   * Configures the tracing service of the participant
   */
  Tracing?: {
    TraceSinks?: {
      /**
       * Name of the trace sink
       */
      Name?: string;
      /**
       * File path of output file
       */
      OutputPath?: string;
      /**
       * File format specifier
       */
      Type?: 'PcapFile' | 'PcapPipe' | 'Mdf4File';
    }[];
    TraceSources?: {
      /**
       * Name of the trace source
       */
      Name?: string;
      /**
       * File path of input file
       */
      InputPath?: string;
      /**
       * File format specifier
       */
      Type?: 'PcapFile' | 'PcapPipe' | 'Mdf4File';
    }[];
    [k: string]: unknown | undefined;
  };
  /**
   * Optional configuration for the extension loading mechanism
   */
  Extensions?: {
    SearchPathHints?: string[];
  };
  /**
   * Optional configuration to include other participant configurations files
   */
  Includes?: {
    SearchPathHints?: string[];
    Files?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   * Optional configuration of the SIL Kit middleware
   */
  Middleware?: {
    RegistryUri?: string;
    ConnectAttempts?: number;
    TcpNoDelay?: boolean;
    TcpQuickAck?: boolean;
    TcpSendBufferSize?: number;
    TcpReceiveBufferSize?: number;
  };
}
export interface Replay {
  /**
   * Name of a trace source used as a simulation message source for this controller
   */
  UseTraceSource?: string;
  /**
   * Filter messages to use from the trace source by their direction. May be Send, Receive or Both
   */
  Direction?: 'Send' | 'Receive' | 'Both';
  MdfChannel?: {
    /**
     * Name of an MDF channel in the trace source
     */
    ChannelName?: string;
    /**
     * Name of an MDF channel's source information object
     */
    ChannelSource?: string;
    /**
     * Path of an MDF channel's source information object
     */
    ChannelPath?: string;
    /**
     * Name of an MDF channel group
     */
    GroupName?: string;
    /**
     * Name of an MDF channel group's source information object
     */
    GroupSource?: string;
    /**
     * Path of an MDF channel group's source information object
     */
    GroupPath?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface FlexrayController {
  /**
   * Name of the endpoint
   */
  Name: string;
  Network?: Network;
  UseTraceSinks?: UseTraceSinks;
  Replay?: Replay;
  ClusterParameters?: FlexrayClusterParameters;
  NodeParameters?: FlexrayNodeParameters;
  TxBufferConfigurations?: FlexrayTxBufferConfigurations;
}
export interface FlexrayClusterParameters {
  /**
   * Number of attempts for a cold start before giving up (range 2-31)
   */
  gColdstartAttempts?: number;
  /**
   * Max cycle count value in a given cluster (range 7-63, must be an odd integer)
   */
  gCycleCountMax?: number;
  /**
   * Time offset for a static slot in macroticks (range 1 - 63)
   */
  gdActionPointOffset?: number;
  /**
   * Duration of the idle phase within a dynamic slot in gdMiniSlots (range 0 - 2)
   */
  gdDynamicSlotIdlePhase?: number;
  /**
   * Duration of a mini slot in macroticks (2 - 63)
   */
  gdMiniSlot?: number;
  /**
   * Time offset for a mini slot in macroticks (range 1- 31)
   */
  gdMiniSlotActionPointOffset?: number;
  /**
   * Duration of a static slot in macroticks (range 3 - 664)
   */
  gdStaticSlot?: number;
  /**
   * Duration of the symbol window in macroticks (range 0 - 162)
   */
  gdSymbolWindow?: number;
  /**
   * Time offset for a static symbol windows in macroticks (range 1 - 63)
   */
  gdSymbolWindowActionPointOffset?: number;
  /**
   * Duration of TSS (Transmission Start Sequence) in gdBits (range 1 - 15)
   */
  gdTSSTransmitter?: number;
  /**
   * Duration of LOW Phase of a wakeup symbol in gdBit (range 15 - 60)
   */
  gdWakeupTxActive?: number;
  /**
   * Duration of the idle of a wakeup symbol in gdBit (45 - 180)
   */
  gdWakeupTxIdle?: number;
  /**
   * Upper limit for the startup listen timeout and wakeup listen timeout in the presence of noise; Used as a multiplier of pdListenTimeout (range 2 - 16)
   */
  gListenNoise?: number;
  /**
   * Number of macroticks per cycle (range 8 - 16000)
   */
  gMacroPerCycle?: number;
  /**
   * Threshold used for testing the vClockCorrectionFailed counter (range 1 - 15)
   */
  gMaxWithoutClockCorrectionFatal?: number;
  /**
   * Threshold used for testing the vClockCorrectionFailed counter (range 1 - 15)
   */
  gMaxWithoutClockCorrectionPassive?: number;
  /**
   * Number of mini slots (range 0 - 7988)
   */
  gNumberOfMiniSlots?: number;
  /**
   * Number of static slots in a cycle (range 2 - 1023)
   */
  gNumberOfStaticSlots?: number;
  /**
   * Length of the payload of a static frame in 16-Bits words (range 0 - 127)
   */
  gPayloadLengthStatic?: number;
  /**
   * Maximum number of distinct sync frame identifiers present in a given cluster (range 2 - 15)
   */
  gSyncFrameIDCountMax?: number;
  [k: string]: unknown | undefined;
}
export interface FlexrayNodeParameters {
  /**
   * Controls the transition to halt state due to clock synchronization errors. (values 0, 1)
   */
  pAllowHaltDueToClock?: number;
  /**
   * Required number of consecutive even / odd cycle pairs for normal passive to normal active (range 0 - 31)
   */
  pAllowPassiveToActive?: number;
  /**
   * Channel(s) to which the controller is connected
   */
  pChannels?: 'A' | 'B' | 'AB' | 'None';
  /**
   * Cluster drift damping factor for rate correction in microticks (range 0 - 10)
   */
  pClusterDriftDamping?: number;
  /**
   * Allowed deviation for startup frames during integration in microticks (range 29 - 2743)
   */
  pdAcceptedStartupRange?: number;
  /**
   * Duration of listen phase in microticks (range 1926 - 2567692)
   */
  pdListenTimeout?: number;
  /**
   * Slot ID of the key slot (range 0 - 1023; value 0 means that there is no key slot)
   */
  pKeySlotId?: number;
  /**
   * Shall the node enter key slot only mode after startup. (values 0, 1) (AUTOSAR pSingleSlotEnabled)
   */
  pKeySlotOnlyEnabled?: number;
  /**
   * Key slot is used for startup (values 0, 1)
   */
  pKeySlotUsedForStartup?: number;
  /**
   * Key slot is used for sync (values 0, 1)
   */
  pKeySlotUsedForSync?: number;
  /**
   * Last mini slot which can be transmitted (range 0 - 7988)
   */
  pLatestTx?: number;
  /**
   * Initial startup offset for frame reference point on channel A (range 2 - 68 macroticks)
   */
  pMacroInitialOffsetA?: number;
  /**
   * Initial startup offset for frame reference point on channel B (range 2 - 68 macroticks)
   */
  pMacroInitialOffsetB?: number;
  /**
   * Offset between secondary time reference and MT boundary (range 0 - 239 microticks)
   */
  pMicroInitialOffsetA?: number;
  /**
   * Offset between secondary time reference and MT boundary (range 0 - 239 microticks)
   */
  pMicroInitialOffsetB?: number;
  /**
   * Nominal number of microticks in the communication cycle (range 960 - 1280000)
   */
  pMicroPerCycle?: number;
  /**
   * Maximum permissible offset correction value (range 15 - 16082 microticks)
   */
  pOffsetCorrectionOut?: number;
  /**
   * Start of the offset correction phase within the NIT, (7 - 15999 macroticks)
   */
  pOffsetCorrectionStart?: number;
  /**
   * Maximum permissible rate correction value (range 3 - 3846 microticks)
   */
  pRateCorrectionOut?: number;
  /**
   * Channel used by the node to send a wakeup pattern
   */
  pWakeupChannel?: 'A' | 'B';
  /**
   * Number of repetitions of the wakeup symbol (range 0 - 63, value 0 or 1 prevents sending of WUP)
   */
  pWakeupPattern?: number;
  /**
   * Duration of a FlexRay microtick
   */
  pdMicrotick?: '12.5ns' | '25ns' | '50ns';
  /**
   * Number of samples per microtick (values 1, 2)
   */
  pSamplesPerMicrotick?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configures the properties of the SIL Kit Logging Service
 */
export interface Logging {
  /**
   * Enables receiving of remote log messages from other participants
   */
  LogFromRemotes?: boolean;
  FlushLevel?: 'Critical' | 'Error' | 'Warn' | 'Info' | 'Debug' | 'Trace' | 'Off';
  Sinks: {
    Type: 'Remote' | 'File' | 'Stdout';
    Level?: 'Critical' | 'Error' | 'Warn' | 'Info' | 'Debug' | 'Trace' | 'Off';
    /**
     * Log name; Results in the following filename: <LogName>_%y-%m-%dT%h-%m-%s.txt
     */
    LogName?: string;
  }[];
}
