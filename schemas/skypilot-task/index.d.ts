/* eslint-disable */

export interface HttpsJsonSchemastoreOrgSkypilotTaskJson {
  name?: string;
  workdir?: string;
  event_callback?: string;
  num_nodes?: number;
  resources?: {
    [k: string]: unknown | undefined;
  };
  file_mounts?: {
    '/datasets-storage'?: {
      /**
       * Name of storage, optional when source is bucket URI
       */
      name?: string;
      /**
       * Source path, can be local or s3/gcs URL. Optional, do not specify to create an empty bucket.
       */
      source?: string;
      /**
       * Could be either 's3' or 'gcs'; default: None. Optional.
       */
      store?: 's3' | 'gcs';
      /**
       * Defaults to True; can be set to false. Optional.
       */
      persistent?: boolean;
      /**
       * Either MOUNT or COPY. Optional.
       */
      mode?: 'MOUNT' | 'COPY';
    };
    [k: string]: unknown | undefined;
  };
  service?: {
    [k: string]: unknown | undefined;
  };
  setup?: string;
  run?: string;
  envs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
     */
    [k: string]: string;
  };
  inputs?: {
    [k: string]: number | undefined;
  };
  outputs?: {
    [k: string]: number | undefined;
  };
}
