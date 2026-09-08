/* eslint-disable */

/**
 * Allows for reusing IaaS resources from existing CPI configurations (such as pre-CPI config by using the special "" CPI name) without needing to re-upload stemcells or recreate all resources immediately.
 *
 * Introduced in: v262.8.0 (https://github.com/cloudfoundry/bosh/commit/1a98a964f9c0238ba6a9b330e20a266cde9370c0)
 */
export type MigratedFrom = {
  name: string;
  [k: string]: unknown | undefined;
}[];

/**
 * To define CPIs and CPI-specific properties for a BOSH Director.
 *
 * Introduced in: v261
 */
export interface BOSHDirectorCPIConfig {
  cpis?: CPIs[];
  [k: string]: unknown | undefined;
}
export interface CPIs {
  name: string;
  type: string;
  exec_path?: string;
  migrated_from?: MigratedFrom;
  properties?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
