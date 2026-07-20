/* eslint-disable */

/**
 * A command
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#available-commands
 */
export type Command = string;
/**
 * Commands to execute
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#available-commands
 */
export type Commands = Command[];
/**
 * Whether to automatically focus windows underneath the cursor
 */
export type FocusFollowsCursor = boolean;
/**
 * Whether to switch back and forth between the previously focused workspace when focusing the current workspace
 */
export type ToggleWorkspaceOnRefocus = boolean;
/**
 * Whether to automatically move the cursor on the specified trigger
 */
export type Enabled = boolean;
/**
 * Trigger for cursor jump
 */
export type Trigger = 'monitor_focus' | 'window_focus';
/**
 * How windows should be hidden when switching workspaces
 */
export type HideMethod = 'cloak' | 'hide' | 'place_in_corner';
/**
 * Affects which windows get shown in the native Windows taskbar. Has no effect if hide_method is 'hide'
 */
export type ShowAllInTaskbar = boolean;
/**
 * Whether to scale the gaps with the DPI of the monitor
 */
export type ScaleWithDpi = boolean;
/**
 * Gap between adjacent windows
 */
export type InnerGap = string;
/**
 * Gap between windows and the screen edge. Can be a single string or an object with per-edge values
 */
export type OuterGap =
  | string
  | {
      top?: Top;
      right?: Right;
      bottom?: Bottom;
      left?: Left;
    };
export type Top = string;
export type Right = string;
export type Bottom = string;
export type Left = string;
/**
 * Gap between a single window and the screen edge when it's the only window in the workspace. Same format as outer_gap
 */
export type SingleWindowOuterGap =
  | string
  | {
      top?: Top;
      right?: Right;
      bottom?: Bottom;
      left?: Left;
    };
export type Color = string;
export type Style = 'square' | 'rounded' | 'small_rounded';
export type Opacity = string;
/**
 * New windows are created in this state whenever possible
 */
export type InitialState = 'tiling' | 'floating';
/**
 * Whether to center floating windows by default
 */
export type Centered = boolean;
/**
 * Whether to show floating windows as always on top
 */
export type ShownOnTop = boolean;
/**
 * Maximize the window if possible
 */
export type Maximized = boolean;
/**
 * A height of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Height = string;
/**
 * A background of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Background = string;
/**
 * A foreground of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Foreground = string;
/**
 * A font family of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type FontFamily = string;
/**
 * A font size of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type FontSize = string;
/**
 * A font weight of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type FontWeight = number;
/**
 * A border width of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type BorderWidth = string;
/**
 * A border color of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type BorderColor = string;
/**
 * A padding of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Padding = string;
/**
 * A horizontal offset of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type OffsetX = number;
/**
 * A vertical offset of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type OffsetY = number;
/**
 * A border radius of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type BorderRadius = number;
/**
 * Left component settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 *
 * @minItems 1
 */
export type ComponentsLeft = [
  {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  },
  ...({
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  })[]
];
/**
 * Center component settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 *
 * @minItems 1
 */
export type ComponentsCenter = [
  {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  },
  ...({
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  })[]
];
/**
 * Right component settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 *
 * @minItems 1
 */
export type ComponentsRight = [
  {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  },
  ...({
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  } & {
    [k: string]: unknown | undefined;
  })[]
];
/**
 * The name of the workspace
 */
export type Name = string;
/**
 * Whether to keep the workspace alive when it has no windows
 */
export type KeepAlive = boolean;
/**
 * Optional display name for the workspace, used in 3rd-party apps like Zebar
 */
export type DisplayName = string;
/**
 * Bind the workspace to a specific monitor index
 */
export type BindToMonitor = number;
/**
 * Workspace settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#workspaces
 */
export type Workspaces = {
  name: Name;
  keep_alive?: KeepAlive;
  display_name?: DisplayName;
  bind_to_monitor?: BindToMonitor;
}[];
/**
 * Match criteria for this window rule. All criteria within a match item are ANDed together. Multiple match items are ORed together
 *
 * @minItems 1
 */
export type Match = [MatchCriterion, ...MatchCriterion[]];
/**
 * Window events that trigger this rule. Defaults to [Manage, TitleChange]
 *
 * @minItems 1
 */
export type On = ['focus' | 'manage' | 'title_change', ...('focus' | 'manage' | 'title_change')[]];
/**
 * Whether to only run this rule once per window
 */
export type RunOnce = boolean;
/**
 * Window rule settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-rules
 */
export type WindowRules = {
  commands: Commands;
  match: Match;
  on?: On;
  run_once?: RunOnce;
}[];
/**
 * Keybindings for this binding mode
 *
 * @minItems 1
 */
export type Keybindings = [Keybinding, ...Keybinding[]];
/**
 * Keybindings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#keybindings
 *
 * @minItems 1
 */
export type Bindings = [Binding, ...Binding[]];
/**
 * A keybinding
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#keybindings
 */
export type Binding = string;
/**
 * Binding mode settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#binding-modes
 */
export type BindingModes = {
  name: Name;
  display_name?: DisplayName;
  keybindings: Keybindings;
}[];

export interface HttpsJsonSchemastoreOrgGlazewmJson {
  general?: General;
  gaps?: Gaps;
  window_effects?: WindowEffects;
  window_behavior?: WindowBehavior;
  bar?: Bar;
  workspaces?: Workspaces;
  window_rules?: WindowRules;
  binding_modes?: BindingModes;
  keybindings?: Keybindings;
  [k: string]: unknown | undefined;
}
/**
 * General settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general-configuration
 */
