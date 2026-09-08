/* eslint-disable */

/**
 * Job Spec for BOSH Releases.
 *
 * Docs: https://bosh.io/docs/jobs/
 */
export interface BOSHJobSpec {
  /**
   * Name of the job.
   */
  name: string;
  /**
   * Describes purpose of the job.
   */
  description?: string;
  templates?: Templates;
  /**
   * Package dependencies required by the job at runtime.
   */
  packages?: string[];
  consumes?: Consumes[];
  provides?: Provides[];
  properties?: Properties;
  [k: string]: unknown | undefined;
}
/**
 * Template files found in the templates directory of the job without the `.erb` suffix (keys of the Hash) and their final destinations (values of the Hash), relative to the job directory on the deployed VMs.
 */
export interface Templates {
  [k: string]: string | undefined;
}
/**
 * Links that are consumed by the job for rendering ERB templates.
 */
export interface Consumes {
  /**
   * Name of the link to find.
   */
  name: string;
  /**
   * Type of the link to be found.
   *
   * Common link types: https://bosh.io/docs/links-common-types/
   */
  type: string;
  /**
   * Whether finding an matching link is optional
   */
  optional?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Links that are exposed to other jobs for rendering their ERB templates.
 */
export interface Provides {
  /**
   * Name of the exposed link.
   */
  name: string;
  /**
   * Type of the exposed link.
   */
  type: string;
  /**
   * List of property keys in dot notation
   */
  properties?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Configuration options supported by the job.
 */
export interface Properties {
  [k: string]:
    | {
        /**
         * Describes purpose of the property. This is not used by the Director, but is displayed in job configuration details provided by the [release index](https://bosh.io/releases/).
         */
        description: string;
        /**
         * The type of the property. This is only a convention for release authors to provide a type when they estimate it useful
         */
        type?: string;
        /**
         * Example value to be displayed in the [release index](https://bosh.io/releases/).
         */
        example?: {
          [k: string]: unknown | undefined;
        };
        /**
         * The default value for the property.
         */
        default?: {
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      }
    | undefined;
}
