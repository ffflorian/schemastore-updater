/* eslint-disable */

/**
 * Whether to automatically focus windows underneath the cursor
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export type FocusFollowsCursor = boolean;
/**
 * Whether to jump the cursor between windows focused by the WM
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export type CursorFollowsFocus = boolean;
/**
 * Whether to switch back and forth between the previously focused workspace when focusing the current workspace
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export type ToggleWorkspaceOnRefocus = boolean;
/**
 * Whether to show floating windows as always on top
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export type ShowFloatingOnTop = boolean;
/**
 * An amount to move floating windows by
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export type FloatingWindowMoveAmount = string;
/**
 * Whether to center new floating windows
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export type CenterNewFloatingWindows = boolean;
/**
 * Whether to enable window transition animations
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export type WindowAnimations = boolean | 'unchanged';
/**
 * Keybindings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#keybindings
 *
 * @minItems 1
 */
export type Keybindings = [
  (
    | {
        binding?: Binding;
        command?: Command;
      }
    | {
        bindings?: Bindings;
        command?: Command;
      }
    | {
        binding?: Binding;
        commands?: Commands;
      }
    | {
        bindings?: Bindings;
        commands?: Commands;
      }
  ),
  ...(
    | {
        binding?: Binding;
        command?: Command;
      }
    | {
        bindings?: Bindings;
        command?: Command;
      }
    | {
        binding?: Binding;
        commands?: Commands;
      }
    | {
        bindings?: Bindings;
        commands?: Commands;
      }
  )[]
];
/**
 * A binding
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#keybindings
 */
export type Binding = string;
/**
 * A command
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#available-commands
 */
export type Command = string;
/**
 * Bindings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#keybindings
 *
 * @minItems 2
 */
export type Bindings = [Binding, Binding, ...Binding[]];
/**
 * Commands
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#available-commands
 *
 * @minItems 2
 */
export type Commands = [Command, Command, ...Command[]];
/**
 * Whether to enable the active border
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#focus-window-border-configuration
 */
export type Enabled = boolean;
/**
 * A color of the active border
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#focus-window-border-configuration
 */
export type Color = string;
/**
 * Whether to enable the inactive border
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#focus-window-border-configuration
 */
export type Enabled1 = boolean;
/**
 * A color of the active border
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#focus-window-border-configuration
 */
export type Color1 = string;
/**
 * An inner gap
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#gap-configuration
 */
export type InnerGap = string;
/**
 * An outer gap
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#gap-configuration
 */
export type OuterGap = string;
/**
 * Workspace settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#workspaces-configuration
 *
 * @minItems 1
 */
export type Workspaces = [
  {
    name?: Name;
    display_name?: DisplayName;
    bind_to_monitor?: BindToMonitor;
    keep_alive?: KeepAlive;
  },
  ...{
    name?: Name;
    display_name?: DisplayName;
    bind_to_monitor?: BindToMonitor;
    keep_alive?: KeepAlive;
  }[]
];
/**
 * A unique name of the workspace
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#workspaces-configuration
 */
export type Name = string;
/**
 * A display name of the workspace
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#workspaces-configuration
 */
export type DisplayName = string;
/**
 * Whether to bind the workspace to a specific monitor
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#workspaces-configuration
 */
export type BindToMonitor = boolean;
/**
 * Whether not to destroy the workspace when it's empty
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#workspaces-configuration
 */
export type KeepAlive = boolean;
/**
 * Whether to enable the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Title = boolean;
/**
 * A height of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Height = string;
/**
 * A position of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Position = 'top' | 'bottom';
/**
 * Whether to keep the bar above other windows
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type AlwaysOnTop = boolean;
/**
 * An opacity of the bar
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export type Opacity = number;
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
  } & {
    [k: string]: unknown | undefined;
  })[]
];
/**
 * A process name to match
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-rules
 */
export type MatchProcessName = string;
/**
 * A window title to match
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-rules
 */
export type MatchTitle = string;
/**
 * A class name to match
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-rules
 */
export type MatchClassName = string;
/**
 * Windows rule settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#window-rules
 */
export type WindowsRules = {
  command?: Command;
  match_process_name?: MatchProcessName;
  match_title?: MatchTitle;
  match_class_name?: MatchClassName;
}[];

/**
 * GlazeWM settings
 */
export interface GlazeWMSettings {
  general?: General;
  keybindings?: Keybindings;
  focus_borders?: FocusBorders;
  gaps?: Gaps;
  workspaces?: Workspaces;
  bar?: Bar;
  window_rules?: WindowsRules;
  [k: string]: unknown | undefined;
}
/**
 * General settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#general
 */
export interface General {
  focus_follows_cursor?: FocusFollowsCursor;
  cursor_follows_focus?: CursorFollowsFocus;
  toggle_workspace_on_refocus?: ToggleWorkspaceOnRefocus;
  show_floating_on_top?: ShowFloatingOnTop;
  floating_window_move_amount?: FloatingWindowMoveAmount;
  center_new_floating_windows?: CenterNewFloatingWindows;
  window_animations?: WindowAnimations;
}
/**
 * Focus settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#focus-window-border-configuration
 */
export interface FocusBorders {
  active?: Active;
  inactive?: Inactive;
}
/**
 * An active border
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#focus-window-border-configuration
 */
export interface Active {
  enabled?: Enabled;
  color?: Color;
}
/**
 * An inactive border
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#focus-window-border-configuration
 */
export interface Inactive {
  enabled?: Enabled1;
  color?: Color1;
}
/**
 * Gap settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#gap-configuration
 */
export interface Gaps {
  inner_gap?: InnerGap;
  outer_gap?: OuterGap;
}
/**
 * Bar settings
 * https://github.com/glzr-io/glazewm?tab=readme-ov-file#bar-configuration
 */
export interface Bar {
  enabled?: Title;
  height?: Height;
  position?: Position;
  always_on_top?: AlwaysOnTop;
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
