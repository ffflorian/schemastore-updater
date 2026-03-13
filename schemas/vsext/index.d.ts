/* eslint-disable */

export interface JSONSchemaForVisualStudioExtensionPackManifests {
  /**
   * A unique identifier for the extension pack. This is to uniquely identify the extension pack and will not be shown to the user.
   */
  id?: string;
  /**
   * The name of the extension pack.
   */
  name?: string;
  /**
   * A short description of the extension pack.
   */
  description?: string;
  /**
   * The version of the extension pack.
   */
  version: string;
  /**
   * A list of extension objects.
   */
  extensions?: {
    /**
     * The name of the extension.
     */
    name?: string;
    /**
     * The unique ID of the extension.
     */
    vsixId: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
