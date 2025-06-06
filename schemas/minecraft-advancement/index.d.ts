/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A title for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export type Title =
  | string
  | boolean
  | number
  | unknown[]
  | {
      /**
       * A list of additional raw JSON text components to be displayed after this one.
       */
      extra?: JsonTextComponent[];
      color?: (
        | (
            | "black"
            | "dark_blue"
            | "dark_green"
            | "dark_aqua"
            | "dark_red"
            | "dark_purple"
            | "gold"
            | "gray"
            | "dark_gray"
            | "blue"
            | "green"
            | "aqua"
            | "red"
            | "light_purple"
            | "yellow"
            | "white"
            | "reset"
          )
        | {
            [k: string]: unknown | undefined;
          }
      ) &
        string;
      /**
       * The resource location of the font for this component in the resource pack within assets/<namespace>/font.
       */
      font?: string;
      /**
       * Whether to render the content in bold.
       */
      bold?: boolean;
      /**
       * Whether to render the content in italics. Note that text that is italicized by default, such as custom item names, can be unitalicized by setting this to false.
       */
      italic?: boolean;
      /**
       * Whether to underline the content.
       */
      underlined?: boolean;
      /**
       * Whether to strikethrough the content.
       */
      strikethrough?: boolean;
      /**
       * Whether to render the content obfuscated.
       */
      obfuscated?: boolean;
      /**
       * When the text is shift-clicked by a player, this string is inserted in their chat input. It does not overwrite any existing text the player was writing. This only works in chat messages.
       */
      insertion?: string;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      /**
       * A string containing plain text to display directly. Can also be a number or boolean that is displayed directly.
       */
      text?: string | number | boolean;
      /**
       * A translation identifier, corresponding to the identifiers found in loaded language files. Displayed as the corresponding text in the player's selected language. If no corresponding translation can be found, the identifier itself is used as the translated text.
       */
      translate?: string;
      /**
       * A list of raw JSON text components to be inserted into slots in the translation text.
       */
      with?: JsonTextComponent1[];
      [k: string]: unknown | undefined;
    };
/**
 * A child text component. Child text components inherit all formatting and interactivity from the parent component, unless they explicitly override them.
 */
