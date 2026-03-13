/* eslint-disable */

export interface JSONSchemaForSideWaffleTemplateSources {
  /**
   * Includes information regarding all sources that have been added to SideWaffle.
   */
  sources?: {
    /**
     * The name of the source.
     */
    Name?: string;
    /**
     * Indicates whether the source template(s) should be added to Visual Studio.
     */
    Enabled?: boolean;
    /**
     * The location of the source to be added. This can be on a git repository or local file share.
     */
    Location?: string;
    /**
     * The branch of the source repository containing the template.
     */
    Branch?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Used by SideWaffle to determine how often Visual Studio will download and install the templates from its source.
   */
  updateInterval?: 'Always' | 'OnceADay' | 'OnceAWeek' | 'OnceAMonth' | 'Never';
  [k: string]: unknown | undefined;
}
