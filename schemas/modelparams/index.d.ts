/* eslint-disable */

/**
 * Schema for a single AI model variant entry in the modelparams.dev catalog. Documentation: https://github.com/mnfst/modelparams.dev/blob/main/docs/model-parameters-schema.md
 */
export interface ModelparamsDevModel {
  provider: string;
  authType: 'api_key' | 'subscription';
  model: string;
  params: (
    | {
        path: string;
        label: string;
        description: string;
        group:
          | 'generation_length'
          | 'sampling'
          | 'reasoning'
          | 'tooling'
          | 'output_format'
          | 'observability'
          | 'provider_metadata';
        applicability?: Applicability;
        type: 'boolean';
        default?: boolean;
      }
    | {
        path: string;
        label: string;
        description: string;
        group:
          | 'generation_length'
          | 'sampling'
          | 'reasoning'
          | 'tooling'
          | 'output_format'
          | 'observability'
          | 'provider_metadata';
        applicability?: Applicability;
        type: 'enum';
        default?: string | number | boolean | null;
        /**
         * @minItems 1
         */
        values: [string | number | boolean | null, ...(string | number | boolean | null)[]];
      }
    | {
        path: string;
        label: string;
        description: string;
        group:
          | 'generation_length'
          | 'sampling'
          | 'reasoning'
          | 'tooling'
          | 'output_format'
          | 'observability'
          | 'provider_metadata';
        applicability?: Applicability;
        type: 'integer';
        default?: number;
        range?: Range;
      }
    | {
        path: string;
        label: string;
        description: string;
        group:
          | 'generation_length'
          | 'sampling'
          | 'reasoning'
          | 'tooling'
          | 'output_format'
          | 'observability'
          | 'provider_metadata';
        applicability?: Applicability;
        type: 'number';
        default?: number;
        range?: Range;
      }
    | {
        path: string;
        label: string;
        description: string;
        group:
          | 'generation_length'
          | 'sampling'
          | 'reasoning'
          | 'tooling'
          | 'output_format'
          | 'observability'
          | 'provider_metadata';
        applicability?: Applicability;
        type: 'string';
        default?: string;
      }
  )[];
}
export interface Applicability {
  only?:
    | {
        [k: string]:
          | string
          | number
          | boolean
          | null
          | [string | number | boolean | null, ...(string | number | boolean | null)[]]
          | {
              not:
                | (string | number | boolean | null)
                | [string | number | boolean | null, ...(string | number | boolean | null)[]];
            }
          | undefined;
      }
    | [
        {
          [k: string]:
            | string
            | number
            | boolean
            | null
            | [string | number | boolean | null, ...(string | number | boolean | null)[]]
            | {
                not:
                  | (string | number | boolean | null)
                  | [string | number | boolean | null, ...(string | number | boolean | null)[]];
              }
            | undefined;
        },
        ...{
          [k: string]:
            | string
            | number
            | boolean
            | null
            | [string | number | boolean | null, ...(string | number | boolean | null)[]]
            | {
                not:
                  | (string | number | boolean | null)
                  | [string | number | boolean | null, ...(string | number | boolean | null)[]];
              }
            | undefined;
        }[]
      ];
  except?:
    | {
        [k: string]:
          | string
          | number
          | boolean
          | null
          | [string | number | boolean | null, ...(string | number | boolean | null)[]]
          | {
              not:
                | (string | number | boolean | null)
                | [string | number | boolean | null, ...(string | number | boolean | null)[]];
            }
          | undefined;
      }
    | [
        {
          [k: string]:
            | string
            | number
            | boolean
            | null
            | [string | number | boolean | null, ...(string | number | boolean | null)[]]
            | {
                not:
                  | (string | number | boolean | null)
                  | [string | number | boolean | null, ...(string | number | boolean | null)[]];
              }
            | undefined;
        },
        ...{
          [k: string]:
            | string
            | number
            | boolean
            | null
            | [string | number | boolean | null, ...(string | number | boolean | null)[]]
            | {
                not:
                  | (string | number | boolean | null)
                  | [string | number | boolean | null, ...(string | number | boolean | null)[]];
              }
            | undefined;
        }[]
      ];
}
export interface Range {
  min?: number;
  max?: number;
  step?: number;
}
