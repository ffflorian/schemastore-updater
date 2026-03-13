/* eslint-disable */

/**
 * A widget identifier
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/xlet-settings-ref.html
 *
 * This interface was referenced by `GuiStructure`'s JSON-Schema definition
 * via the `patternProperty` "\S".
 */
export type Widget = {
  [k: string]: unknown | undefined;
};

/**
 * GUI structure of Cinnamon extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/xlet-settings-ref.html
 */
export interface GuiStructure {
  [k: string]: Widget;
}
