/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The item ID.
 */
export type Item = string;
/**
 * The Named Binary Tag (NBT) data of the item.
 */
export type NamedBinaryTag = string;
/**
 * The title for this advancement.
 */
export type Title =
  | string
  | boolean
  | number
  | unknown[]
  | {
      extra?: Extra;
      color?: Color;
      font?: Font;
      bold?: Bold;
      italic?: Italic;
      underlined?: Underlined;
      strikethrough?: Strikethrough;
      obfuscated?: Obfuscated;
      insertion?: Insertions;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      text?: Text;
      translate?: Translate;
      with?: With;
      [k: string]: unknown | undefined;
    };
/**
 * A child text component. Child text components inherit all formatting and interactivity from the parent component, unless they explicitly override them.
 */
export type JsonTextComponent = {
  extra?: Extra;
  color?: Color;
  font?: Font;
  bold?: Bold;
  italic?: Italic;
  underlined?: Underlined;
  strikethrough?: Strikethrough;
  obfuscated?: Obfuscated;
  insertion?: Insertions;
  clickEvent?: ClickEvent;
  hoverEvent?: HoverEvent;
  text?: Text;
  translate?: Translate;
  with?: With;
  [k: string]: unknown | undefined;
} & (
  | string
  | boolean
  | number
  | unknown[]
  | {
      extra?: Extra;
      color?: Color;
      font?: Font;
      bold?: Bold;
      italic?: Italic;
      underlined?: Underlined;
      strikethrough?: Strikethrough;
      obfuscated?: Obfuscated;
      insertion?: Insertions;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      text?: Text;
      translate?: Translate;
      with?: With;
      [k: string]: unknown | undefined;
    }
);
/**
 * The color to render the content in.
 */
