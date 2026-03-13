/* eslint-disable */

/**
 * codeship-steps.yml is where you configure each step to run in your CI/CD builds with CodeShip.
 */
export type CodeShipProStepsConfiguration = CodeShipProStep[];

/**
 * The definition of a step
 */
export interface CodeShipProStep {
  /**
   * The name of the step. Can be omitted.
   */
  name?: string;
  /**
   * The type of the step. If omitted, defaults to 'run'
   */
  type?: null | 'run' | 'serial' | 'push' | 'parallel' | 'load' | 'manual';
  /**
   * A pattern matching tags or branches this step and any of its children should be run against. Defaults to always running.
   */
  tag?: string;
  /**
   * A pattern matching tags or branches on which this step should NOT be run. Defaults to empty.
   */
  exclude?: string;
  /**
   * The service name defined in codeship-services.yml this step will run on
   */
  service?: string;
  /**
   * A list of service names defined in codeship-services.yml that will be used for this step.
   */
  services?: string[];
  /**
   * The command to be run in this step. Required with and can only be used with the 'run' type or no specified type
   */
  command?: string;
  /**
   * A list of steps to run within this step or on_fail group. Cannot be used with 'run', 'push', or 'load' steps
   */
  steps?: CodeShipProStep[];
  /**
   * The image name this push step should push to. Required with and only used by the push step
   */
  image_name?: string;
  /**
   * The image tag this push step should push to. See https://docs.cloudbees.com/docs/cloudbees-codeship/latest/pro-builds-and-configuration/steps#_push_steps for details. Only used by the push step
   */
  image_tag?: string;
  /**
   * The image registry this push step should push to. For Docker Hub, use https://registry-1.docker.io. Required with and only used by the push step
   */
  registry?: string;
  /**
   * The location of a Docker configuration file encrypted by Jet to be used with this step. Optional.
   */
  encrypted_dockercfg_path?: string;
  /**
   * The name of a service defined in codeship-services.yml that provides the Docker configuration. Optional.
   */
  dockercfg_service?: string;
  /**
   * An optional list of steps to run if this step fails.
   */
  on_fail?: CodeShipProStep[];
}
