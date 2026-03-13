/* eslint-disable */

/**
 * The definition of a service in a CodeShip Pro build, which can have steps run on it or have other services depend on it
 */
export type CodeShipProService =
  | {
      [k: string]: unknown | undefined;
    }
  | undefined;

/**
 * codeship-services.yml is where you configure each service you need to run your CI/CD builds with CodeShip.
 */
export interface CodeShipProServicesConfiguration {
  [k: string]: CodeShipProService | undefined;
}
