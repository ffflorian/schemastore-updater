/* eslint-disable */

export interface JSONSchemaForWebApplicationManifestFilesWithAppInformationExtensions {
  /**
   * Describes the expected application categories to which the web application belongs.
   */
  categories?: string[];
  /**
   * Description of the purpose of the web application
   */
  description?: string;
  /**
   * Represents an ID value of the IARC rating of the web application. It is intended to be used to determine which ages the web application is appropriate for.
   */
  iarc_rating_id?: string;
  /**
   * The screenshots member is an array of image objects represent the web application in common usage scenarios.
   */
  screenshots?: ManifestImageResource[];
  [k: string]: unknown | undefined;
}
export interface ManifestImageResource {
  /**
   * The sizes member is a string consisting of an unordered set of unique space-separated tokens which are ASCII case-insensitive that represents the dimensions of an image for visual media.
   */
  sizes?: string | 'any';
  /**
   * The src member of an image is a URL from which a user agent can fetch the icon's data.
   */
  src: string;
  /**
   * The type member of an image is a hint as to the media type of the image.
   */
  type?: string;
  purpose?:
    | 'monochrome'
    | 'maskable'
    | 'any'
    | 'monochrome maskable'
    | 'monochrome any'
    | 'maskable monochrome'
    | 'maskable any'
    | 'any monochrome'
    | 'any maskable'
    | 'monochrome maskable any'
    | 'monochrome any maskable'
    | 'maskable monochrome any'
    | 'maskable any monochrome'
    | 'any monochrome maskable'
    | 'any maskable monochrome';
  [k: string]: unknown | undefined;
}
