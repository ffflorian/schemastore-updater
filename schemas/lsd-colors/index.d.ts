/* eslint-disable */

/**
 * A crossterm color name, hex RGB string, xterm 0-255 color index, or RGB triplet.
 */
export type Color = string | number | [number, number, number];
export type NullableColor = Color | null;

/**
 * Color theme configuration for lsd.
 */
export interface LsdColorsYaml {
  user?: Color;
  group?: Color;
  permission?: Permission;
  attributes?: Attributes;
  date?: Date;
  size?: Size;
  inode?: ValidInvalid;
  links?: ValidInvalid;
  'tree-edge'?: Color;
  'git-status'?: GitStatus;
}
export interface Permission {
  read?: Color;
  write?: Color;
  exec?: Color;
  'exec-sticky'?: Color;
  'no-access'?: Color;
  octal?: Color;
  acl?: Color;
  context?: Color;
}
export interface Attributes {
  archive?: Color;
  read?: Color;
  hidden?: Color;
  system?: Color;
}
export interface Date {
  'hour-old'?: NullableColor;
  'day-old'?: NullableColor;
  older?: Color;
  relative?: TimeColor[];
  absolute?: TimeColor[];
}
export interface TimeColor {
  /**
   * Time threshold understood by lsd.
   */
  threshold: string;
  color: Color;
}
export interface Size {
  none?: Color;
  small?: Color;
  medium?: Color;
  large?: Color;
}
export interface ValidInvalid {
  valid?: Color;
  invalid?: Color;
}
export interface GitStatus {
  default?: Color;
  unmodified?: Color;
  ignored?: Color;
  'new-in-index'?: Color;
  'new-in-workdir'?: Color;
  typechange?: Color;
  deleted?: Color;
  renamed?: Color;
  modified?: Color;
  conflicted?: Color;
}