export type Color = (
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
export type Font = string;
/**
 * Whether to render the content in bold.
 */
export type Bold = boolean;
/**
 * Whether to render the content in italics. Note that text that is italicized by default, such as custom item names, can be unitalicized by setting this to false.
 */
export type Italic = boolean;
/**
 * Whether to underline the content.
 */
export type Underlined = boolean;
/**
 * Whether to strikethrough the content.
 */
export type Strikethrough = boolean;
/**
 * Whether to render the content obfuscated.
 */
export type Obfuscated = boolean;
/**
 * When the text is shift-clicked by a player, this string is inserted in their chat input. It does not overwrite any existing text the player was writing. This only works in chat messages.
 */
export type Insertions = string;
/**
 * The action to perform when clicked.
 */
export type Action = "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";
/**
 * The URL, file path, chat, command or book page used by the specified action.
 */
export type Value = string;
/**
 * The type of tooltip to show.
 */
export type Action1 = "show_text" | "show_item" | "show_entity";
/**
 * The formatting and type of this tag varies depending on the action.
 */
export type Value1 = string;
/**
 * A string containing plain text to display directly. Can also be a number or boolean that is displayed directly.
 */
export type Text = string | number | boolean;
/**
 * A translation identifier, corresponding to the identifiers found in loaded language files. Displayed as the corresponding text in the player's selected language. If no corresponding translation can be found, the identifier itself is used as the translated text.
 */
export type Translate = string;
/**
 * A raw JSON text component. If no component is provided for a slot, the slot is displayed as no text.
 */
export type JsonTextComponent1 = {
  extra?: Extra;
  color?: Color;
  font?: Font;
  bold?: Bold;
  italic?: Italic;
  underlined?: Underlined;
  strikethrough?: Strikethrough;
  obfuscated?: Obfuscated;
  insertion?: Insertions;
  clickEvent?: ClickEvent;
  hoverEvent?: HoverEvent;
  text?: Text;
  translate?: Translate;
  with?: With;
  [k: string]: unknown | undefined;
} & (
  | string
  | boolean
  | number
  | unknown[]
  | {
      extra?: Extra;
      color?: Color;
      font?: Font;
      bold?: Bold;
      italic?: Italic;
      underlined?: Underlined;
      strikethrough?: Strikethrough;
      obfuscated?: Obfuscated;
      insertion?: Insertions;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      text?: Text;
      translate?: Translate;
      with?: With;
      [k: string]: unknown | undefined;
    }
);
/**
 * A list of raw JSON text components to be inserted into slots in the translation text.
 */
export type With = JsonTextComponent1[];
/**
 * A list of additional raw JSON text components to be displayed after this one.
 */
export type Extra = JsonTextComponent[];
/**
 * The type of frame for the icon.
 */
export type Frame = "challenge" | "goal" | "task";
/**
 * The directory for the background to use in this advancement tab (used only for the root advancement).
 */
export type Background = string;
/**
 * The description of the advancement.
 */
export type Description =
  | string
  | boolean
  | number
  | unknown[]
  | {
      extra?: Extra;
      color?: Color;
      font?: Font;
      bold?: Bold;
      italic?: Italic;
      underlined?: Underlined;
      strikethrough?: Strikethrough;
      obfuscated?: Obfuscated;
      insertion?: Insertions;
      clickEvent?: ClickEvent;
      hoverEvent?: HoverEvent;
      text?: Text;
      translate?: Translate;
      with?: With;
      [k: string]: unknown | undefined;
    };
/**
 * Whether or not to show the toast pop up after completing this advancement.
 */
export type ShowToast = boolean;
/**
 * Whether or not to announce in the chat when this advancement has been completed.
 */
export type AnnouceToChat = boolean;
/**
 * Whether or not to hide this advancement and all its children from the advancement screen until this advancement have been completed. Has no effect on root advancements themselves, but still affects all their children.
 */
export type Hidden = boolean;
/**
 * The parent advancement directory of this advancement. If this field is absent, this advancement is a root advancement. Circular references cause a loading failure.
 */
export type Parent = string;
/**
 * The trigger for this advancement; specifies what the game should check for the advancement.
 */
export type Trigger = string;
/**
 * A list of requirements (all the <criteriaNames>). If all criteria are required, this may be omitted. With multiple criteria: requirements contains a list of lists with criteria (all criteria need to be mentioned). If all of the lists each have any criteria met, the advancement is complete. (basically AND grouping of OR groups)
 */
export type Requirements = (string | string[])[];
/**
 * A list of recipes to unlock.
 */
export type Recipies = string[];
/**
 * A list of loot tables to give to the player.
 */
export type Loot = string[];
/**
 * An amount of experience.
 */
export type Experience = number;
/**
 * A function to run. Function tags are not allowed.
 */
export type Function = string;

/**
 * Configuration file defining an advancement for a data pack for Minecraft.
 */
export interface MinecraftDataPackAdvancement {
  display?: Display;
  parent?: Parent;
  criteria?: Criteria;
  requirements?: Requirements;
  rewards?: Rewards;
  [k: string]: unknown | undefined;
}
/**
 * The display data.
 */
export interface Display {
  icon?: Icon;
  title?: Title;
  frame?: Frame;
  background?: Background;
  description?: Description;
  show_toast?: ShowToast;
  annouce_to_chat?: AnnouceToChat;
  hidden?: Hidden;
  [k: string]: unknown | undefined;
}
/**
 * The data for the icon.
 */
export interface Icon {
  item?: Item;
  nbt?: NamedBinaryTag;
  [k: string]: unknown | undefined;
}
/**
 * Allows for events to occur when the player clicks on text. Only work in chat messages and written books, unless specified otherwise.
 */
export interface ClickEvent {
  action?: Action;
  value?: Value;
  [k: string]: unknown | undefined;
}
/**
 * Allows for a tooltip to be displayed when the player hovers their mouse over text.
 */
export interface HoverEvent {
  action?: Action1;
  value?: Value1;
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
 * The required criteria that have to be met.
 */
export interface Criteria {
  [k: string]:
    | {
        trigger?: Trigger;
        conditions?: Conditions;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * All the conditions that need to be met when the trigger gets activated.
 */
export interface Conditions {
  [k: string]: unknown | undefined;
}
/**
 * The rewards provided when this advancement is obtained.
 */
export interface Rewards {
  recipies?: Recipies;
  loot?: Loot;
  experience?: Experience;
  function?: Function;
  [k: string]: unknown | undefined;
}
