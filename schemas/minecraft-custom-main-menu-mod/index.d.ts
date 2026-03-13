/* eslint-disable */

/**
 * An image definition.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.*$".
 */
export type Image = Rect &
  Alignment & {
    /**
     * An image resource identifier representing the image to be displayed.
     */
    image: string;
    /**
     * An image resource identifier representing the image to be displayed when the mouse hovers over the image.
     */
    hoverImage?: string;
    slideshow?: Slideshow;
    [k: string]: unknown | undefined;
  };
/**
 * A definition for a rectangular area. Can be used to define the position and size of buttons, images, and other elements.
 */
export type Rect = Size & Position;
/**
 * A button definition. Buttons execute actions when clicked, which can be: opening a GUI (including custom ones), connecting to a server, opening a link, or loading a world.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.*$".
 */
export type Button = Rect &
  Alignment & {
    /**
     * A text resource identifier representing the text to be displayed on the button. Can be an empty string - this is useful when you want to create an 'icon button' through the 'texture' property.
     */
    text: string;
    /**
     * A text resource identifier representing the text to be displayed on the button when the mouse hovers over it.
     */
    hoverText?: string;
    /**
     * The color of the text on the button. Has to be a hexadecimal color value represented as a decimal number.
     */
    normalTextColor?: number;
    /**
     * The color of the text on the button when the mouse hovers over it. Has to be a hexadecimal color value represented as a decimal number.
     */
    hoverTextColor?: number;
    /**
     * The offset on the X-axis of the text inside the button.
     */
    textOffsetX?: number;
    /**
     * The offset on the Y-axis of the text inside the button.
     */
    textOffsetY?: number;
    /**
     * An image resource identifier representing the image to be displayed on the button i.e. the button's texture/background image. The image has to contain a normal and a hovered version of the button, one on top of the other.
     */
    texture?: string;
    /**
     * The width of the button's texture/background image in pixels. By default it is the same width as the button.
     */
    imageWidth?: number;
    /**
     * The height of the button's texture/background image in pixels. By default it is the same height as the button.
     */
    imageHeight?: number;
    /**
     * An audio resource identifier representing the sound to be played when the button is pressed.
     */
    pressSound?: string;
    /**
     * An audio resource identifier representing the sound to be played when the mouse hovers over the button.
     */
    hoverSound?: string;
    /**
     * A text resource identifier representing the text to be displayed in a tooltip when the mouse hovers over the button.
     */
    tooltip?: string;
    action?: ButtonAction;
    /**
     * The ID of a button added by another mod.
     *
     * Custom Main Menu removes all buttons added by other mods because they don't fit the schema used by CMM.
     *
     * Using Wrapped Buttons you can create buttons that mimic the functionality of those removed buttons, with the added capability of being able to define and customize them like any other CMM button.
     *
     * For them to work you need to find out the button ID of the button you want to re-add - look into your latest FML client log and search for 'wrapped button'. All removed mod buttons are logged with their respective button ID.
     */
    wrappedButton?: string;
    [k: string]: unknown | undefined;
  };
/**
 * The action to be executed when the button is clicked.
 */
export type ButtonAction = {
  [k: string]: unknown | undefined;
} & {
  type?: 'openLink' | 'openGui' | 'connectToServer' | 'loadWorld' | 'openFolder' | 'quit' | 'refresh';
  [k: string]: unknown | undefined;
};
/**
 * A label definition. Labels are used to display text on the screen.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.*$".
 */
export type Label = Size &
  Alignment & {
    /**
     * A text resource identifier representing the text to be displayed.
     */
    text: string;
    /**
     * A text resource identifier representing the text to be displayed when the mouse hovers over it.
     */
    hoverText?: string;
    /**
     * The multiplier of the font size. 2 would be twice as big, 0.5 would be half as big, etc. The default font size is 1.
     */
    fontSize?: number;
    /**
     * The color of the text. Has to be a hexadecimal color value represented as a decimal number.
     */
    color?: number;
    /**
     * The color of the text when the mouse hovers over it. Has to be a hexadecimal color value represented as a decimal number.
     */
    hoverColor?: number;
    /**
     * The anchor of the text. Makes the text left, center, or right aligned.
     */
    anchor?: 'start' | 'middle' | 'end';
    /**
     * An audio resource identifier representing a sound to play when the label is pressed.
     */
    pressSound?: string;
    /**
     * An audio resource identifier representing a sound to play when the mouse hovers over the label.
     */
    hoverSound?: string;
    [k: string]: unknown | undefined;
  };
