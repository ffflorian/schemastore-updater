/* eslint-disable */

export type HttpsJsonSchemastoreOrgPylockJson = {
  /**
   * Record the file format version that the file adheres to.
   */
  'lock-version': '1.0';
  environments?: string[];
  'requires-python'?: string;
  extras?: string[];
  'dependency-groups'?: string[];
  'default-groups'?: string[];
  'created-by': string;
  packages: {
    [k: string]: unknown | undefined;
  }[];
  tool?: Tool;
};

export interface Tool {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
