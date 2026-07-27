/* eslint-disable */

/**
 * Icon theme configuration for lsd.
 */
export interface LsdIconsYaml {
  name?: IconMap;
  extension?: IconMap1;
  /**
   * Icon overrides keyed by filesystem entry type.
   */
  filetype?: {
    dir?: string;
    file?: string;
    pipe?: string;
    socket?: string;
    executable?: string;
    'device-char'?: string;
    'device-block'?: string;
    special?: string;
    'symlink-dir'?: string;
    'symlink-file'?: string;
  };
}
/**
 * Icon overrides keyed by file or directory name.
 */
export interface IconMap {
  [k: string]: string | undefined;
}
/**
 * Icon overrides keyed by file extension.
 */
export interface IconMap1 {
  [k: string]: string | undefined;
}
