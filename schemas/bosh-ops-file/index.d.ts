/* eslint-disable */

/**
 * A collection of operations for interpolating a YAML file.
 *
 * Docs: https://bosh.io/docs/cli-ops-files/
 */
export type BOSHOpsFile = (Replace | Remove)[];

export interface Replace {
  type: 'replace';
  path: string;
  value: unknown;
  [k: string]: unknown | undefined;
}
export interface Remove {
  type: 'remove';
  path: string;
  [k: string]: unknown | undefined;
}
