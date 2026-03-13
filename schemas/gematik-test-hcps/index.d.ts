/* eslint-disable */

/**
 * List of all hcps
 */
export interface HCPsRepository {
  hcps?: {
    [k: string]: HCP | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * An HCP
 */
export interface HCP {
  hcpData: {
    name: {
      title?: string;
      given: string;
      last: string;
    };
    'telematik-id': string;
    hcpi: string;
    hcpRole: string;
  };
  ownerTestsuite?: string;
  cards: Card[];
}
export interface Card {
  iccsn: string;
  type: string;
  expiryDate?: string;
}
