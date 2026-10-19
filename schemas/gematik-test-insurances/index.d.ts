/* eslint-disable */

/**
 * List of all insurances
 */
export interface InsurancesRepository {
  insurances?: {
    [k: string]: Insurance | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * An insurance
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface Insurance {
  insuranceData: {
    name: string;
    'telematik-id': string;
    ik: string | number;
    iin: string | number;
  };
  ownerTestsuite?: string;
  vsdServiceProvider?: {
    name: string;
    TU: Fachdienste;
    RU: Fachdienste;
  };
}
/**
 * A list of TI service locations
 */
export interface Fachdienste {
  ufs: string;
  cms: string;
  vsdd: string;
}
