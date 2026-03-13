/* eslint-disable */

/**
 * List of all hcpis
 */
export interface HCPIsRepository {
  hcpis?: {
    [k: string]: HCPI | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * An HCPI
 */
export interface HCPI {
  hcpiData: {
    name: string;
    'telematik-id': string;
    hcpiRole: string;
  };
  ownerTestsuite?: string;
  cards: Card[];
}
export interface Card {
  iccsn: string;
  type: string;
  expiryDate?: string;
}