/**
 * A splash text definition. Splash texts are the random text that appears on the main menu.
 */
export type SplashText = Position1 &
  Alignment & {
    /**
     * The color of the text. Has to be a hexadecimal color value represented as a decimal number.
     */
    color?: number;
    /**
     * A text resource identifier representing the text to be displayed. Separate splash texts are separated by newlines.
     */
    texts?: string;
    /**
     * Synced is a property for slideshows, panoramas and splash texts on the current menu.
     *
     * If it is set to true, instead of creating a new slideshow/panorama/splash text instance each time, the current menu will use the same one as the main menu. Therefore the panorama and/or the slideshow will continue to run where they left off when switching GUIs, and the splash text will stay the same.
     *
     * Notice that this property should only be set on the GUIs you want synced to the main menu, not on the main menu itself. Also if the main menu doesn't have a slideshow/panorama/splash text but you set it to sync in another menu, your game will probably crash.
     *
     * Notice that synced only works on a background slideshow, it will have no effect on an image that is a slideshow.
     */
    synced?: boolean;
    [k: string]: unknown | undefined;
  };
/**
 * A regular background of the current menu. Can be a static image, a slideshow, or the default background of eg. the options menu.
 *
 * Notice that you cannot have both a background image and a panorama at the same time.
 */
export type Background =
  | {
      /**
       * An image resource identifier representing an an image to be displayed.
       */
      image: string;
      /**
       * The image sizing/positioning mode.
       */
      mode?: ('fill' | 'stretch' | 'center' | 'tile') & string;
      slideshow?: Slideshow;
      [k: string]: unknown | undefined;
    }
  | 'options';

/**
 * A schema describing the structure of the JSON configuration files used by the Custom Main Menu Minecraft mod.
 */
