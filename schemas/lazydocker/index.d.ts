/* eslint-disable */

/**
 * A scroll height
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ScrollHeight = number;
/**
 * A language
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Language = 'auto' | 'en' | 'pl' | 'nl' | 'de' | 'tr';
/**
 * An active border color
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 *
 * @minItems 1
 */
export type ActiveBorderColor = [
  Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1,
  ...(Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1)[]
];
export type Color =
  | (
      | 'black'
      | 'red'
      | 'green'
      | 'yellow'
      | 'blue'
      | 'magenta'
      | 'cyan'
      | 'white'
      | 'bold'
      | 'default'
      | 'reverse'
      | 'underline'
      | 'strikethrough'
    )
  | {
      [k: string]: unknown | undefined;
    };
export type Color1 = string;
/**
 * An inactive border color
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 *
 * @minItems 1
 */
export type InactiveBorderColor = [
  Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1,
  ...(Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1)[]
];
/**
 * A selected line background color
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 *
 * @minItems 1
 */
export type SelectedLineBackgroundColor = [
  Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1,
  ...(Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1)[]
];
/**
 * An option text color
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 *
 * @minItems 1
 */
export type OptionsTextColor = [
  Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1,
  ...(Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1 &
    Color &
    Color1)[]
];
/**
 * Whether to return immediately
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ReturnImmediately = boolean;
/**
 * Whether to wrap main panel
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type WrapMainPanel = boolean;
/**
 * A side panel ratio of screen's width
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type SidePanelWidth = number;
/**
 * Whether to show bottom line
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ShowBottomLine = boolean;
/**
 * Whether to expand focused side panel
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ExpandFocusedSidePanel = boolean;
/**
 * A screen mode
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ScreenMode = 'normal' | 'half' | 'fullscreen';
/**
 * A style of container status and it's health display
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ContainerStatusHealthStyle = 'long' | 'short' | 'icon';
/**
 * Whether to show timestamps
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Timestamps = boolean;
/**
 * A start time
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Since = string;
/**
 * A last line count
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Tail = string | number;
/**
 * A docker compose command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type DockerCompose = string;
/**
 * A restart service command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type RestartService = string;
/**
 * An up command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Up = string;
/**
 * A down command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Down = string;
/**
 * A down with volumes command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type DownWithVolumes = string;
/**
 * An up service command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type UpService = string;
/**
 * A start service command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type StartService = string;
/**
 * A stop service command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type StopService = string;
/**
 * A service logs command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ServiceLogs = string;
/**
 * A view service logs command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ViewServiceLogs = string;
/**
 * A rebuild service command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type RebuildService = string;
/**
 * A recreate service command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type RecreateService = string;
/**
 * An all logs command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type AllLogs = string;
/**
 * A view al logs command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ViewAlLogs = string;
/**
 * A docker compose config command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type DockerComposeConfig = string;
/**
 * A check docker compose config command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type CheckDockerComposeConfig = string;
/**
 * A service top command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ServiceTop = string;
/**
 * An open command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type OpenCommand = string;
/**
 * An open link command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type OpenLinkCommand = string;
/**
 * A caption
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Caption = string;
/**
 * A path
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type StatPath = string;
/**
 * A color
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Color2 = (
  | (
      | 'black'
      | 'red'
      | 'green'
      | 'yellow'
      | 'blue'
      | 'magenta'
      | 'cyan'
      | 'white'
      | 'bold'
      | 'default'
      | 'reverse'
      | 'underline'
      | 'strikethrough'
    )
  | {
      [k: string]: unknown | undefined;
    }
) &
  string;
/**
 * Graph settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Graphs = {
  caption?: Caption;
  statPath?: StatPath;
  color?: Color2;
  [k: string]: unknown | undefined;
}[];
/**
 * A name
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Name = string;
/**
 * Whether to attach
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Attach = boolean;
/**
 * A command
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Command = string;
/**
 * Service names
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type ServiceNames = string[];
/**
 * Container settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export type Containers = {
  name?: Name;
  attach?: Attach;
  command?: Command;
  serviceNames?: ServiceNames;
  [k: string]: unknown | undefined;
}[];
/**
 * A replacement
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 *
 * This interface was referenced by `ReplacementGroup`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export type Replacement = string;

/**
 * Settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface UiSettings {
  gui?: Gui;
  logs?: Logs;
  commandTemplates?: CommandTemplates;
  os?: Os;
  stats?: Stats;
  customCommands?: CustomCommands;
  replacements?: Replacements;
  [k: string]: unknown | undefined;
}
/**
 * UI settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface Gui {
  scrollHeight?: ScrollHeight;
  language?: Language;
  theme?: Theme;
  returnImmediately?: ReturnImmediately;
  wrapMainPanel?: WrapMainPanel;
  sidePanelWidth?: SidePanelWidth;
  showBottomLine?: ShowBottomLine;
  expandFocusedSidePanel?: ExpandFocusedSidePanel;
  screenMode?: ScreenMode;
  containerStatusHealthStyle?: ContainerStatusHealthStyle;
  [k: string]: unknown | undefined;
}
/**
 * Theme settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface Theme {
  activeBorderColor?: ActiveBorderColor;
  inactiveBorderColor?: InactiveBorderColor;
  selectedLineBgColor?: SelectedLineBackgroundColor;
  optionsTextColor?: OptionsTextColor;
  [k: string]: unknown | undefined;
}
/**
 * Log settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface Logs {
  timestamps?: Timestamps;
  since?: Since;
  tail?: Tail;
  [k: string]: unknown | undefined;
}
/**
 * Command templates
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface CommandTemplates {
  dockerCompose?: DockerCompose;
  restartService?: RestartService;
  up?: Up;
  down?: Down;
  downWithVolumes?: DownWithVolumes;
  upService?: UpService;
  startService?: StartService;
  stopService?: StopService;
  serviceLogs?: ServiceLogs;
  viewServiceLogs?: ViewServiceLogs;
  rebuildService?: RebuildService;
  recreateService?: RecreateService;
  allLogs?: AllLogs;
  viewAlLogs?: ViewAlLogs;
  dockerComposeConfig?: DockerComposeConfig;
  checkDockerComposeConfig?: CheckDockerComposeConfig;
  serviceTop?: ServiceTop;
  [k: string]: unknown | undefined;
}
/**
 * OS settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface Os {
  openCommand?: OpenCommand;
  openLinkCommand?: OpenLinkCommand;
  [k: string]: unknown | undefined;
}
/**
 * Statistic settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface Stats {
  graphs?: Graphs;
  [k: string]: unknown | undefined;
}
/**
 * Custom commands
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface CustomCommands {
  containers?: Containers;
  [k: string]: unknown | undefined;
}
/**
 * Replacement settings
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 */
export interface Replacements {
  [k: string]: ReplacementGroup;
}
/**
 * A replacement group
 * https://github.com/jesseduffield/lazydocker/blob/master/docs/Config.md#default
 *
 * This interface was referenced by `Replacements`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export interface ReplacementGroup {
  [k: string]: Replacement;
}
