/* eslint-disable */

export type HttpsJsonSchemastoreOrgPylockJson = {
  /**
   * Record the file format version that the file adheres to.
   */
  'lock-version': '1.0';
  /**
   * Items: Environment marker
   */
  environments?: string[];
  'requires-python'?: string;
  /**
   * Items: Extra name
   */
  extras?: string[];
  /**
   * Items: Dependency group name
   */
  'dependency-groups'?: string[];
  /**
   * Items: Dependency group name
   */
  'default-groups'?: string[];
  'created-by': string;
  packages: {
    name: string;
    /**
     * The version of the package.
     */
    version?: string;
    marker?: string;
    'requires-python'?: string;
    dependencies?: {
      [k: string]: unknown | undefined;
    }[];
    vcs?: Vcs;
    directory?: Directory;
    archive?: Archive;
    index?: string;
    sdist?: Sdist;
    wheels?: Wheels;
    'attestation-identities'?: {
      kind: string;
    }[];
    tool?: Tool;
  }[];
  tool?: Tool;
};
export type Url = string;
export type Path = string;
export type Subdirectory = string;
export type Size = number;
export type Wheels = {
  name?: string;
  'upload-time'?: UploadTime;
  url?: Url;
  path?: Path;
  size?: Size;
  hashes?: Hashes;
}[];

export interface Vcs {
  type?: string;
  url?: Url;
  path?: Path;
  'requested-revision'?: string;
  'commit-id'?: string;
  subdirectory?: Subdirectory;
}
export interface Directory {
  path?: string;
  editable?: boolean;
  subdirectory?: Subdirectory;
}
export interface Archive {
  url?: Url;
  path?: Path;
  size?: Size;
  'upload-time'?: UploadTime;
  hashes?: Hashes;
  subdirectory?: Subdirectory;
}
export interface UploadTime {
  [k: string]: unknown | undefined;
}
/**
 * Known hash values of the file where the key is the hash algorithm and the value is the hash value.
 */
export interface Hashes {
  [k: string]: string | undefined;
}
export interface Sdist {
  name?: string;
  'upload-time'?: UploadTime;
  url?: Url;
  path?: Path;
  size?: Size;
  hashes?: Hashes;
}
export interface Tool {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