export interface MinecraftCustomMainMenuModSchema {
  /**
   * A dictionary of image definitions which specify images to be displayed on the current menu.
   */
  images?: {
    [k: string]: Image;
  };
  /**
   * A dictionary of button definitions which specify buttons to be displayed on the current menu.
   */
  buttons?: {
    [k: string]: Button;
  };
  /**
   * A dictionary of label definitions which specify text labels to be displayed on the current menu.
   */
  labels?: {
    [k: string]: Label;
  };
  /**
   * A dictionary of special properties such as splash texts, backgrounds, and panoramas.
   */
  other?: {
    'splash-text'?: SplashText;
    [k: string]: unknown | undefined;
  } & {
    background?: Background;
    [k: string]: unknown | undefined;
  } & {
    panorama?: Panorama;
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A definition for the size of an element.
 */
export interface Size {
  /**
   * The width of the element in pixels.
   */
  width?: number;
  /**
   * The height of the element in pixels.
   */
  height?: number;
  [k: string]: unknown | undefined;
}
/**
 * A definition for the position of an element.
 */
export interface Position {
  /**
   * The offset on the X-axis of the element on the screen from the alignment position.
   * For example: if the alignment is set to 'top_center' and the posX is set to 0, the element's left edge will be aligned with the center of the screen.
   * If posY is also set to 0, the element's top edge will be at the top of the screen.
   */
  posX: number;
  /**
   * The offset on the Y-axis of the element on the screen from the alignment position.
   * For example: if the alignment is set to 'top_center' and the posX is set to 0, the element's left edge will be aligned with the center of the screen.
   * If posY is also set to 0, the element's top edge will be at the top of the screen.
   */
  posY: number;
  [k: string]: unknown | undefined;
}
export interface Alignment {
  /**
   * The alignment of the element relative to the screen.
   */
  alignment?:
    | 'top_right'
    | 'top_left'
    | 'top_center'
    | 'right_center'
    | 'left_center'
    | 'center'
    | 'button'
    | 'bottom_right'
    | 'bottom_left'
    | 'bottom_center';
  [k: string]: unknown | undefined;
}
/**
 * Defines the image as a slideshow, which cycles through various images, having a fading transition between them.
 */
export interface Slideshow {
  /**
   * A list of An image resource identifiers representing the images to be displayed in the slideshow.
   */
  images: string[];
  /**
   * The duration in Minecraft ticks that each image in the slideshow is displayed for before transitioning to the next.
   */
  displayDuration: number;
  /**
   * The duration in Minecraft ticks that the transition between images in the slideshow lasts for.
   */
  fadeDuration: number;
  /**
   * Whether the order of the images should be shuffled each time Minecraft runs.
   */
  shuffle?: boolean;
  /**
   * Synced is a property for slideshows, panoramas and splash texts on the current menu.
   *
   * If it is set to true, instead of creating a new slideshow/panorama/splash text instance each time, the current menu will use the same one as the main menu. Therefore the panorama and/or the slideshow will continue to run where they left off when switching GUIs, and the splash text will stay the same.
   *
   * Notice that this property should only be set on the GUIs you want synced to the main menu, not on the main menu itself. Also if the main menu doesn't have a slideshow/panorama/splash text but you set it to sync in another menu, your game will probably crash.
   *
   * Notice that synced only works on a background slideshow, it will have no effect on an image that is a slideshow.
   */
  synced?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * A definition for the position of an element.
 */
export interface Position1 {
  /**
   * The offset on the X-axis of the element on the screen from the alignment position.
   * For example: if the alignment is set to 'top_center' and the posX is set to 0, the element's left edge will be aligned with the center of the screen.
   * If posY is also set to 0, the element's top edge will be at the top of the screen.
   */
  posX: number;
  /**
   * The offset on the Y-axis of the element on the screen from the alignment position.
   * For example: if the alignment is set to 'top_center' and the posX is set to 0, the element's left edge will be aligned with the center of the screen.
   * If posY is also set to 0, the element's top edge will be at the top of the screen.
   */
  posY: number;
  [k: string]: unknown | undefined;
}
/**
 * A panorama background of the current menu, made up of 6 images.
 *
 * Notice that you cannot have both a background image and a panorama at the same time
 */
export interface Panorama {
  /**
   * Either a list of image resource identifiers representing images to be displayed in the panorama, or a single image resource identifier in the form of a string.
   */
  images?: [string, string, string, string, string, string] | string;
  /**
   * Whether the panorama should be blurred.
   */
  blur?: boolean;
  /**
   * Whether the panorama should have a top-to-bottom white-to-back gradient overlay.
   */
  gradient?: boolean;
  /**
   * Whether the panorama should spin like normal.
   */
  animate?: boolean;
  /**
   * The integer multiple of the speed of the panorama animation. 1 is the default speed, 2 is double the speed, -1 makes it play in reverse, etc.
   */
  animationSpeed?: number;
  /**
   * At which position the panorama should start from (or stay at, if 'animate' is false).
   *
   * TODO: What is the range and step of this property?
   */
  position?: number;
  /**
   * Synced is a property for slideshows, panoramas and splash texts on the current menu.
   *
   * If it is set to true, instead of creating a new slideshow/panorama/splash text instance each time, the current menu will use the same one as the main menu. Therefore the panorama and/or the slideshow will continue to run where they left off when switching GUIs, and the splash text will stay the same.
   *
   * Notice that this property should only be set on the GUIs you want synced to the main menu, not on the main menu itself. Also if the main menu doesn't have a slideshow/panorama/splash text but you set it to sync in another menu, your game will probably crash.
   *
   * Notice that synced only works on a background slideshow, it will have no effect on an image that is a slideshow.
   */
  synced?: boolean;
  [k: string]: unknown | undefined;
}