export type JsonTextComponent = {
  /**
   * A list of additional raw JSON text components to be displayed after this one.
   */
  extra?: JsonTextComponent[];
  /**
   * The color to render the content in.
   */
  color?: (
    | (
        | "black"
        | "dark_blue"
        | "dark_green"
        | "dark_aqua"
        | "dark_red"
        | "dark_purple"
        | "gold"
        | "gray"
        | "dark_gray"
        | "blue"
        | "green"
        | "aqua"
        | "red"
        | "light_purple"
        | "yellow"
        | "white"
        | "reset"
      )
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  /**
   * The resource location of the font for this component in the resource pack within assets/<namespace>/font.
   */
  font?: string;
  /**
   * Whether to render the content in bold.
   */
  bold?: boolean;
  /**
   * Whether to render the content in italics. Note that text that is italicized by default, such as custom item names, can be unitalicized by setting this to false.
   */
  italic?: boolean;
  /**
   * Whether to underline the content.
   */
  underlined?: boolean;
  /**
   * Whether to strikethrough the content.
   */
  strikethrough?: boolean;
  /**
   * Whether to render the content obfuscated.
   */
  obfuscated?: boolean;
  /**
   * When the text is shift-clicked by a player, this string is inserted in their chat input. It does not overwrite any existing text the player was writing. This only works in chat messages.
   */
  insertion?: string;
  clickEvent?: ClickEvent;
  hoverEvent?: HoverEvent;
  /**
   * A string containing plain text to display directly. Can also be a number or boolean that is displayed directly.
   */
  text?: string | number | boolean;
  /**
   * A translation identifier, corresponding to the identifiers found in loaded language files. Displayed as the corresponding text in the player's selected language. If no corresponding translation can be found, the identifier itself is used as the translated text.
   */
  translate?: string;
  /**
   * A list of raw JSON text components to be inserted into slots in the translation text.
   */
  with?: JsonTextComponent1[];
  [k: string]: unknown | undefined;
} & (
  | string
  | boolean
  | number
  | unknown[]
  | {
      /**
       * A list of additional raw JSON text components to be displayed after this one.
       */
      extra?: JsonTextComponent[];
      color?: (
        | (
            | "black"
            | "dark_blue"
            | "dark_green"
            | "dark_aqua"
            | "dark_red"
            | "dark_purple"
            | "gold"
            | "gray"
            | "dark_gray"
            | "blue"
            | "green"
            | "aqua"
            | "red"
            | "light_purple"
            | "yellow"
            | "white"
            | "reset"
          )
        | {
            [k: string]: unknown | undefined;
          }
      ) &
        string;
      /**
       * The resource location of the font for this component in the resource pack within assets/<namespace>/font.
       */
      font?: string;
      /**
       * Whether to render the content in bold.
       */
      bold?: boolean;
      /**
       * Whether to render the content in italics. Note that text that is italicized by default, such as custom item names, can be unitalicized by setting this to false.
       */
      italic?: boolean;
      /**
       * Whether to underline the content.
       */
      underlined?: boolean;
      /**
       * Whether to strikethrough the content.
       */
      strikethrough?: boolean;
      /**
       * Whether to render the content obfuscated.
       */
      obfuscated?: boolean;
      /**
       * When the text is shift-clicked by a player, this string is inserted in their chat input. It does not overwrite any existing text the player was writing. This only works in chat messages.
       */
      insertion?: string;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      /**
       * A string containing plain text to display directly. Can also be a number or boolean that is displayed directly.
       */
      text?: string | number | boolean;
      /**
       * A translation identifier, corresponding to the identifiers found in loaded language files. Displayed as the corresponding text in the player's selected language. If no corresponding translation can be found, the identifier itself is used as the translated text.
       */
      translate?: string;
      /**
       * A list of raw JSON text components to be inserted into slots in the translation text.
       */
      with?: JsonTextComponent1[];
      [k: string]: unknown | undefined;
    }
);
/**
 * A raw JSON text component. If no component is provided for a slot, the slot is displayed as no text.
 */
export type JsonTextComponent1 = {
  /**
   * A list of additional raw JSON text components to be displayed after this one.
   */
  extra?: JsonTextComponent[];
  color?: (
    | (
        | "black"
        | "dark_blue"
        | "dark_green"
        | "dark_aqua"
        | "dark_red"
        | "dark_purple"
        | "gold"
        | "gray"
        | "dark_gray"
        | "blue"
        | "green"
        | "aqua"
        | "red"
        | "light_purple"
        | "yellow"
        | "white"
        | "reset"
      )
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  /**
   * The resource location of the font for this component in the resource pack within assets/<namespace>/font.
   */
  font?: string;
  /**
   * Whether to render the content in bold.
   */
  bold?: boolean;
  /**
   * Whether to render the content in italics. Note that text that is italicized by default, such as custom item names, can be unitalicized by setting this to false.
   */
  italic?: boolean;
  /**
   * Whether to underline the content.
   */
  underlined?: boolean;
  /**
   * Whether to strikethrough the content.
   */
  strikethrough?: boolean;
  /**
   * Whether to render the content obfuscated.
   */
  obfuscated?: boolean;
  /**
   * When the text is shift-clicked by a player, this string is inserted in their chat input. It does not overwrite any existing text the player was writing. This only works in chat messages.
   */
  insertion?: string;
  clickEvent?: ClickEvent;
  hoverEvent?: HoverEvent;
  /**
   * A string containing plain text to display directly. Can also be a number or boolean that is displayed directly.
   */
  text?: string | number | boolean;
  /**
   * A translation identifier, corresponding to the identifiers found in loaded language files. Displayed as the corresponding text in the player's selected language. If no corresponding translation can be found, the identifier itself is used as the translated text.
   */
  translate?: string;
  /**
   * A list of raw JSON text components to be inserted into slots in the translation text.
   */
  with?: JsonTextComponent1[];
  [k: string]: unknown | undefined;
} & (
  | string
  | boolean
  | number
  | unknown[]
  | {
      /**
       * A list of additional raw JSON text components to be displayed after this one.
       */
      extra?: JsonTextComponent[];
      color?: (
        | (
            | "black"
            | "dark_blue"
            | "dark_green"
            | "dark_aqua"
            | "dark_red"
            | "dark_purple"
            | "gold"
            | "gray"
            | "dark_gray"
            | "blue"
            | "green"
            | "aqua"
            | "red"
            | "light_purple"
            | "yellow"
            | "white"
            | "reset"
          )
        | {
            [k: string]: unknown | undefined;
          }
      ) &
        string;
      /**
       * The resource location of the font for this component in the resource pack within assets/<namespace>/font.
       */
      font?: string;
      /**
       * Whether to render the content in bold.
       */
      bold?: boolean;
      /**
       * Whether to render the content in italics. Note that text that is italicized by default, such as custom item names, can be unitalicized by setting this to false.
       */
      italic?: boolean;
      /**
       * Whether to underline the content.
       */
      underlined?: boolean;
      /**
       * Whether to strikethrough the content.
       */
      strikethrough?: boolean;
      /**
       * Whether to render the content obfuscated.
       */
      obfuscated?: boolean;
      /**
       * When the text is shift-clicked by a player, this string is inserted in their chat input. It does not overwrite any existing text the player was writing. This only works in chat messages.
       */
      insertion?: string;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      /**
       * A string containing plain text to display directly. Can also be a number or boolean that is displayed directly.
       */
      text?: string | number | boolean;
      /**
       * A translation identifier, corresponding to the identifiers found in loaded language files. Displayed as the corresponding text in the player's selected language. If no corresponding translation can be found, the identifier itself is used as the translated text.
       */
      translate?: string;
      /**
       * A list of raw JSON text components to be inserted into slots in the translation text.
       */
      with?: JsonTextComponent1[];
      [k: string]: unknown | undefined;
    }
);
/**
 * A background directory for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export type Path = string;
/**
 * A description for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export type Description =
  | string
  | boolean
  | number
  | unknown[]
  | {
      /**
       * A list of additional raw JSON text components to be displayed after this one.
       */
      extra?: JsonTextComponent[];
      color?: (
        | (
            | "black"
            | "dark_blue"
            | "dark_green"
            | "dark_aqua"
            | "dark_red"
            | "dark_purple"
            | "gold"
            | "gray"
            | "dark_gray"
            | "blue"
            | "green"
            | "aqua"
            | "red"
            | "light_purple"
            | "yellow"
            | "white"
            | "reset"
          )
        | {
            [k: string]: unknown | undefined;
          }
      ) &
        string;
      /**
       * The resource location of the font for this component in the resource pack within assets/<namespace>/font.
       */
      font?: string;
      /**
       * Whether to render the content in bold.
       */
      bold?: boolean;
      /**
       * Whether to render the content in italics. Note that text that is italicized by default, such as custom item names, can be unitalicized by setting this to false.
       */
      italic?: boolean;
      /**
       * Whether to underline the content.
       */
      underlined?: boolean;
      /**
       * Whether to strikethrough the content.
       */
      strikethrough?: boolean;
      /**
       * Whether to render the content obfuscated.
       */
      obfuscated?: boolean;
      /**
       * When the text is shift-clicked by a player, this string is inserted in their chat input. It does not overwrite any existing text the player was writing. This only works in chat messages.
       */
      insertion?: string;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      /**
       * A string containing plain text to display directly. Can also be a number or boolean that is displayed directly.
       */
      text?: string | number | boolean;
      /**
       * A translation identifier, corresponding to the identifiers found in loaded language files. Displayed as the corresponding text in the player's selected language. If no corresponding translation can be found, the identifier itself is used as the translated text.
       */
      translate?: string;
      /**
       * A list of raw JSON text components to be inserted into slots in the translation text.
       */
      with?: JsonTextComponent1[];
      [k: string]: unknown | undefined;
    };
/**
 * A parent directory for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export type Path1 = string;
/**
 * Check properties of the player for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Criteria
 */
export type PlayerOptions =
  | unknown[]
  | {
      [k: string]: unknown | undefined;
    };

/**
 * A data pack advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export interface DataPackAdvancement {
  display?: Display;
  parent?: Path1;
  criteria?: Criterias;
  /**
   * Requirements for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  requirements?: string[][];
  rewards?: Rewards;
  [k: string]: unknown | undefined;
}
/**
 * Display options for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export interface Display {
  icon?: Icon;
  title?: Title;
  /**
   * A frame type for the icon for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  frame?: "challenge" | "goal" | "task";
  background?: Path;
  description?: Description;
  /**
   * Whether or not to show the toast pop up after completing the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  show_toast?: boolean;
  /**
   * Whether or not to announce in the chat when the current advancement has been completed
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  annouce_to_chat?: boolean;
  /**
   * Whether or not to hide this advancement and all its children from the advancement screen until the current advancement have been completed
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  hidden?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Icon options for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export interface Icon {
  /**
   * An item identifier for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  item?: string;
  /**
   * A named binary tag of an item for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  nbt?: string;
  [k: string]: unknown | undefined;
}
/**
 * Allows for events to occur when the player clicks on text. Only work in chat messages and written books, unless specified otherwise.
 */
export interface ClickEvent {
  /**
   * The action to perform when clicked.
   */
  action?: "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";
  /**
   * The URL, file path, chat, command or book page used by the specified action.
   */
  value?: string;
  [k: string]: unknown | undefined;
}
/**
 * Allows for a tooltip to be displayed when the player hovers their mouse over text.
 */
export interface HoverEvent {
  /**
   * The type of tooltip to show.
   */
  action?: "show_text" | "show_item" | "show_entity";
  /**
   * The formatting and type of this tag varies depending on the action.
   */
  value?: string;
  contents?: Contents;
  [k: string]: unknown | undefined;
}
/**
 * The formatting of this tag varies depending on the action.
 */
export interface Contents {
  [k: string]: unknown | undefined;
}
/**
 * Required criterias have to be met for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export interface Criterias {
  [k: string]: CriteriaUndefined;
}
/**
 * Required criteria have to be met for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export interface Criteria {
  /**
   * A trigger for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Criteria
   */
  trigger?: string;
  /**
   * Conditions need to be met when the trigger gets activated for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Criteria
   */
  conditions?: {
    player?: PlayerOptions;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Rewards for the current advancement
 * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
 */
export interface Rewards {
  /**
   * Recipes to unlock for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  recipes?: string[];
  /**
   * Loot tables to give to the player for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  loot?: string[];
  /**
   * An experience amount for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  experience?: number;
  /**
   * A function to run for the current advancement
   * https://minecraft.fandom.com/wiki/Advancement/JSON_format#Legend
   */
  function?: string;
}
