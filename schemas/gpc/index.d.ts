/* eslint-disable */

/**
 * Indicates that the server intends to abide by GPC requests.
 */
export type GlobalPrivacyControl1 = boolean;
export type Version = number;
/**
 * This indicates the time at which the statement of support was made, such that later changes to the meaning of the GPC standard should not affect the interpretation of the resource for legal purposes. If the member is not in a valid ISO 8601 format, the last update date and time is unknown.
 */
export type LastUpdate = string;

/**
 * Configuration for GPC, so a site can convey its support for the Global Privacy Control.
 */
export interface GlobalPrivacyControl {
  gpc: GlobalPrivacyControl1;
  version?: Version;
  lastUpdate?: LastUpdate;
  [k: string]: unknown | undefined;
}
