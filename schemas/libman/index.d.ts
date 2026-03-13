/* eslint-disable */

export type JSONSchemaForClientSideLibraryConfigFiles = (SpecifiedProvider | DefaultProvider) &
  (SpecifiedDestination | DefaultDestination) & {
    [k: string]: unknown | undefined;
  } & {
    /**
     * A list of library references.
     */
    libraries: LibraryEntry[];
    /**
     * The syntax version of this config file.
     */
    version: '1.0' | '3.0';
    [k: string]: unknown | undefined;
  };

export interface SpecifiedProvider {
  libraries?: {
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
export interface DefaultProvider {
  /**
   * The unique identifier of the provider to use as default.
   */
  defaultProvider?: string;
  [k: string]: unknown | undefined;
}
export interface SpecifiedDestination {
  libraries?: {
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
export interface DefaultDestination {
  /**
   * The default destination to place library files.
   */
  defaultDestination?: string;
  [k: string]: unknown | undefined;
}
export interface LibraryEntry {
  /**
   * The file names of the individual files to copy to the project.
   */
  files?: string[];
  /**
   * The unique identifier of the library.
   */
  library: string;
  /**
   * The relative folder path from this config file to the location where the files should be copied to.
   */
  destination?: string;
  /**
   * The unique identifier of the provider
   */
  provider?: string;
  /**
   * A list of file mappings.
   */
  fileMappings?: {
    /**
     * The mapping root within the library contents. If omitted, defaults to the library root.
     */
    root?: string;
    /**
     * The destination for files included in this mapping. If omitted, defaults to a destination set for the library.
     */
    destination?: string;
    /**
     * The file names of the individual files to copy to the project, relative to the specified root. If omitted, defaults to all files.
     */
    files?: string[];
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
