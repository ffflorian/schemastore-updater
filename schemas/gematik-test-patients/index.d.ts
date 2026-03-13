/* eslint-disable */

/**
 * List of all patients used for testing by gematik
 */
export interface PatientsRepository {
  patients?: {
    [k: string]: Patient | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A patient
 */
export interface Patient {
  alias?: string[];
  personData: {
    name: {
      given: string;
      family: string;
      alt?: string;
    };
    gender?: 'w' | 'm' | 'd' | 'x';
    birthDate?: string | number;
    address?: {
      houseNumber?: string;
      streetName?: string;
      postalCode?: string;
      city?: string;
      country?: string;
    };
    deliveryAddress?: {
      houseNumber?: string;
      streetName?: string;
      postalCode?: string;
      city?: string;
      country?: string;
    };
    kvnr: string;
    insurance: string;
  };
  ownerTestsuite?: string;
  cards?: Card[];
  services?: {
    idp?: {
      sectIdp?: string;
      [k: string]: unknown | undefined;
    };
    vsdm?: {
      cardUpdate?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
}
export interface Card {
  iccsn: string;
  type: string;
  expiryDate?: string;
}
