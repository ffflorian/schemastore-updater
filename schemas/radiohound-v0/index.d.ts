/* eslint-disable */

export type Data = string;
export type Gain = number;
/**
 * The latitude where the data was captured, in decimal degrees
 */
export type Latitude = number;
/**
 * The longitude where the data was captured, in decimal degrees
 */
export type Longitude = number;
/**
 * MAC address of the device, without separators
 */
export type MacAddress = string;
/**
 * The category of this capture
 */
export type DataType = 'periodogram';
/**
 * The maximum frequency in the sample
 */
export type Fmax = number;
/**
 * The minimum frequency in the sample
 */
export type Fmin = number;
/**
 * Whether a GPS satellite lock is obtained, otherwise the last known coordinates
 */
export type GpsLock = boolean;
/**
 * Number of FFT bins, recommended to be a power of 2
 */
export type Nfft = number;
/**
 * The time taken to scan this sample, in seconds
 */
export type ScanTime = number;
/**
 * [Deprecated] The number of points in the periodogram
 */
export type Xcount = number | null;
/**
 * [Deprecated] The start frequency of the periodogram
 */
export type Xstart = number | null;
/**
 * [Deprecated] The stop frequency of the periodogram
 */
export type Xstop = number | null;
/**
 * Whether the data was archived
 */
export type ArchiveResult = boolean | null;
/**
 * Sample rate of the capture, in Hz
 */
export type SampleRate = number;
/**
 * The short name of the device
 */
export type ShortName = string;
/**
 * Timestamp of the capture start, as ISO 8601 with timezone information
 */
export type Timestamp = string;
/**
 * Numpy-compatible dtype of `data` elements
 */
export type Type = string;
/**
 * Version of the RadioHound data format
 */
export type Version = string;
/**
 * The altitude where the data was captured, in meters
 */
export type Altitude = number | null;
/**
 * The center frequency of the capture, calculated as the mean of the start and end frequencies
 */
export type CenterFrequency = number | null;
/**
 * The hardware board ID of the device capturing the data
 */
export type HardwareBoardId = string | null;
/**
 * The hardware version of the device capturing the data
 */
export type HardwareVersion = string | null;
/**
 * The scan group, used to group RH files. UUID version 4 as a 36 char string (with dashes).
 */
export type ScanGroup = string | null;
/**
 * The software version of the device capturing the data
 */
export type SoftwareVersion = string | null;
/**
 * [Deprecated | Use scan_group instead] Can be used to group scans together.
 */
export type Batch = number | null;
/**
 * [Deprecated] Suggested gain for the device
 */
export type SuggestedGain = number | null;
/**
 * [Deprecated] Uncertainty of the measurement
 */
export type Uncertainty = number | null;
/**
 * Attributes set by requestor
 */
export type Requested = {
  [k: string]: unknown | undefined;
} | null;

/**
 * Describes a RadioHound capture.
 */
export interface _RadioHoundDataV0 {
  data: Data;
  gain: Gain;
  latitude: Latitude;
  longitude: Longitude;
  mac_address: MacAddress;
  metadata: _RHMetadataV0;
  sample_rate: SampleRate;
  short_name: ShortName;
  timestamp: Timestamp;
  type: Type;
  version?: Version;
  altitude?: Altitude;
  center_frequency?: CenterFrequency;
  custom_fields?: CustomFields;
  hardware_board_id?: HardwareBoardId;
  hardware_version?: HardwareVersion;
  scan_group?: ScanGroup;
  software_version?: SoftwareVersion;
  batch?: Batch;
  suggested_gain?: SuggestedGain;
  uncertainty?: Uncertainty;
  requested?: Requested;
}
/**
 * Metadata for this capture
 */
export interface _RHMetadataV0 {
  data_type: DataType;
  fmax: Fmax;
  fmin: Fmin;
  gps_lock: GpsLock;
  nfft: Nfft;
  scan_time: ScanTime;
  xcount?: Xcount;
  xstart?: Xstart;
  xstop?: Xstop;
  archive_result?: ArchiveResult;
}
/**
 * Custom fields that are not part of the standard schema
 */
export interface CustomFields {
  [k: string]: unknown | undefined;
}
