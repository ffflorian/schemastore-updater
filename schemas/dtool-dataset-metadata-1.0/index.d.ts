/* eslint-disable */

/**
 * Schema for metadata attached to a dtool dataset
 */
export interface DToolDataset {
  uuid?: string;
  base_uri?: string;
  uri?: string;
  name?: string;
  type?: string;
  readme?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  manifest?: {
    items?: {
      [k: string]:
        | {
            hash?: string;
            relpath?: string;
            size_in_bytes?: number;
            utc_timestamp?: number;
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    hash_function?: string;
    dtoolcore_version?: string;
    [k: string]: unknown | undefined;
  };
  creator_username?: string;
  frozen_at?: string | number;
  created_at?: string | number;
  annotations?: {
    [k: string]: unknown | undefined;
  };
  tags?: string[];
  number_of_items?: number;
  size_in_bytes?: number;
  [k: string]: unknown | undefined;
}