export interface General {
  startup_commands?: Commands;
  shutdown_commands?: Commands;
  config_reload_commands?: Commands;
  focus_follows_cursor?: FocusFollowsCursor;
  toggle_workspace_on_refocus?: ToggleWorkspaceOnRefocus;
  cursor_jump?: CursorJump;
  hide_method?: HideMethod;
  show_all_in_taskbar?: ShowAllInTaskbar;
}
/**
 * Cursor jump settings
 */
export interface CursorJump {
  enabled?: Enabled;
  trigger?: Trigger;
}
/**
 * Gap settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#gaps
 */
export interface Gaps {
  scale_with_dpi?: ScaleWithDpi;
  inner_gap?: InnerGap;
  outer_gap?: OuterGap;
  single_window_outer_gap?: SingleWindowOuterGap;
}
/**
 * Window effect settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-effects
 */
export interface WindowEffects {
  focused_window?: FocusedWindow;
  other_windows?: OtherWindows;
}
/**
 * Visual effects to apply to the focused window
 */
export interface FocusedWindow {
  border?: Border;
  hide_title_bar?: HideTitleBar;
  corner_style?: CornerStyle;
  transparency?: Transparency;
}
/**
 * Highlight the window with a colored border. Exclusive to Windows 11 due to API limitations
 */
export interface Border {
  enabled?: Enabled;
  color?: Color;
}
/**
 * Remove the title bar from the window's frame
 */
export interface HideTitleBar {
  enabled?: Enabled;
}
/**
 * Change the corner style of the window's frame. Exclusive to Windows 11 due to API limitations
 */
export interface CornerStyle {
  enabled?: Enabled;
  style?: Style;
}
/**
 * Change the transparency of the window
 */
export interface Transparency {
  enabled?: Enabled;
  opacity?: Opacity;
}
/**
 * Visual effects to apply to non-focused windows
 */
export interface OtherWindows {
  border?: Border1;
  hide_title_bar?: HideTitleBar1;
  corner_style?: CornerStyle1;
  transparency?: Transparency1;
}
/**
 * Highlight the window with a colored border
 */
export interface Border1 {
  enabled?: Enabled;
  color?: Color;
}
/**
 * Remove the title bar from the window's frame
 */
export interface HideTitleBar1 {
  enabled?: Enabled;
}
/**
 * Change the corner style of the window's frame
 */
export interface CornerStyle1 {
  enabled?: Enabled;
  style?: Style;
}
/**
 * Change the transparency of the window
 */
export interface Transparency1 {
  enabled?: Enabled;
  opacity?: Opacity;
}
/**
 * Window behavior settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-behavior
 */
export interface WindowBehavior {
  initial_state?: InitialState;
  state_defaults?: StateDefaults;
}
/**
 * Default options for when a new window is created
 */
export interface StateDefaults {
  floating?: Floating;
  fullscreen?: Fullscreen;
}
/**
 * Default options for floating windows
 */
export interface Floating {
  centered?: Centered;
  shown_on_top?: ShownOnTop;
}
/**
 * Default options for fullscreen windows
 */
export interface Fullscreen {
  maximized?: Maximized;
  shown_on_top?: ShownOnTop;
}
/**
 * Bar settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export interface Bar {
  height?: Height;
  opacity?: Opacity;
  background?: Background;
  foreground?: Foreground;
  font_family?: FontFamily;
  font_size?: FontSize;
  font_weight?: FontWeight;
  border_width?: BorderWidth;
  border_color?: BorderColor;
  padding?: Padding;
  offset_x?: OffsetX;
  offset_y?: OffsetY;
  border_radius?: BorderRadius;
  components_left?: ComponentsLeft;
  components_center?: ComponentsCenter;
  components_right?: ComponentsRight;
}
/**
 * A match criterion for window rules
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-rules
 */
export interface MatchCriterion {
  window_process?: WindowProcess;
  window_title?: WindowTitle;
  window_class?: WindowClass;
}
/**
 * Match by window process name
 */
export interface WindowProcess {
  /**
   * Exact match for the window process name
   */
  equals?: string;
  /**
   * Substring match for the window process name
   */
  includes?: string;
  /**
   * Regex match for the window process name
   */
  regex?: string;
  /**
   * Negative exact match for the window process name
   */
  not_equals?: string;
  /**
   * Negative regex match for the window process name
   */
  not_regex?: string;
}
/**
 * Match by window title
 */
export interface WindowTitle {
  /**
   * Exact match for the window title
   */
  equals?: string;
  /**
   * Substring match for the window title
   */
  includes?: string;
  /**
   * Regex match for the window title
   */
  regex?: string;
  /**
   * Negative exact match for the window title
   */
  not_equals?: string;
  /**
   * Negative regex match for the window title
   */
  not_regex?: string;
}
/**
 * Match by window class name
 */
export interface WindowClass {
  /**
   * Exact match for the window class name
   */
  equals?: string;
  /**
   * Substring match for the window class name
   */
  includes?: string;
  /**
   * Regex match for the window class name
   */
  regex?: string;
  /**
   * Negative exact match for the window class name
   */
  not_equals?: string;
  /**
   * Negative regex match for the window class name
   */
  not_regex?: string;
}
/**
 * A keybinding object
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#keybindings
 */
export interface Keybinding {
  commands: Commands;
  bindings: Bindings;
}
