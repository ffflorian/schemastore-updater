/* eslint-disable */

/**
 * A tag's for a Minecraft data pack config schema
 */
export interface MinecraftDataPackTag {
  replace?: boolean;
  /**
   * Values
   */
  values: (
    | string
    | {
        id?: string;
        /**
         * Whether it's required for the current data pack
         */
        required?: boolean;
        [k: string]: unknown | undefined;
      }
  )[];
  [k: string]: unknown | undefined;
}
