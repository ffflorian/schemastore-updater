/* eslint-disable */

export interface ERC1155Metadata {
  /**
   * Identifies the asset to which this token represents
   */
  name?: string;
  /**
   * The number of decimal places that the token amount should display - e.g. 18, means to divide the token amount by 1000000000000000000 to get its user representation.
   */
  decimals?: number;
  /**
   * Describes the asset to which this token represents
   */
  description?: string;
  /**
   * A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.
   */
  image?: string;
  /**
   * Arbitrary properties. Values may be strings, numbers, object or arrays.
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  localization?: {
    /**
     * The URI pattern to fetch localized data from. This URI should contain the substring `{locale}` which will be replaced with the appropriate locale value before sending the request.
     */
    uri: string;
    /**
     * The locale of the default data within the base JSON
     */
    default: string;
    /**
     * The list of locales for which data is available. These locales should conform to those defined in the Unicode Common Locale Data Repository (http://cldr.unicode.org/).
     */
    locales: unknown[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
