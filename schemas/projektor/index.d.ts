/* eslint-disable */

/**
 * A daemon keybinding
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Keybinding = string;
/**
 * A delay between daemon run with '-dry' flag
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type ForceCacheInterval = number;
/**
 * Whether to enable calculator
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Calculator = boolean & string;
/**
 * Whether to show history
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type History = boolean & string;
/**
 * Whether to show applications
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Applications = boolean & string;
/**
 * Whether to show urls
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Url = boolean & string;
/**
 * Whether to show commands
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Commands = boolean & string;
/**
 * Whether to show files
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Files = boolean & string;
/**
 * Whether to allow web search
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type WebSearch = boolean & string;
/**
 * A capacity
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Capacity = number;
/**
 * An icon
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Icon = string;
/**
 * A url template
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Engine = string;
/**
 * An entry icon
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Icon1 = string;
/**
 * A width
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Width = string;
/**
 * A height
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export type Height = string;

/**
 * Global settings
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export interface Settings {
  keybind?: Keybinding;
  forcecacheinterval?: ForceCacheInterval;
  enabledcategories?: EnabledCategories;
  history?: History1;
  url?: Url1;
  websearch?: Websearch;
  ui?: Ui;
}
/**
 * Global enabled category settings
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export interface EnabledCategories {
  calc?: Calculator;
  history?: History;
  apps?: Applications;
  url?: Url;
  commands?: Commands;
  files?: Files;
  websearch?: WebSearch;
}
/**
 * Global history settings
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export interface History1 {
  capacity?: Capacity;
}
/**
 * Global url settings
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export interface Url1 {
  capacity?: Icon;
}
/**
 * Global web search settings
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export interface Websearch {
  engine?: Engine;
  icon?: Icon1;
}
/**
 * Global UI settings
 * https://github.com/yamnikov-oleg/projektor#configuration
 */
export interface Ui {
  width?: Width;
  height?: Height;
}
